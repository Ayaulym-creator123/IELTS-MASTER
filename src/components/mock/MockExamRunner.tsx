import React, { useState } from 'react';
import { MockExam, UserProgress } from '../../types/ielts';
import { readingTasks } from '../../data/readingTasks';
import { listeningTasks } from '../../data/listeningTasks';
import { writingTasks } from '../../data/writingTasks';
import { speakingTasks } from '../../data/speakingTasks';
import { ReadingTaskRunner } from '../reading/ReadingTaskRunner';
import { ListeningTaskRunner } from '../listening/ListeningTaskRunner';
import { WritingEditor } from '../writing/WritingEditor';
import { SpeakingRecorder } from '../speaking/SpeakingRecorder';
import { recordAttempt } from '../../services/storageService';
import { 
  ArrowLeft, Award, Clock, BookOpen, Headphones, 
  PenTool, Mic, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface MockExamRunnerProps {
  mockExam: MockExam;
  progress: UserProgress;
  onBack: () => void;
}

export const MockExamRunner: React.FC<MockExamRunnerProps> = ({ mockExam, progress, onBack }) => {
  const [activeSkill, setActiveSkill] = useState<'listening' | 'reading' | 'writing' | 'speaking' | 'summary'>('listening');
  const [examScores, setExamScores] = useState<{
    listeningBand: number;
    readingBand: number;
    writingBand: number;
    speakingBand: number;
  }>({
    listeningBand: 7.5,
    readingBand: 8.0,
    writingBand: 7.0,
    speakingBand: 7.5
  });

  const readingTask = readingTasks.find(t => t.id === mockExam.readingTaskId) || readingTasks[0];
  const listeningTask = listeningTasks.find(t => t.id === mockExam.listeningTaskId) || listeningTasks[0];
  const writingTask1 = writingTasks.find(t => t.id === mockExam.writingTask1Id) || writingTasks[0];
  const writingTask2 = writingTasks.find(t => t.id === mockExam.writingTask2Id) || writingTasks[4];
  const speakingTask = speakingTasks.find(t => t.id === mockExam.speakingTaskId) || speakingTasks[1];

  const overallBand = Math.round(((examScores.listeningBand + examScores.readingBand + examScores.writingBand + examScores.speakingBand) / 4) * 2) / 2;

  const handleFinishExam = () => {
    setActiveSkill('summary');
    recordAttempt(
      'mock-exams',
      mockExam.id,
      mockExam.title,
      overallBand,
      9.0,
      mockExam.totalDurationMinutes * 60,
      { ...examScores, overall: overallBand }
    );
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Top Examination Control Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-300 font-mono-tabular">
                <span>{mockExam.type} Full Mock Test</span>
                <span>·</span>
                <span>165 Minutes Total</span>
              </div>
              <h2 className="text-base font-bold text-white tracking-tight">{mockExam.title}</h2>
            </div>
          </div>

          <button
            onClick={handleFinishExam}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Complete Exam & View Report</span>
          </button>
        </div>

        {/* 4 Skill Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveSkill('listening')}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeSkill === 'listening'
                ? 'bg-slate-800 border-white text-white font-semibold'
                : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Headphones className="w-3.5 h-3.5" />
              <span>1. Listening</span>
            </div>
            <div className="text-[11px] font-mono-tabular opacity-80">30 mins · Audio</div>
          </button>

          <button
            onClick={() => setActiveSkill('reading')}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeSkill === 'reading'
                ? 'bg-slate-800 border-white text-white font-semibold'
                : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. Reading</span>
            </div>
            <div className="text-[11px] font-mono-tabular opacity-80">60 mins · 3 Passages</div>
          </button>

          <button
            onClick={() => setActiveSkill('writing')}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeSkill === 'writing'
                ? 'bg-slate-800 border-white text-white font-semibold'
                : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <PenTool className="w-3.5 h-3.5" />
              <span>3. Writing</span>
            </div>
            <div className="text-[11px] font-mono-tabular opacity-80">60 mins · Task 1 & 2</div>
          </button>

          <button
            onClick={() => setActiveSkill('speaking')}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeSkill === 'speaking'
                ? 'bg-slate-800 border-white text-white font-semibold'
                : 'border-slate-800 bg-slate-800/40 text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2 text-xs mb-1">
              <Mic className="w-3.5 h-3.5" />
              <span>4. Speaking</span>
            </div>
            <div className="text-[11px] font-mono-tabular opacity-80">15 mins · Interview</div>
          </button>
        </div>
      </div>

      {/* Active Skill Workspace */}
      {activeSkill === 'listening' && (
        <ListeningTaskRunner task={listeningTask} onBack={() => setActiveSkill('reading')} />
      )}

      {activeSkill === 'reading' && (
        <ReadingTaskRunner task={readingTask} onBack={() => setActiveSkill('writing')} />
      )}

      {activeSkill === 'writing' && (
        <div className="space-y-8">
          <WritingEditor task={writingTask1} progress={progress} onBack={() => setActiveSkill('listening')} />
        </div>
      )}

      {activeSkill === 'speaking' && (
        <SpeakingRecorder task={speakingTask} onBack={() => setActiveSkill('summary')} />
      )}

      {/* Final Examination Report Summary */}
      {activeSkill === 'summary' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
              IELTS Mock Examination Report
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Official Diagnostic Test Report Form for {mockExam.title} ({mockExam.type}).
            </p>
          </div>

          {/* Overall Band Banner */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider font-mono-tabular">
                Overall Composite Band Score
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-mono-tabular mt-1 text-white">
                Band {overallBand.toFixed(1)}
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Competent to Good User. You possess operational command of the language with occasional inaccuracies or misunderstandings.
              </p>
            </div>

            <div className="text-right font-mono-tabular">
              <span className="text-xs text-slate-400 block">CEFR Equivalent</span>
              <span className="text-xl font-bold text-emerald-400">C1 (Advanced)</span>
            </div>
          </div>

          {/* 4 Skill Score Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span className="text-xs text-slate-500 font-medium block">Listening</span>
              <span className="text-2xl font-bold font-mono-tabular text-slate-900">{examScores.listeningBand.toFixed(1)}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block">Very Good User</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span className="text-xs text-slate-500 font-medium block">Reading</span>
              <span className="text-2xl font-bold font-mono-tabular text-slate-900">{examScores.readingBand.toFixed(1)}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block">Very Good User</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span className="text-xs text-slate-500 font-medium block">Writing</span>
              <span className="text-2xl font-bold font-mono-tabular text-slate-900">{examScores.writingBand.toFixed(1)}</span>
              <span className="text-[10px] text-slate-600 font-semibold block">Good User</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span className="text-xs text-slate-500 font-medium block">Speaking</span>
              <span className="text-2xl font-bold font-mono-tabular text-slate-900">{examScores.speakingBand.toFixed(1)}</span>
              <span className="text-[10px] text-emerald-700 font-semibold block">Very Good User</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => setActiveSkill('listening')}
              className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Review Examination Answers
            </button>
            <button
              onClick={onBack}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              Back to Mock Exams List
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
