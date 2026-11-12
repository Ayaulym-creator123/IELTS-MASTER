import React, { useState } from 'react';
import { PublicPage } from '../../types/ielts';
import { 
  Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, 
  HelpCircle, Globe, ChevronDown, ChevronUp, ShieldCheck 
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PublicPage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'Almaty',
    subject: 'preparation-advice',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is IELTS MASTER completely free? Do I need to create an account or sign in?',
      a: 'Yes, IELTS MASTER is 100% free and open to everyone with zero paywalls. You do not need to register, provide an email, remember a password, or submit payment details. All 36 Reading tasks, 36 Listening tasks, 36 Writing tasks, 36 Speaking tasks, 36 Grammar exercises, 700+ vocabulary words, and full mock examinations are unlocked immediately.'
    },
    {
      q: 'Where can students in Kazakhstan take the official IELTS exam?',
      a: 'Official IELTS tests in Kazakhstan are administered by the British Council and IDP IELTS across major cities including Almaty, Astana, Shymkent, Karaganda, Aktau, and Atyrau. Candidates can choose between Computer-Delivered IELTS (results in 3-5 days) and Paper-Based IELTS (results in 13 days).'
    },
    {
      q: 'What IELTS band score is required for Nazarbayev University and Bolashak Scholarship?',
      a: 'For undergraduate admissions at Nazarbayev University (NU), applicants generally require an overall IELTS score of 6.5 (with minimum 6.0 in subscores). Graduate programs usually require 6.5 to 7.0. The Bolashak International Scholarship typically requires an overall score of 6.5 or higher depending on the chosen academic field.'
    },
    {
      q: 'How does the platform save my practice test scores and progress without an account?',
      a: 'IELTS MASTER utilizes your web browser local storage (HTML5 LocalStorage). Your completed tasks, estimated band scores, vocabulary bookmarks, writing drafts, and study times are preserved directly on your current computer or mobile device. No private data is ever sent to external marketing databases.'
    },
    {
      q: 'How do the Speaking audio recorder and Listening player work?',
      a: 'The Listening module employs the native Web SpeechSynthesis engine and high-fidelity speech synthesis with varied British, Australian, and North American accents. The Speaking module utilizes the browser MediaRecorder API to allow you to record and play back your voice directly in your browser without uploading recordings to external cloud servers.'
    },
    {
      q: 'What is the recommended daily study routine for achieving Band 7.5 or higher?',
      a: 'We recommend completing one timed Reading passage and one Listening section daily, practicing at least two Writing Task 1 or Task 2 essays per week, and spending 20 minutes daily on the 700+ word Vocabulary and Grammar modules. Take a full 4-skill timed mock test every 10 to 14 days to benchmark your exam stamina.'
    }
  ];

  const studentAdvisors = [
    {
      name: 'Ayaulym Yessengenova',
      role: 'Academic Director & IELTS 8.5 Alumna',
      location: 'Almaty, Kazakhstan',
      bio: 'Advises candidates on Academic Writing Task 2 coherence and lexical resource.'
    },
    {
      name: 'Daniyar Abdrakhmanov',
      role: 'Lead Listening & Speaking Coordinator',
      location: 'Astana, Kazakhstan',
      bio: 'Specialist in phonology, fluency markers, and computer-delivered test strategies.'
    },
    {
      name: 'Madina Kassymova',
      role: 'Grammar & Vocabulary Lead Specialist',
      location: 'Shymkent, Kazakhstan',
      bio: 'Curator of the 36-lesson grammar syllabus and academic collocations database.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
          Assistance & Frequently Asked Questions
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Student Support & Kazakhstan Test Guidance
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          Get direct guidance on IELTS Academic and General Training test centers across Kazakhstan, study schedules, preparation strategies, and technical assistance.
        </p>
      </div>

      {/* Grid: Contact Form + Regional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Send an Academic Query or Feedback
            </h2>
            <p className="text-xs text-slate-500">
              Our academic coordinators review student feedback and curriculum inquiries daily.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-display font-semibold text-base text-emerald-900">
                Message Received Successfully
              </h3>
              <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                Thank you for your message, {formData.name || 'Candidate'}. Our academic advisory team in Almaty and Astana will review your inquiry. Continue your daily practice via the Dashboard.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', city: 'Almaty', subject: 'preparation-advice', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alikhan Nurlanov"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.kz"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    City / Test Location
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Almaty">Almaty, Kazakhstan</option>
                    <option value="Astana">Astana, Kazakhstan</option>
                    <option value="Shymkent">Shymkent, Kazakhstan</option>
                    <option value="Karaganda">Karaganda, Kazakhstan</option>
                    <option value="Aktau">Aktau, Kazakhstan</option>
                    <option value="Atyrau">Atyrau, Kazakhstan</option>
                    <option value="Pavlodar">Pavlodar, Kazakhstan</option>
                    <option value="International">International Candidate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Query Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="preparation-advice">IELTS Preparation Advice</option>
                    <option value="test-center">Official Test Center Inquiries</option>
                    <option value="writing-speaking">Writing / Speaking Feedback</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">General Feedback & Suggestions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Message or Question *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your target band score, current level, or specific question regarding IELTS preparation..."
                  className="w-full text-xs p-3.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No marketing spam. All inquiries handled respectfully.</span>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Kazakhstan Advisory & Regional Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Test Center Quick Guide */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
              Kazakhstan Testing Centers
            </h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Almaty Center</div>
                  <div className="text-slate-500">British Council & IDP Test Venues · Dostyk Ave / Abay Ave</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Astana Center</div>
                  <div className="text-slate-500">British Council & IDP Venues · Mangilik El Ave / Kabanbay Batyr Ave</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Test Schedule Availability</div>
                  <div className="text-slate-500">Computer-Delivered sessions available up to 3 times weekly.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Advisors Showcase */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
              Academic Advisory Team
            </h3>
            <div className="space-y-3.5">
              {studentAdvisors.map((adv, idx) => (
                <div key={idx} className="border-b border-slate-100 last:border-b-0 pb-3 last:pb-0">
                  <div className="text-xs font-semibold text-slate-900">{adv.name}</div>
                  <div className="text-[11px] text-slate-500">{adv.role} · {adv.location}</div>
                  <div className="text-[11px] text-slate-600 mt-1 leading-snug">{adv.bio}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Accordion FAQ Section */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-display font-bold text-xl text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Clear, authoritative answers regarding the IELTS examination, test format, and free platform usage.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-600 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isExpanded && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA to start practice */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-display font-bold text-lg text-white">
            Ready to Begin Your IELTS Preparation?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Access 180+ practice tasks, 36 grammar lessons, 700+ vocabulary words, and timed mock tests right now.
          </p>
        </div>
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-3 bg-white text-slate-900 rounded-xl text-xs font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
        >
          Open Practice Dashboard
        </button>
      </div>

    </div>
  );
};
