import React from 'react';
import { PublicPage } from '../../types/ielts';
import { ShieldCheck, Award, BookOpen, Globe, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PublicPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
          About The Platform
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          About IELTS MASTER
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          An open, rigorous, and production-ready IELTS preparation platform dedicated to empowering students with comprehensive, authenticated test materials.
        </p>
      </div>

      {/* Core Mission */}
      <section className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4">
        <h2 className="font-display font-bold text-xl text-slate-900">Our Core Mission</h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          IELTS MASTER was engineered to solve a systemic barrier faced by students in Kazakhstan and across the world: commercial paywalls, mandatory user tracking, forced email registrations, and incomplete practice mockups. 
        </p>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          We believe that serious academic preparation requires complete, uncompromised learning materials. Anyone who receives the public platform link can immediately open 36 complete Reading passages, 36 Listening tasks with playable audio, 36 Writing tasks with analytical scoring, 36 Speaking cue cards, 36 Grammar lessons, and a 700+ vocabulary database without surrendering personal data or creating accounts.
        </p>
      </section>

      {/* Architectural Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <h3 className="font-display font-semibold text-base text-slate-900">Universal Public Access</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Zero sign-up, zero login forms, zero passwords, and zero personal data collection. Pure open access for every learner.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
          <Award className="w-6 h-6 text-amber-600" />
          <h3 className="font-display font-semibold text-base text-slate-900">Authentic IELTS Rigor</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All 14 Reading question types, all 4 Listening sections, official Task 1 & Task 2 band rubrics, and timed Speaking cue cards.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-2.5">
          <Globe className="w-6 h-6 text-blue-600" />
          <h3 className="font-display font-semibold text-base text-slate-900">Kazakhstan Context</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Engineered with Asia/Almaty regional support, local date configurations, and authentic Central Asian historical and scientific texts.
          </p>
        </div>
      </section>

      {/* Quick Action */}
      <div className="pt-4 flex justify-center">
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
        >
          <span>Open Main Learning Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
