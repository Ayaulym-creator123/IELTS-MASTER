import React, { useState } from 'react';
import { PublicPage } from '../../types/ielts';
import { BookOpen, Headphones, PenTool, Mic, BookCheck, Sparkles, Award, BarChart3, ChevronDown, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  currentPage: PublicPage;
  onNavigate: (page: PublicPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);

  const modulesList: { page: PublicPage; title: string; desc: string; icon: any }[] = [
    { page: 'reading', title: 'Reading', desc: '36 academic & general passages', icon: BookOpen },
    { page: 'listening', title: 'Listening', desc: '36 tasks with authentic audio', icon: Headphones },
    { page: 'writing', title: 'Writing', desc: 'Task 1 & Task 2 evaluator', icon: PenTool },
    { page: 'speaking', title: 'Speaking', desc: 'Cue cards & audio recorder', icon: Mic },
    { page: 'grammar', title: 'Grammar', desc: '36 comprehensive lessons', icon: BookCheck },
    { page: 'vocabulary', title: 'Vocabulary', desc: '700+ words & flashcards', icon: Sparkles }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left font-display font-bold text-xl tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-700 transition-colors"
        >
          IELTS MASTER
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentPage === 'dashboard' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            Dashboard
          </button>

          {/* Modules Dropdown */}
          <div className="relative">
            <button
              onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
              onBlur={() => setTimeout(() => setModulesDropdownOpen(false), 200)}
              className="flex items-center gap-1 whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors py-1"
            >
              <span>Skills & Exercises</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {modulesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 divide-y divide-slate-100">
                <div className="px-3 py-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Core IELTS Modules
                </div>
                <div className="py-1">
                  {modulesList.map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.page}
                        onClick={() => {
                          onNavigate(m.page);
                          setModulesDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left flex items-start gap-3 hover:bg-slate-50 transition-colors text-slate-700"
                      >
                        <Icon className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-semibold text-slate-900">{m.title}</div>
                          <div className="text-[11px] text-slate-500">{m.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('mock-exams')}
            className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentPage === 'mock-exams' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            <Award className="w-4 h-4 text-slate-500" />
            <span>Full Mock Tests</span>
          </button>

          <button
            onClick={() => onNavigate('progress')}
            className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentPage === 'progress' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            <BarChart3 className="w-4 h-4 text-slate-500" />
            <span>My Progress</span>
          </button>

          <button
            onClick={() => onNavigate('preparation')}
            className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 ${
              currentPage === 'preparation' ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5' : ''
            }`}
          >
            <Compass className="w-4 h-4 text-slate-500" />
            <span>IELTS Guide</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate(currentPage === 'dashboard' ? 'mock-exams' : 'dashboard')}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            {currentPage === 'home' ? 'Open Dashboard' : 'Start Practice'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Navigation</div>
          <button
            onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-800 hover:bg-slate-50"
          >
            Dashboard
          </button>
          <button
            onClick={() => { onNavigate('mock-exams'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-800 hover:bg-slate-50"
          >
            Full Mock Tests
          </button>
          <button
            onClick={() => { onNavigate('progress'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-800 hover:bg-slate-50"
          >
            My Progress & Results
          </button>
          <button
            onClick={() => { onNavigate('preparation'); setMobileMenuOpen(false); }}
            className="w-full text-left py-2 px-3 rounded-lg text-sm text-slate-800 hover:bg-slate-50"
          >
            IELTS Preparation Guide
          </button>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Modules (36 Tasks Each)</div>
            <div className="grid grid-cols-2 gap-1">
              {modulesList.map((m) => (
                <button
                  key={m.page}
                  onClick={() => { onNavigate(m.page); setMobileMenuOpen(false); }}
                  className="text-left py-1.5 px-2 rounded text-xs text-slate-700 hover:bg-slate-50 font-medium"
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              Instant Learning Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
