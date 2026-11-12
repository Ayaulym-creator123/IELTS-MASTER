import React from 'react';
import { PublicPage, UserProgress } from '../../types/ielts';
import { 
  BookOpen, Headphones, PenTool, Mic, BookCheck, 
  Sparkles, Award, ArrowRight, CheckCircle2, Clock, 
  BarChart3, Compass, ShieldCheck 
} from 'lucide-react';

interface DashboardViewProps {
  progress: UserProgress;
  onNavigate: (page: PublicPage) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ progress, onNavigate }) => {
  const modules = [
    {
      id: 'reading',
      title: 'IELTS Reading',
      page: 'reading' as PublicPage,
      count: '36 Complete Tasks',
      difficulty: 'Academic & General Training',
      icon: BookOpen,
      color: 'border-blue-200 hover:border-blue-300',
      description: 'Authentic multi-paragraph passages across 14 question types: Multiple Choice, T/F/NG, Matching Headings, and Summary Completion.'
    },
    {
      id: 'listening',
      title: 'IELTS Listening',
      page: 'listening' as PublicPage,
      count: '36 Complete Tasks',
      difficulty: 'Sections 1 to 4 with Audio',
      icon: Headphones,
      color: 'border-emerald-200 hover:border-emerald-300',
      description: 'Real playable audio recordings with British, Australian, and North American accents, playback speed, seek bar, and instant scoring.'
    },
    {
      id: 'writing',
      title: 'IELTS Writing',
      page: 'writing' as PublicPage,
      count: '36 Complete Tasks',
      difficulty: 'Task 1 & Task 2 Evaluator',
      icon: PenTool,
      color: 'border-indigo-200 hover:border-indigo-300',
      description: 'Interactive SVG line graphs, bar charts, process diagrams, letters, essays with Band 6-9 model answers and IELTS criteria evaluation.'
    },
    {
      id: 'speaking',
      title: 'IELTS Speaking',
      page: 'speaking' as PublicPage,
      count: '36 Complete Tasks',
      difficulty: 'Parts 1, 2 & 3 with Recording',
      icon: Mic,
      color: 'border-purple-200 hover:border-purple-300',
      description: 'Authentic cue cards, 1-min preparation timer, 2-min speaking timer, audio recording with microphone permissions, and model responses.'
    },
    {
      id: 'grammar',
      title: 'Grammar Modules',
      page: 'grammar' as PublicPage,
      count: '36 Comprehensive Topics',
      difficulty: 'B1 to C2 Mastery',
      icon: BookCheck,
      color: 'border-amber-200 hover:border-amber-300',
      description: 'From Present Simple to Advanced Cleft Inversion. Detailed grammatical rules, IELTS examples, common pitfalls, and interactive quizzes.'
    },
    {
      id: 'vocabulary',
      title: 'Vocabulary Database',
      page: 'vocabulary' as PublicPage,
      count: '700+ Unique Entries',
      difficulty: '18 Thematic Categories',
      icon: Sparkles,
      color: 'border-teal-200 hover:border-teal-300',
      description: 'Comprehensive academic dictionary with IPA phonetics, definitions, example sentences, flashcards deck, and spaced repetition quizzes.'
    }
  ];

  const recentAttemptsCount = progress.attempts.length;
  const completedCount = progress.completedTaskIds.length;
  const studyHours = (progress.totalStudySeconds / 3600).toFixed(1);

  return (
    <div className="space-y-12">
      
      {/* Welcome Hero Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Open Public Access · No Registration or Login Required</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Master the IELTS Examination with Complete Preparation Materials
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Welcome to <span className="font-semibold text-slate-900">IELTS MASTER</span>. Every learning module, full mock examination, interactive exercise, and audio recording is immediately accessible to every student with zero paywalls, passwords, or account creation.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('reading')}
              className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Start Learning Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('mock-exams')}
              className="px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Take Full Mock Test</span>
            </button>
          </div>
        </div>

        {/* Live Study Status bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <div className="text-slate-500">Tasks Completed</div>
            <div className="font-mono-tabular text-lg font-bold text-slate-900 mt-0.5">{completedCount} <span className="text-xs text-slate-500 font-normal">/ 180+</span></div>
          </div>
          <div>
            <div className="text-slate-500">Practice Attempts</div>
            <div className="font-mono-tabular text-lg font-bold text-slate-900 mt-0.5">{recentAttemptsCount}</div>
          </div>
          <div>
            <div className="text-slate-500">Current Study Streak</div>
            <div className="font-mono-tabular text-lg font-bold text-emerald-700 mt-0.5">{progress.streakDays} <span className="text-xs text-slate-500 font-normal">days</span></div>
          </div>
          <div>
            <div className="text-slate-500">Estimated Study Time</div>
            <div className="font-mono-tabular text-lg font-bold text-slate-900 mt-0.5">{studyHours} <span className="text-xs text-slate-500 font-normal">hours</span></div>
          </div>
        </div>
      </section>

      {/* Learning Overview Grid */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display font-bold text-xl text-slate-900 tracking-tight">
              IELTS Skill Modules
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Select an IELTS skill below to begin practicing immediately.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('preparation')}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
          >
            <span>Band Descriptors Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-50 text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono-tabular font-medium text-slate-600 block">{mod.count}</span>
                      <span className="text-[11px] text-slate-500">{mod.difficulty}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-base text-slate-900 mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate(mod.page)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Start Exercises</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full Mock Examination Spotlight Banner */}
      <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-300">
            <Award className="w-4 h-4" />
            <span>Complete Exam Simulation</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">
            Full IELTS Academic & General Training Mock Exams
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Experience genuine exam conditions with timed 4-component examinations: 40 Listening questions with audio playback, complete 3-passage Reading, full Writing Task 1 & 2 editor, and recorded Speaking cue cards.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono-tabular pt-1">
            <span>· 165 Minutes Total Duration</span>
            <span>· Automatic Scoring & Band Report</span>
            <span>· Immediate Diagnostic Breakdown</span>
          </div>
        </div>

        <button
          onClick={() => onNavigate('mock-exams')}
          className="px-6 py-3.5 text-xs font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-sm"
        >
          <span>Take Full Mock Test</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Kazakhstan Student Case Benchmarks & Study Guide */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Learning Path */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-slate-900">
            <Compass className="w-5 h-5 text-slate-700" />
            <h3 className="font-display font-bold text-lg">Recommended 4-Week Study Sequence</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                <span>Week 1: Foundational Vocabulary & Grammar Mechanics</span>
                <span className="font-mono-tabular text-slate-600">30 min / day</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review 50 vocabulary flashcards daily across Education and Environment. Complete Grammar exercises 1 to 10 focusing on tense accuracy and subject-verb concord.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                <span>Week 2: Reading Question Mastery & Listening Section 1-2</span>
                <span className="font-mono-tabular text-slate-600">45 min / day</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Practice skimming and keyword identification across True/False/Not Given and Heading Matching tasks. Complete 2 listening tasks daily to build accent familiarity.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                <span>Week 3: Writing Task 1 Data Synthesis & Task 2 Essay Arguments</span>
                <span className="font-mono-tabular text-slate-600">60 min / day</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Write 2 reports per week describing line charts and bar graphs. Draft essays using the 4-paragraph model and run our instant IELTS band diagnostic tool.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                <span>Week 4: Timed Speaking Simulation & Full Mock Examination</span>
                <span className="font-mono-tabular text-slate-600">90 min / day</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Record Speaking cue cards with the 1-minute prep timer. Take at least two full 165-minute Mock Examinations to calibrate your stamina and time pacing.
              </p>
            </div>
          </div>
        </div>

        {/* Kazakhstan Peer Benchmarks */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Kazakhstan Student Benchmarks
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sample profiles of Kazakh learners who prepared with structured open practice.
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-900">Ayaulym Yessengenova</div>
                <div className="text-[11px] text-slate-500">Admitted to Cambridge · MSc Env</div>
              </div>
              <div className="text-right font-mono-tabular">
                <div className="text-xs font-bold text-emerald-800">Band 8.5</div>
                <div className="text-[10px] text-slate-500">R9.0 L8.5 W8.0 S8.5</div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-900">Alikhan Nurlanov</div>
                <div className="text-[11px] text-slate-500">Nazarbayev University · Robotics</div>
              </div>
              <div className="text-right font-mono-tabular">
                <div className="text-xs font-bold text-emerald-800">Band 8.0</div>
                <div className="text-[10px] text-slate-500">R8.5 L8.0 W7.5 S8.0</div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-900">Madina Kassymova</div>
                <div className="text-[11px] text-slate-500">Bolashak Scholar · Architecture</div>
              </div>
              <div className="text-right font-mono-tabular">
                <div className="text-xs font-bold text-emerald-800">Band 7.5</div>
                <div className="text-[10px] text-slate-500">R8.0 L7.5 W7.5 S7.5</div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-900">Daniyar Abdrakhmanov</div>
                <div className="text-[11px] text-slate-500">KIMEP Graduate · Corporate Law</div>
              </div>
              <div className="text-right font-mono-tabular">
                <div className="text-xs font-bold text-emerald-800">Band 8.0</div>
                <div className="text-[10px] text-slate-500">R8.5 L8.0 W8.0 S7.5</div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 leading-relaxed border-t border-slate-100">
            Target Band 7.5+ requires consistent attention to paragraph cohesion, academic collocations, and timed exam pacing.
          </div>
        </div>
      </section>

    </div>
  );
};
