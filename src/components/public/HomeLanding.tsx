import React from 'react';
import { PublicPage } from '../../types/ielts';
import { 
  BookOpen, Headphones, PenTool, Mic, BookCheck, 
  Sparkles, Award, ArrowRight, ShieldCheck, CheckCircle2, 
  Globe, Clock, Star 
} from 'lucide-react';

interface HomeLandingProps {
  onNavigate: (page: PublicPage) => void;
}

export const HomeLanding: React.FC<HomeLandingProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Completely Free · No Sign-Up, No Login, No Passwords</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
          The Complete Free IELTS Preparation Platform
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Prepare for IELTS Academic and General Training with 180+ complete authentic practice tasks, real audio recordings, writing evaluation, speaking recorder, and full-length timed mock examinations.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-8 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-md"
          >
            <span>Access All Materials Instantly</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('mock-exams')}
            className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>Full Mock Examination</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-mono-tabular pt-4">
          <span>· 36 Reading Tasks</span>
          <span>· 36 Listening Audio Tracks</span>
          <span>· 36 Writing Evaluator Tasks</span>
          <span>· 36 Speaking Tasks</span>
          <span>· 36 Grammar Exercises</span>
          <span>· 700+ Words</span>
        </div>
      </section>

      {/* 4 Feature Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-base text-slate-900">36 Complete Reading Tasks</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Multi-paragraph passages covering all 14 official question types with automated answer checking and comprehensive explanations.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Headphones className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-base text-slate-900">36 Listening Tasks with Audio</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Playable audio tracks with British, Australian, and North American voices, playback speed controls, and interactive question forms.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <PenTool className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-base text-slate-900">36 Writing Tasks + Evaluator</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Academic Task 1 SVG charts, GT letters, Task 2 essays with Band 6-9 model answers and official 4-criterion IELTS diagnostic evaluation.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-base text-slate-900">36 Speaking Tasks with Recorder</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Authentic cue cards, preparation and speaking timers, microphone audio recording, speech recognition transcript, and model answers.
          </p>
        </div>
      </section>

      {/* Kazakhstan Learner Success Spotlight */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
              Kazakhstan Student Community
            </span>
            <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight mt-1">
              Trusted by Ambitious Candidates Across Kazakhstan
            </h2>
          </div>
          <div className="text-xs font-mono-tabular text-slate-500">
            Asia/Almaty Timezone Supported
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-900">Ayaulym Yessengenova</span>
              <span className="text-xs font-bold text-emerald-800 font-mono-tabular">Band 8.5</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "The 36 complete Reading passages and instant writing evaluator allowed me to prepare methodically in Almaty and secure admission to Cambridge."
            </p>
            <div className="text-[11px] text-slate-500 font-mono-tabular">Almaty · MSc Environmental Science</div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-900">Alikhan Nurlanov</span>
              <span className="text-xs font-bold text-emerald-800 font-mono-tabular">Band 8.0</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "The ability to take full mock examinations without annoying logins or paywalls is unmatched. Perfect for university entrance exams."
            </p>
            <div className="text-[11px] text-slate-500 font-mono-tabular">Astana · Nazarbayev University</div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-900">Madina Kassymova</span>
              <span className="text-xs font-bold text-emerald-800 font-mono-tabular">Band 7.5</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              "The vocabulary flashcards and British/Australian listening accents were exactly what I needed to pass the Bolashak scholarship requirements."
            </p>
            <div className="text-[11px] text-slate-500 font-mono-tabular">Shymkent · Bolashak Scholar</div>
          </div>
        </div>
      </section>

      {/* Immediate Start Callout */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
          Ready to Begin Your IELTS Preparation?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Open any skill module and start practicing immediately. No credentials, registration, or credit cards will ever be requested.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-8 py-3.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-sm"
          >
            Launch Main Dashboard
          </button>
        </div>
      </section>

    </div>
  );
};
