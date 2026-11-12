/**
 * Web Audio and SpeechSynthesis engine for IELTS Listening playback and Speaking recording.
 */

export class AudioEngine {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static isPlaying: boolean = false;
  private static playbackRate: number = 1.0;
  private static volume: number = 1.0;
  private static audioCtx: AudioContext | null = null;
  private static timerInterval: any = null;

  public static getVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    return this.synth.getVoices();
  }

  public static playScript(
    text: string,
    accent: 'British' | 'Australian' | 'North American' | 'International',
    onProgress: (progressSec: number, durationSec: number) => void,
    onEnd: () => void,
    speed: number = 1.0
  ): void {
    this.stop();
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported in this environment');
      return;
    }

    this.playbackRate = speed;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.playbackRate;
    utterance.volume = this.volume;

    // Pick appropriate accent voice
    const voices = this.synth.getVoices();
    let targetLang = 'en-GB';
    if (accent === 'Australian') targetLang = 'en-AU';
    else if (accent === 'North American') targetLang = 'en-US';

    const voice = voices.find(v => v.lang.startsWith(targetLang)) ||
                  voices.find(v => v.lang.startsWith('en')) ||
                  null;

    if (voice) {
      utterance.voice = voice;
    }

    // Rough duration calculation: ~130 words per minute at 1.0x
    const wordsCount = text.split(/\s+/).length;
    const estimatedSec = Math.max(30, Math.round((wordsCount / 130) * 60 / speed));
    let currentSec = 0;

    this.timerInterval = setInterval(() => {
      if (this.isPlaying) {
        currentSec += 1;
        if (currentSec <= estimatedSec) {
          onProgress(currentSec, estimatedSec);
        }
      }
    }, 1000);

    utterance.onstart = () => {
      this.isPlaying = true;
      onProgress(0, estimatedSec);
    };

    utterance.onend = () => {
      this.isPlaying = false;
      if (this.timerInterval) clearInterval(this.timerInterval);
      onProgress(estimatedSec, estimatedSec);
      onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('Audio playback encountered an event:', e);
      this.isPlaying = false;
      if (this.timerInterval) clearInterval(this.timerInterval);
      onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public static pause(): void {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPlaying = false;
    }
  }

  public static resume(): void {
    if (this.synth && !this.isPlaying && this.currentUtterance) {
      this.synth.resume();
      this.isPlaying = true;
    }
  }

  public static stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.currentUtterance = null;
    }
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  public static speakWord(word: string): void {
    if (!this.synth) return;
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    this.synth.speak(utterance);
  }

  // Generates an ambient audio cue or chime
  public static playChime(type: 'start' | 'finish' | 'correct' = 'correct'): void {
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;
      if (type === 'start') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
      } else if (type === 'finish') {
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.4);
      } else {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
      }

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {
      // AudioContext policy catch
    }
  }
}

// MediaRecorder Wrapper for IELTS Speaking Practice
export class SpeakingRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;
  private recognition: any = null;
  private fullTranscript: string = '';

  public async startRecording(onTranscriptUpdate?: (transcript: string) => void): Promise<boolean> {
    try {
      this.audioChunks = [];
      this.fullTranscript = '';
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(this.stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();

      // Initialize Web Speech API if supported
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          this.recognition = new SpeechRecognition();
          this.recognition.continuous = true;
          this.recognition.interimResults = true;
          this.recognition.lang = 'en-US';

          this.recognition.onresult = (event: any) => {
            let current = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              current += event.results[i][0].transcript;
            }
            this.fullTranscript = current;
            if (onTranscriptUpdate) {
              onTranscriptUpdate(current);
            }
          };

          this.recognition.start();
        } catch (recErr) {
          console.warn('SpeechRecognition failed to initialize', recErr);
        }
      }

      return true;
    } catch (err) {
      console.error('Microphone access was denied or is unavailable', err);
      return false;
    }
  }

  public stopRecording(): Promise<{ audioUrl: string; transcript: string; duration: number }> {
    return new Promise((resolve) => {
      if (this.recognition) {
        try {
          this.recognition.stop();
        } catch (e) {}
      }

      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        resolve({ audioUrl: '', transcript: this.fullTranscript, duration: 0 });
        return;
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);

        if (this.stream) {
          this.stream.getTracks().forEach(track => track.stop());
        }

        resolve({
          audioUrl,
          transcript: this.fullTranscript,
          duration: Math.round(audioBlob.size / 4000) // approximate
        });
      };

      this.mediaRecorder.stop();
    });
  }
}
