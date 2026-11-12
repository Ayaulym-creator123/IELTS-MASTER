import React, { useState } from 'react';
import { listeningTasks } from '../../data/listeningTasks';
import { ListeningTask, UserProgress } from '../../types/ielts';
import { ListeningTaskRunner } from './ListeningTaskRunner';
import { Headphones, Search, CheckCircle2, Play, ArrowRight } from 'lucide-react';

interface ListeningViewProps {
  progress: UserProgress;
}

export const ListeningView: React.FC<ListeningViewProps> = ({ progress }) => {
  const [selectedTask, setSelectedTask] = useState<ListeningTask | null>(null);
  const [sectionFilter, setSectionFilter] = useState<number | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTasks = listeningTasks.filter((task) => {
    const matchesSection = sectionFilter === 'All' || task.section === sectionFilter;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.topicCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          task.accent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  if (selectedTask) {
    return (
      <ListeningTaskRunner
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
            <span>36 Complete Listening Tasks</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            IELTS Listening Practice
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Real playable audio recordings spanning everyday social dialogues, orientation monologues, university study tutorials, and complex academic lectures across international accents.
          </p>
        </div>

        {/* Section Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            onClick={() => setSectionFilter('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              sectionFilter === 'All' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All (36)
          </button>
          {[1, 2, 3, 4].map((sec) => (
            <button
              key={sec}
              onClick={() => setSectionFilter(sec)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                sectionFilter === sec ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sec {sec}
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
          placeholder="Search by topic, accent (British, Australian), or title..."
          className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800"
        />
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task, idx) => {
          const isCompleted = progress.completedTaskIds.includes(task.id);
          const durationMins = (task.durationSeconds / 60).toFixed(1);
          return (
            <div
              key={task.id}
              className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all hover:border-slate-300 ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
                  <span>Task {idx + 1} of {listeningTasks.length} · Section {task.section}</span>
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

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {task.sectionDescription}
                </p>

                <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-50">
                  <div className="flex items-center justify-between">
                    <span>Accent:</span>
                    <span className="font-medium text-slate-700">{task.accent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration:</span>
                    <span className="font-mono-tabular text-slate-700">{durationMins} minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Questions:</span>
                    <span className="font-mono-tabular text-slate-700">{task.questions.length} questions</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedTask(task)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isCompleted ? 'Review / Replay Audio' : 'Play & Start Task'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
