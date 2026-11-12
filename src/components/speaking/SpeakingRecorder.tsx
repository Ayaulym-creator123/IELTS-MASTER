import React, { useState, useEffect, useRef } from 'react';
import { SpeakingTask } from '../../types/ielts';
import { SpeakingRecorder as RecorderEngine } from '../../services/audioService';
import { recordAttempt } from '../../services/storageService';
import { 
  ArrowLeft, Mic, Square, Play, Pause, RotateCcw, 
  Clock, CheckCircle2, Sparkles, BookOpen, Volume2 
} from 'lucide-react';

interface SpeakingRecorderProps {
  task: SpeakingTask;
  onBack: () => void;
}

export const SpeakingRecorder: React.FC<SpeakingRecorderProps> = ({ task, onBack }) => {
  const [prepSeconds, setPrepSeconds] = useState<number>(task.prepTimeSeconds || 0);
  const [isPrepActive, setIsPrepActive] = useState<boolean>(false);
  const [speakSeconds, setSpeakSeconds] = useState<number>(task.speakTimeSeconds);
  const [isSpeakingTimerActive, setIsSpeakingTimerActive] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string>('');
  const [transcript, setTranscript] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'practice' | 'modelAnswer' | 'rubric'>('practice');
  const [assessedBand, setAssessedBand] = useState<number | null>(null);

  const recorderRef = useRef<RecorderEngine | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // 1-min prep timer countdown
  useEffect(() => {
    let interval: any = null;
    if (isPrepActive && prepSeconds > 0) {
      interval = setInterval(() => {
        setPrepSeconds(prev => {
          if (prev <= 1) {
            setIsPrepActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPrepActive, prepSeconds]);

  // Speaking timer countdown
  useEffect(() => {
    let interval: any = null;
    if (isSpeakingTimerActive && speakSeconds > 0) {
      interval = setInterval(() => {
        setSpeakSeconds(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSpeakingTimerActive, speakSeconds]);

  const handleStartRecording = async () => {
    if (!recorderRef.current) {
      recorderRef.current = new RecorderEngine();
    }
    const started = await recorderRef.current.startRecording((liveText) => {
      setTranscript(liveText);
    });

    if (started) {
      setIsRecording(true);
      setIsSpeakingTimerActive(true);
      setRecordedAudioUrl('');
    } else {
      alert('Microphone access is needed for speaking practice. Please ensure microphone permissions are granted in your browser.');
    }
  };

  const handleStopRecording = async () => {
    if (!recorderRef.current || !isRecording) return;
    setIsRecording(false);
    setIsSpeakingTimerActive(false);
    const result = await recorderRef.current.stopRecording();
    setRecordedAudioUrl(result.audioUrl);
    if (result.transcript) {
      setTranscript(result.transcript);
    }

    // Default estimate for self assessment
    setAssessedBand(7.5);
    recordAttempt('speaking', task.id, task.title, 7.5, 9.0, task.speakTimeSeconds - speakSeconds);
  };

  const handleReset = () => {
    setIsRecording(false);
    setIsPrepActive(false);
    setIsSpeakingTimerActive(false);
    setPrepSeconds(task.prepTimeSeconds || 0);
    setSpeakSeconds(task.speakTimeSeconds);
    setRecordedAudioUrl('');
    setTranscript('');
    setAssessedBand(null);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <span>Part {task.part} Speaking</span>
              <span>·</span>
              <span>{task.speakTimeSeconds}s Practice</span>
              <span>·</span>
              <span>{task.topicCategory}</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">{task.title}</h2>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          title="Reset task"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'practice' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Speaking Studio
        </button>
        <button
          onClick={() => setActiveTab('modelAnswer')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'modelAnswer' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Band 8.5 Model Response</span>
        </button>
        <button
          onClick={() => setActiveTab('rubric')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'rubric' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>IELTS Rubric & Scoring</span>
        </button>
      </div>

      {/* Speaking Studio Tab */}
      {activeTab === 'practice' && (
        <div className="space-y-6">
          
          {/* Cue Card or Questions Box */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
                {task.part === 2 ? 'IELTS Candidate Cue Card' : `Part ${task.part} Questions`}
              </span>
              <span className="text-xs font-mono-tabular text-slate-600">
                Time limit: {Math.round(task.speakTimeSeconds / 60)} minutes
              </span>
            </div>

            <h3 className="font-display font-bold text-lg text-slate-900">
              {task.title}
            </h3>

            {task.cueCardPoints && task.cueCardPoints.length > 0 ? (
              <div className="space-y-2">
                <span className="text-xs text-slate-700 font-semibold block">You should say:</span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {task.cueCardPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ) : task.questions && task.questions.length > 0 ? (
              <div className="space-y-2.5">
                {task.questions.map((q, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg text-xs sm:text-sm text-slate-800 font-medium border border-slate-100">
                    <span className="text-slate-500 mr-2 font-mono-tabular">Q{idx + 1}.</span>
                    {q}
                  </div>
                ))}
              </div>
            ) : null}

            {/* Useful Topic Collocations */}
            {task.usefulPhrases.length > 0 && (
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700 block mb-2">High-Scoring Band 8+ Collocations:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {task.usefulPhrases.map((phrase, pIdx) => (
                    <span key={pIdx} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium text-[11px]">
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Timers & Audio Recorder Console */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Prep Timer (Part 2) */}
              {task.prepTimeSeconds ? (
                <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">1-Minute Preparation Timer</span>
                    <span className="font-mono-tabular text-2xl font-bold text-white">
                      {formatTimer(prepSeconds)}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsPrepActive(!isPrepActive)}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    {isPrepActive ? 'Pause Prep' : 'Start Prep (60s)'}
                  </button>
                </div>
              ) : null}

              {/* Speaking Practice Timer */}
              <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Speaking Practice Timer</span>
                  <span className="font-mono-tabular text-2xl font-bold text-emerald-400">
                    {formatTimer(speakSeconds)}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono-tabular">
                  {isRecording ? 'Recording active' : 'Ready'}
                </div>
              </div>
            </div>

            {/* Record / Stop Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Mic className="w-4 h-4 text-rose-600" />
                  <span>Start Audio Recording</span>
                </button>
              ) : (
                <button
                  onClick={handleStopRecording}
                  className="px-6 py-3.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors flex items-center gap-2 shadow-sm animate-pulse"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Stop & Save Recording</span>
                </button>
              )}
            </div>

            {/* Audio Playback Player */}
            {recordedAudioUrl && (
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-2">
                <span className="text-xs text-slate-300 font-semibold block">Your Audio Playback:</span>
                <audio ref={audioPlayerRef} controls src={recordedAudioUrl} className="w-full h-10" />
              </div>
            )}

            {/* Real-time transcript if captured */}
            {transcript && (
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                  Speech Recognition Transcript:
                </span>
                <p className="leading-relaxed font-sans">{transcript}</p>
              </div>
            )}

          </div>

          {/* Assessment Summary if recorded */}
          {assessedBand && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block">
                  Speaking Session Recorded & Saved
                </span>
                <div className="text-xs text-emerald-900 mt-0.5">
                  Your audio recording has been stored locally. Review your fluency, collocations, and pacing against the model answer.
                </div>
              </div>
              <div className="text-right font-mono-tabular">
                <span className="text-xs text-emerald-700 block">Target Band</span>
                <span className="text-xl font-bold text-emerald-900">{assessedBand.toFixed(1)}</span>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Model Answer Tab */}
      {activeTab === 'modelAnswer' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
              Band 8.5+ Native-Level Exemplar
            </span>
            <h3 className="font-display font-bold text-lg text-slate-900 mt-1">
              Verbatim Model Transcript
            </h3>
          </div>

          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50 p-5 rounded-xl border border-slate-200 font-sans">
            {task.modelResponse}
          </div>
        </div>
      )}

      {/* Official Rubric Tab */}
      {activeTab === 'rubric' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Official IELTS Speaking Assessment Criteria
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Each criterion represents 25% of your total speaking examination band score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">1. Fluency and Coherence</span>
              <p className="text-slate-600 leading-relaxed">
                Speaks fluently with only rare repetition or self-correction. Connects ideas seamlessly using natural discourse markers without unnatural pauses.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">2. Lexical Resource</span>
              <p className="text-slate-600 leading-relaxed">
                Uses a wide vocabulary readily and flexibly to convey precise meaning. Employs idiomatic expressions and topic collocations naturally.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">3. Grammatical Range and Accuracy</span>
              <p className="text-slate-600 leading-relaxed">
                Uses a full range of complex sentence structures with sustained flexibility and high accuracy. Minor slips do not impede meaning.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-semibold text-slate-900 block">4. Pronunciation</span>
              <p className="text-slate-600 leading-relaxed">
                Uses a full range of phonological features (stress, intonation, connected rhythm) with effortless intelligibility throughout.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
