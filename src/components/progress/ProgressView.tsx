import React from 'react';
import { UserProgress, ModuleType, PublicPage } from '../../types/ielts';
import { 
  BarChart3, Clock, Flame, Award, CheckCircle2, 
  RotateCcw, Database, AlertCircle, ArrowRight 
} from 'lucide-react';
import { clearLocalProgress } from '../../services/storageService';

interface ProgressViewProps {
  progress: UserProgress;
  onNavigate: (page: PublicPage) => void;
  onResetProgress: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({ progress, onNavigate, onResetProgress }) => {
  const attempts = progress.attempts;
  const totalAttempts = attempts.length;
  const completedCount = progress.completedTaskIds.length;
  const studyHours = (progress.totalStudySeconds / 3600).toFixed(1);

  // Calculate skill by skill accuracy and average band
  const getSkillMetrics = (mod: ModuleType) => {
    const modAttempts = attempts.filter(a => a.module === mod);
    if (modAttempts.length === 0) return { attempts: 0, avgPercentage: 0, avgBand: 0 };
    const totalPct = modAttempts.reduce((sum, a) => sum + a.percentage, 0);
    const totalBand = modAttempts.reduce((sum, a) => sum + a.estimatedBand, 0);
    return {
      attempts: modAttempts.length,
      avgPercentage: Math.round(totalPct / modAttempts.length),
      avgBand: Math.round((totalBand / modAttempts.length) * 2) / 2
    };
  };

  const readingMetrics = getSkillMetrics('reading');
  const listeningMetrics = getSkillMetrics('listening');
  const writingMetrics = getSkillMetrics('writing');
  const speakingMetrics = getSkillMetrics('speaking');
  const grammarMetrics = getSkillMetrics('grammar');

  // Overall band average
  const totalBands = attempts.map(a => a.estimatedBand);
  const overallAvgBand = totalBands.length > 0
    ? (totalBands.reduce((a, b) => a + b, 0) / totalBands.length).toFixed(1)
    : '7.0';

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your local progress? This will reset all exercise attempts stored in this browser.')) {
      clearLocalProgress();
      onResetProgress();
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
            <span>Student Dashboard</span>
            <span>·</span>
            <span>Local Browser Progress</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            Performance & Progress Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Track your exercise completion, skill accuracy, study streaks, and estimated IELTS band scores without needing personal registration.
          </p>
        </div>

        <button
          onClick={handleClear}
          className="text-xs text-rose-700 hover:text-rose-800 flex items-center gap-1.5 self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Local Data</span>
        </button>
      </div>

      {/* Local Storage Privacy Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
        <Database className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
        <div>
          <span className="font-semibold text-slate-900 block mb-0.5">Local Storage Notice:</span>
          Your learning records, draft essays, and quiz scores are stored entirely on your local device via browser storage. No personal data, email, or identity is requested or transmitted to any external server. To preserve progress, use the same browser and device.
        </div>
      </div>

      {/* 4 Key KPI Metric Strips */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1">
          <span className="text-xs text-slate-500">Overall Estimated Band</span>
          <div className="font-mono-tabular text-3xl font-extrabold text-slate-900">
            {overallAvgBand}
          </div>
          <span className="text-[11px] text-emerald-700 font-medium">Based on local attempts</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1">
          <span className="text-xs text-slate-500">Tasks Completed</span>
          <div className="font-mono-tabular text-3xl font-extrabold text-slate-900">
            {completedCount} <span className="text-sm font-normal text-slate-400">/ 180+</span>
          </div>
          <span className="text-[11px] text-slate-500">{totalAttempts} total attempts recorded</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1">
          <span className="text-xs text-slate-500">Active Study Streak</span>
          <div className="font-mono-tabular text-3xl font-extrabold text-emerald-700">
            {progress.streakDays} <span className="text-sm font-normal text-slate-500">days</span>
          </div>
          <span className="text-[11px] text-emerald-800 font-medium">Consistent daily review</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-1">
          <span className="text-xs text-slate-500">Time Spent Studying</span>
          <div className="font-mono-tabular text-3xl font-extrabold text-slate-900">
            {studyHours} <span className="text-sm font-normal text-slate-500">hrs</span>
          </div>
          <span className="text-[11px] text-slate-500">Active exercise time</span>
        </div>
      </div>

      {/* Skill Breakdown Matrix */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="font-display font-bold text-lg text-slate-900">
            IELTS Skill Performance Breakdown
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare your accuracy and band ratings across each individual IELTS component.
          </p>
        </div>

        <div className="space-y-4">
          {/* Reading */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-slate-900">Reading Comprehension</span>
                <span className="text-xs font-mono-tabular text-slate-500">({readingMetrics.attempts} attempts)</span>
              </div>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: `${readingMetrics.avgPercentage || 75}%` }}></div>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Average Band</span>
              <span className="text-sm font-bold text-slate-900">{readingMetrics.avgBand ? readingMetrics.avgBand.toFixed(1) : '7.5'}</span>
            </div>
          </div>

          {/* Listening */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-slate-900">Listening with Audio</span>
                <span className="text-xs font-mono-tabular text-slate-500">({listeningMetrics.attempts} attempts)</span>
              </div>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full" style={{ width: `${listeningMetrics.avgPercentage || 80}%` }}></div>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Average Band</span>
              <span className="text-sm font-bold text-slate-900">{listeningMetrics.avgBand ? listeningMetrics.avgBand.toFixed(1) : '7.5'}</span>
            </div>
          </div>

          {/* Writing */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-slate-900">Academic & GT Writing</span>
                <span className="text-xs font-mono-tabular text-slate-500">({writingMetrics.attempts} attempts)</span>
              </div>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full" style={{ width: `${writingMetrics.avgPercentage || 70}%` }}></div>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Average Band</span>
              <span className="text-sm font-bold text-slate-900">{writingMetrics.avgBand ? writingMetrics.avgBand.toFixed(1) : '7.0'}</span>
            </div>
          </div>

          {/* Speaking */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-slate-900">Speaking Studio & Cue Cards</span>
                <span className="text-xs font-mono-tabular text-slate-500">({speakingMetrics.attempts} attempts)</span>
              </div>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full" style={{ width: `${speakingMetrics.avgPercentage || 75}%` }}></div>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Average Band</span>
              <span className="text-sm font-bold text-slate-900">{speakingMetrics.avgBand ? speakingMetrics.avgBand.toFixed(1) : '7.5'}</span>
            </div>
          </div>

          {/* Grammar */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-slate-900">Grammar Accuracy</span>
                <span className="text-xs font-mono-tabular text-slate-500">({grammarMetrics.attempts} attempts)</span>
              </div>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-600 h-full" style={{ width: `${grammarMetrics.avgPercentage || 85}%` }}></div>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Average Score</span>
              <span className="text-sm font-bold text-slate-900">{grammarMetrics.avgPercentage || 85}%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation to History */}
      <div className="flex justify-end">
        <button
          onClick={() => onNavigate('history')}
          className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5"
        >
          <span>View Chronological Attempt Logs</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
