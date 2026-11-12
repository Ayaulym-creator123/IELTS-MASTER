import React, { useState } from 'react';
import { writingTasks } from '../../data/writingTasks';
import { WritingTask, UserProgress } from '../../types/ielts';
import { WritingEditor } from './WritingEditor';
import { PenTool, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface WritingViewProps {
  progress: UserProgress;
}

export const WritingView: React.FC<WritingViewProps> = ({ progress }) => {
  const [selectedTask, setSelectedTask] = useState<WritingTask | null>(null);
  const [filterType, setFilterType] = useState<'All' | 'academic-task-1' | 'gt-task-1' | 'task-2'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTasks = writingTasks.filter((task) => {
    const matchesType = filterType === 'All' || task.type === filterType;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.topicCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  if (selectedTask) {
    return (
      <WritingEditor
        task={selectedTask}
        progress={progress}
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
            <span>36 Complete Writing Tasks</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            IELTS Writing Practice
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Complete preparation covering Academic Task 1 (line graphs, bar charts, maps, process flows), General Training Task 1 letters, and Task 2 essays with automated 4-criterion IELTS scoring.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            onClick={() => setFilterType('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              filterType === 'All' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All (36)
          </button>
          <button
            onClick={() => setFilterType('academic-task-1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              filterType === 'academic-task-1' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Academic Task 1 (14)
          </button>
          <button
            onClick={() => setFilterType('gt-task-1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              filterType === 'gt-task-1' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            GT Letters (10)
          </button>
          <button
            onClick={() => setFilterType('task-2')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              filterType === 'task-2' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Task 2 Essays (12)
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by topic (e.g. Energy, Education, Letters)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800"
        />
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task, idx) => {
          const isCompleted = progress.completedTaskIds.includes(task.id);
          const hasDraft = !!progress.savedDrafts[task.id];
          return (
            <div
              key={task.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-slate-300 ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
                  <span>Task {idx + 1} of {writingTasks.length} · {task.type.replace(/-/g, ' ').toUpperCase()}</span>
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Evaluated</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-base text-slate-900 leading-snug line-clamp-2">
                  {task.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {task.prompt}
                </p>

                <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-50">
                  <div className="flex items-center justify-between">
                    <span>Category:</span>
                    <span className="font-medium text-slate-700">{task.topicCategory}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Word Requirement:</span>
                    <span className="font-mono-tabular text-slate-700">Min {task.minWordCount} words</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time Allowed:</span>
                    <span className="font-mono-tabular text-slate-700">{task.suggestedMinutes} minutes</span>
                  </div>
                  {hasDraft && (
                    <div className="flex items-center justify-between text-emerald-700">
                      <span>Saved Draft:</span>
                      <span className="font-medium">Stored in browser</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedTask(task)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>{hasDraft ? 'Resume Writing Draft' : 'Open Writing Task'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
