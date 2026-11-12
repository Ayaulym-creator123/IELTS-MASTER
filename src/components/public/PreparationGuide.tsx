import React, { useState } from 'react';
import { PublicPage } from '../../types/ielts';
import { Compass, BookOpen, Check, ArrowRight } from 'lucide-react';

interface PreparationGuideProps {
  onNavigate: (page: PublicPage) => void;
}

export const PreparationGuide: React.FC<PreparationGuideProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'modules' | 'bands' | 'strategy'>('bands');

  const bands = [
    { band: '9.0', title: 'Expert User', desc: 'Has fully operational command of the language: appropriate, accurate and fluent with complete understanding.' },
    { band: '8.0 - 8.5', title: 'Very Good User', desc: 'Has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations.' },
    { band: '7.0 - 7.5', title: 'Good User', desc: 'Has operational command of the language, though with occasional inaccuracies, inappropriacies and misunderstandings in some situations. Generally handles complex language well.' },
    { band: '6.0 - 6.5', title: 'Competent User', desc: 'Has generally effective command of the language despite some inaccuracies, inappropriacies and misunderstandings. Can use and understand fairly complex language, particularly in familiar situations.' },
    { band: '5.0 - 5.5', title: 'Modest User', desc: 'Has partial command of the language, coping with overall meaning in most situations, though is likely to make many mistakes. Should be able to handle basic communication in own field.' },
    { band: '4.0 - 4.5', title: 'Limited User', desc: 'Basic competence is limited to familiar situations. Has frequent problems in understanding and expression. Is not able to use complex language.' }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
          Comprehensive Reference
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          IELTS Examination Guide & Band Descriptors
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Detailed breakdown of IELTS Academic and General Training formats, official Band 1-9 performance levels, and strategic preparation methodologies.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('bands')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'bands' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Official Band Descriptors (1–9)
        </button>
        <button
          onClick={() => setActiveTab('modules')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'modules' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Academic vs General Training
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'strategy' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Strategic Test Tips
        </button>
      </div>

      {/* Bands Descriptors Tab */}
      {activeTab === 'bands' && (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 leading-relaxed">
            The International English Language Testing System (IELTS) measures language proficiency on a standardized 9-band scale. Most international university admissions (e.g. Oxford, Cambridge, Nazarbayev University) require an overall band of 6.5 to 7.5.
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
            {bands.map((b, idx) => (
              <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-slate-50/50 transition-colors">
                <div className="font-mono-tabular shrink-0 w-28">
                  <span className="text-base font-bold text-slate-900 block">Band {b.band}</span>
                  <span className="text-[11px] text-emerald-800 font-semibold">{b.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Academic vs GT Tab */}
      {activeTab === 'modules' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider font-mono-tabular block">
              Higher Education & Professional Licensure
            </span>
            <h3 className="font-display font-bold text-xl text-slate-900">IELTS Academic</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed for candidates applying for higher education, postgraduate degrees (Master's / PhD), or professional medical registration in English-speaking nations.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-100">
              <li>Reading: 3 long complex texts drawn from academic books, research journals, and magazines.</li>
              <li>Writing Task 1: 150-word analytical report describing visual data (charts, tables, maps, diagrams).</li>
              <li>Writing Task 2: 250-word formal discursive academic essay.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider font-mono-tabular block">
              Migration & Secondary Education
            </span>
            <h3 className="font-display font-bold text-xl text-slate-900">IELTS General Training</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed for candidates seeking immigration (e.g. Express Entry to Canada, Australia), secondary schooling, or vocational workplace employment programs.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-100">
              <li>Reading: Real-world notices, workplace guidelines, contracts, and general descriptive texts.</li>
              <li>Writing Task 1: 150-word formal, semi-formal, or personal letter addressing a specific scenario.</li>
              <li>Writing Task 2: 250-word personal perspective or argumentative essay.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Strategy Tab */}
      {activeTab === 'strategy' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="font-display font-bold text-lg text-slate-900">Essential Test-Day Tactics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block">Listening Prediction</span>
              <p className="text-slate-600 leading-relaxed">
                Utilize the 30-second silent intervals before each audio clip to underline keywords and predict word classes (noun, date, number).
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block">Reading Time Discipline</span>
              <p className="text-slate-600 leading-relaxed">
                Allocate precisely 20 minutes per passage. Do not get stuck on a difficult question; mark an initial estimate and return if time permits.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block">Writing Overview Paragraph</span>
              <p className="text-slate-600 leading-relaxed">
                In Task 1, never forget an overview sentence highlighting the overarching trend. Without an overview, Task Achievement cannot exceed Band 5.0.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-semibold text-slate-900 block">Speaking Natural Cadence</span>
              <p className="text-slate-600 leading-relaxed">
                Do not attempt to speak unnaturally fast. Focus on clear articulation, varied intonation, and using discourse markers to structure thoughts.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="pt-4 flex justify-center">
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-3 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
        >
          <span>Explore All Learning Modules</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
