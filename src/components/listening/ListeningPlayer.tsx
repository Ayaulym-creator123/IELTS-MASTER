import React, { useState, useEffect } from 'react';
import { AudioEngine } from '../../services/audioService';
import { Play, Pause, RotateCcw, Volume2, FastForward, Clock } from 'lucide-react';

interface ListeningPlayerProps {
  script: string;
  accent: 'British' | 'Australian' | 'North American' | 'International';
  durationSeconds: number;
  onEnded?: () => void;
}

export const ListeningPlayer: React.FC<ListeningPlayerProps> = ({
  script,
  accent,
  durationSeconds,
  onEnded
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1.0);
  const [replayCount, setReplayCount] = useState<number>(0);

  useEffect(() => {
    return () => {
      AudioEngine.stop();
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      AudioEngine.pause();
      setIsPlaying(false);
    } else {
      if (currentProgress > 0) {
        AudioEngine.resume();
        setIsPlaying(true);
      } else {
        AudioEngine.playScript(
          script,
          accent,
          (progressSec) => {
            setCurrentProgress(progressSec);
          },
          () => {
            setIsPlaying(false);
            if (onEnded) onEnded();
          },
          speed
        );
        setIsPlaying(true);
        setReplayCount(prev => prev + 1);
      }
    }
  };

  const handleRestart = () => {
    AudioEngine.stop();
    setCurrentProgress(0);
    AudioEngine.playScript(
      script,
      accent,
      (progressSec) => {
        setCurrentProgress(progressSec);
      },
      () => {
        setIsPlaying(false);
        if (onEnded) onEnded();
      },
      speed
    );
    setIsPlaying(true);
    setReplayCount(prev => prev + 1);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (isPlaying) {
      AudioEngine.stop();
      AudioEngine.playScript(
        script,
        accent,
        (progressSec) => setCurrentProgress(progressSec),
        () => {
          setIsPlaying(false);
          if (onEnded) onEnded();
        },
        newSpeed
      );
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = durationSeconds > 0 ? Math.min(100, (currentProgress / durationSeconds) * 100) : 0;

  return (
    <div className="bg-slate-900 text-white rounded-xl p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        
        {/* Play / Pause / Replay */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm"
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={handleRestart}
            className="p-2.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            title="Restart audio from beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div>
            <div className="text-xs font-semibold text-white">IELTS Audio Track ({accent} Accent)</div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono-tabular">
              <span>{formatSeconds(currentProgress)} / {formatSeconds(durationSeconds)}</span>
              <span>·</span>
              <span>Replays: {replayCount}</span>
            </div>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-lg text-xs font-mono-tabular">
          {[0.75, 1.0, 1.25].map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`px-2.5 py-1 rounded transition-colors ${
                speed === s
                  ? 'bg-slate-700 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 font-mono-tabular">
          <span>0:00</span>
          <span>{formatSeconds(durationSeconds)}</span>
        </div>
      </div>
    </div>
  );
};
