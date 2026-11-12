import React, { useEffect, useState } from 'react';
import { PublicPage } from '../../types/ielts';
import { Globe, Clock, ShieldCheck, Database } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PublicPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [almatyTime, setAlmatyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Almaty',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setAlmatyTime(formatted);
      } catch (e) {
        setAlmatyTime('Asia/Almaty Timezone');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-slate-200 mt-20 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-1">
            <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight mb-2">
              IELTS MASTER
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Comprehensive, open-access IELTS preparation platform for students in Kazakhstan and globally. Free educational materials with immediate access and zero registration.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Asia/Almaty: {almatyTime || '06:00 PM'}</span>
            </div>
          </div>

          {/* Educational Modules */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Learning Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('reading')} className="hover:text-slate-900 transition-colors">
                  IELTS Reading (36 Tasks)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('listening')} className="hover:text-slate-900 transition-colors">
                  IELTS Listening with Audio (36 Tasks)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('writing')} className="hover:text-slate-900 transition-colors">
                  IELTS Writing Task 1 & 2 (36 Tasks)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('speaking')} className="hover:text-slate-900 transition-colors">
                  IELTS Speaking Practice (36 Tasks)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('grammar')} className="hover:text-slate-900 transition-colors">
                  Grammar Modules (36 Lessons)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vocabulary')} className="hover:text-slate-900 transition-colors">
                  Vocabulary Database (700+ Words)
                </button>
              </li>
            </ul>
          </div>

          {/* Examinations & Progress */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Testing & Progress
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('mock-exams')} className="hover:text-slate-900 transition-colors">
                  Full Mock Examinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('progress')} className="hover:text-slate-900 transition-colors">
                  Performance & Accuracy Tracking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-slate-900 transition-colors">
                  Study History & Records
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('preparation')} className="hover:text-slate-900 transition-colors">
                  Official IELTS Band Descriptors
                </button>
              </li>
            </ul>
          </div>

          {/* Public Pages & Privacy */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Platform & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-slate-900 transition-colors">
                  About IELTS MASTER
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-slate-900 transition-colors">
                  Platform Features
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-slate-900 transition-colors">
                  Kazakhstan Student Support & FAQ
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>All progress saved locally in your browser</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Public Access Platform — No Registration, No Login, Completely Free</span>
          </div>
          <div>
            © 2026 IELTS MASTER. Designed for Academic and General Training Candidates.
          </div>
        </div>
      </div>
    </footer>
  );
};
