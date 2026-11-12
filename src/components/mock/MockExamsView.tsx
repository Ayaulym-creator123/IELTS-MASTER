import React, { useState } from 'react';
import { mockExams } from '../../data/mockExams';
import { MockExam, UserProgress } from '../../types/ielts';
import { MockExamRunner } from './MockExamRunner';
import { Award, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MockExamsViewProps {
  progress: UserProgress;
}

export const MockExamsView: React.FC<MockExamsViewProps> = ({ progress }) => {
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  const [typeFilter, setTypeFilter] = useState<'All' | 'Academic' | 'General Training'>('All');

  const filteredExams = mockExams.filter(exam => {
    if (typeFilter === 'All') return true;
    return exam.type === typeFilter;
  });

  if (selectedExam) {
    return (
      <MockExamRunner
        mockExam={selectedExam}
        progress={progress}
        onBack={() => setSelectedExam(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
            <span>Examination Suite</span>
            <span>·</span>
            <span>Full 4-Component Mock Tests</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            Official IELTS Mock Examinations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Simulate the full 165-minute official IELTS test under realistic conditions. Features complete Listening audio tracks, full 3-passage Reading, Task 1 & 2 writing editor, and recorded Speaking cue cards.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          {(['All', 'Academic', 'General Training'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                typeFilter === t
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Tests Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExams.map((exam, idx) => {
          const isCompleted = progress.completedTaskIds.includes(exam.id);
          return (
            <div
              key={exam.id}
              className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-slate-300 shadow-sm ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
                  <span>Exam {idx + 1} · {exam.type.toUpperCase()}</span>
                  <div className="flex items-center gap-1 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.totalDurationMinutes} mins total</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 leading-snug">
                  {exam.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {exam.description}
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
                  <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Test Structure:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-slate-600">
                    <div>· Listening: 40 questions (audio)</div>
                    <div>· Reading: 3 full passages</div>
                    <div>· Writing: Task 1 + Task 2</div>
                    <div>· Speaking: Parts 1, 2, 3</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-mono-tabular">
                  <span>No login required · Immediate start</span>
                </div>
                <button
                  onClick={() => setSelectedExam(exam)}
                  className="py-2.5 px-5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>{isCompleted ? 'Retake Examination' : 'Start Mock Exam'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
