import React from 'react';
import { PublicPage } from '../../types/ielts';
import { 
  BookOpen, Headphones, PenTool, Mic, BookCheck, 
  Sparkles, Award, ShieldCheck, Database, Volume2, 
  Clock, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface FeaturesViewProps {
  onNavigate: (page: PublicPage) => void;
}

export const FeaturesView: React.FC<FeaturesViewProps> = ({ onNavigate }) => {
  const features = [
    {
      title: '36 Complete Reading Tasks',
      desc: 'Authentic multi-paragraph academic and general training passages covering all 14 official question types with instant scoring and comprehensive explanations.',
      icon: BookOpen
    },
    {
      title: '36 Listening Tasks with Playable Audio',
      desc: 'Real audio playback with British, Australian, and North American voices, playback speed controls, and interactive question forms.',
      icon: Headphones
    },
    {
      title: '36 Writing Tasks with 4-Criteria Evaluator',
      desc: 'Interactive SVG line graphs, bar charts, process diagrams, letters, essays with Band 6-9 model answers and IELTS criteria evaluation.',
      icon: PenTool
    },
    {
      title: '36 Speaking Tasks with Audio Recorder',
      desc: 'Authentic cue cards, preparation and speaking timers, microphone audio recording, speech recognition transcript, and model answers.',
      icon: Mic
    },
    {
      title: '36 Comprehensive Grammar Lessons',
      desc: 'From Present Simple to Advanced Cleft Inversion. Detailed grammatical rules, IELTS examples, common pitfalls, and interactive quizzes.',
      icon: BookCheck
    },
    {
      title: '700+ Vocabulary Database & Flashcards',
      desc: 'Comprehensive academic dictionary with IPA phonetics, definitions, example sentences, flashcards deck, and spaced repetition quizzes.',
      icon: Sparkles
    },
    {
      title: 'Full IELTS Mock Examinations',
      desc: 'Full-length 165-minute simulation of all 4 components: Listening, Reading, Writing, and Speaking, generating an official diagnostic Band Report Form.',
      icon: Award
    },
    {
      title: 'Local Browser Storage & Privacy',
      desc: 'All completed exercises, scores, streaks, and saved drafts are stored privately in your browser without requiring registration or accounts.',
      icon: Database
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
          Platform Architecture
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Platform Capabilities & Educational Features
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore the tools and educational technologies integrated into IELTS MASTER to accelerate your test readiness.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-3 hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-200">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="pt-4 flex justify-center">
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-3.5 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
        >
          <span>Open Dashboard & Start Studying</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
