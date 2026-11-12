import React from 'react';
import { UserProgress, PublicPage } from '../../types/ielts';
import { ArrowLeft, Clock, Calendar, Award, Database } from 'lucide-react';

interface StudyHistoryViewProps {
  progress: UserProgress;
  onNavigate: (page: PublicPage) => void;
}

export const StudyHistoryView: React.FC<StudyHistoryViewProps> = ({ progress, onNavigate }) => {
  const attempts = progress.attempts;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('progress')}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="font-display font-bold text-xl text-slate-900">
              Chronological Study History
            </h1>
            <p className="text-xs text-slate-500">
              All exercise attempts and mock test sessions recorded in this browser.
            </p>
          </div>
        </div>

        <span className="text-xs font-mono-tabular text-slate-500">
          {attempts.length} attempts recorded
        </span>
      </div>

      {attempts.length > 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
          {attempts.map((att) => {
            const dateStr = new Date(att.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
            const minutes = Math.max(1, Math.round(att.timeSpentSeconds / 60));

            return (
              <div key={att.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular">
                    <span className="uppercase font-semibold text-slate-500">{att.module}</span>
                    <span>·</span>
                    <span className="text-slate-400">{dateStr}</span>
                    <span>·</span>
                    <span className="text-slate-400">{minutes} mins</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{att.taskTitle}</h3>
                </div>

                <div className="flex items-center gap-6 font-mono-tabular text-right">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Raw Score</span>
                    <span className="text-xs font-bold text-slate-800">
                      {att.score} / {att.maxScore} ({att.percentage}%)
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Band</span>
                    <span className="text-sm font-bold text-emerald-800">
                      {att.estimatedBand.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-xs text-slate-500 space-y-3">
          <Database className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-sm font-semibold text-slate-800">No exercise attempts recorded yet</div>
          <p className="max-w-md mx-auto text-slate-500 leading-relaxed">
            As you complete Reading tasks, Listening tests, Writing submissions, or Speaking recordings, your chronological scores and band estimations will automatically appear here.
          </p>
          <button
            onClick={() => onNavigate('reading')}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Start First Reading Task
          </button>
        </div>
      )}

    </div>
  );
};
