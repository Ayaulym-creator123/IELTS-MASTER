import React, { useState } from 'react';
import { readingTasks } from '../../data/readingTasks';
import { ReadingTask, UserProgress } from '../../types/ielts';
import { ReadingTaskRunner } from './ReadingTaskRunner';
import { BookOpen, Search, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

interface ReadingViewProps {
  progress: UserProgress;
}

export const ReadingView: React.FC<ReadingViewProps> = ({ progress }) => {
  const [selectedTask, setSelectedTask] = useState<ReadingTask | null>(null);
  const [moduleFilter, setModuleFilter] = useState<'All' | 'Academic' | 'General Training'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTasks = readingTasks.filter((task) => {
    const matchesModule = moduleFilter === 'All' || task.module === moduleFilter;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.topicCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModule && matchesSearch;
  });

  if (selectedTask) {
    return (
      <ReadingTaskRunner
        task={selectedTask}
        onBack={() => setSelectedTask(null)}
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
            <span>36 Complete Reading Tasks</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            IELTS Reading Practice
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Authentic multi-paragraph academic and general training passages covering all 14 official question types, automatic answer scoring, and comprehensive explanations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          {(['All', 'Academic', 'General Training'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModuleFilter(m)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                moduleFilter === m
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {m}
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
          placeholder="Search by topic (e.g., Climate, History, Intelligence)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800"
        />
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task, idx) => {
          const isCompleted = progress.completedTaskIds.includes(task.id);
          return (
            <div
              key={task.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-slate-300 ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
                  <span>Task {idx + 1} of {readingTasks.length} · {task.module}</span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-base text-slate-900 leading-snug line-clamp-2">
                  {task.title}
                </h3>

                <div className="text-xs text-slate-500 space-y-1 pt-1">
                  <div className="flex items-center justify-between">
                    <span>Topic:</span>
                    <span className="font-medium text-slate-700">{task.topicCategory}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Word Count:</span>
                    <span className="font-mono-tabular text-slate-700">{task.wordCount} words</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Questions:</span>
                    <span className="font-mono-tabular text-slate-700">{task.questions.length} questions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated Time:</span>
                    <span className="font-mono-tabular text-slate-700">{task.estimatedMinutes} mins</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedTask(task)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isCompleted ? 'Review / Retry Task' : 'Start Reading Task'}</span>
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
