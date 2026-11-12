import React, { useState } from 'react';
import { grammarExercises } from '../../data/grammarExercises';
import { GrammarExercise, UserProgress } from '../../types/ielts';
import { GrammarExerciseRunner } from './GrammarExerciseRunner';
import { BookCheck, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface GrammarViewProps {
  progress: UserProgress;
}

export const GrammarView: React.FC<GrammarViewProps> = ({ progress }) => {
  const [selectedExercise, setSelectedExercise] = useState<GrammarExercise | null>(null);
  const [levelFilter, setLevelFilter] = useState<'All' | 'B1' | 'B2' | 'C1' | 'C2'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredExercises = grammarExercises.filter((ex) => {
    const matchesLevel = levelFilter === 'All' || ex.cefrLevel === levelFilter;
    const matchesSearch = ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ex.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  if (selectedExercise) {
    return (
      <GrammarExerciseRunner
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
            <span>Skill Module</span>
            <span>·</span>
            <span>36 Complete Grammar Exercises</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            IELTS Academic Grammar Mastery
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Covering all 36 vital topics from basic verb tenses to advanced cleft sentences and inversion. High-scoring rules, real IELTS examples, and interactive diagnostic quizzes.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          {(['All', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                levelFilter === lvl ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search grammar topics (e.g., Conditionals, Passive, Inversion)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800"
        />
      </div>

      {/* Grid of 36 Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((ex) => {
          const isCompleted = progress.completedTaskIds.includes(ex.id);
          return (
            <div
              key={ex.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-slate-300 ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
                  <span>Lesson {ex.number} of 36 · Level {ex.cefrLevel}</span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mastered</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-base text-slate-900 leading-snug line-clamp-1">
                  {ex.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {ex.overview}
                </p>

                <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-50">
                  <div className="flex items-center justify-between">
                    <span>Rules Explained:</span>
                    <span className="font-mono-tabular text-slate-700">{ex.rules.length} core rules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Common Pitfalls:</span>
                    <span className="font-mono-tabular text-slate-700">{ex.commonMistakes.length} error analyses</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Practice Items:</span>
                    <span className="font-mono-tabular text-slate-700">{ex.questions.length} quiz questions</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedExercise(ex)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <BookCheck className="w-3.5 h-3.5" />
                  <span>Start Grammar Lesson</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
