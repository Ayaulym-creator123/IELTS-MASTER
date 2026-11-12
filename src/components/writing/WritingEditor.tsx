import React, { useState, useEffect } from 'react';
import { WritingTask, UserProgress } from '../../types/ielts';
import { evaluateIeltsWriting, WritingEvaluationResult } from '../../services/writingEvaluator';
import { saveEssayDraft, recordAttempt } from '../../services/storageService';
import { SvgCharts } from '../common/SvgCharts';
import { 
  ArrowLeft, Clock, Save, Sparkles, CheckCircle2, 
  AlertTriangle, BookOpen, ChevronDown, ChevronUp, RotateCcw, 
  BarChart, FileText 
} from 'lucide-react';

interface WritingEditorProps {
  task: WritingTask;
  progress: UserProgress;
  onBack: () => void;
}

export const WritingEditor: React.FC<WritingEditorProps> = ({ task, progress, onBack }) => {
  const savedInitial = progress.savedDrafts[task.id]?.text || '';
  const [essayText, setEssayText] = useState<string>(savedInitial);
  const [evaluation, setEvaluation] = useState<WritingEvaluationResult | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'modelAnswers' | 'evaluation'>('editor');
  const [selectedModelBand, setSelectedModelBand] = useState<'band6' | 'band7' | 'band8' | 'band9'>('band8');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(task.suggestedMinutes * 60);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [draftSavedTime, setDraftSavedTime] = useState<string>('');

  const wordCount = essayText.trim().length > 0 ? essayText.trim().split(/\s+/).length : 0;
  const characterCount = essayText.length;

  useEffect(() => {
    let interval: any = null;
    if (isTimerActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, secondsRemaining]);

  const handleSaveDraft = () => {
    saveEssayDraft(task.id, essayText);
    const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setDraftSavedTime(`Draft saved at ${now}`);
  };

  const handleEvaluate = () => {
    const result = evaluateIeltsWriting(essayText, task.type, task.minWordCount);
    setEvaluation(result);
    setActiveTab('evaluation');
    saveEssayDraft(task.id, essayText);

    // Record attempt
    recordAttempt(
      'writing',
      task.id,
      task.title,
      result.overallBand,
      9.0,
      (task.suggestedMinutes * 60) - secondsRemaining,
      { wordCount: result.wordCount, band: result.overallBand }
    );
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <span>{task.type.toUpperCase().replace(/-/g, ' ')}</span>
              <span>·</span>
              <span>Minimum {task.minWordCount} words</span>
              <span>·</span>
              <span>{task.suggestedMinutes} mins</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">{task.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer */}
          <button
            onClick={() => setIsTimerActive(!isTimerActive)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-mono-tabular text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{formatTimer(secondsRemaining)}</span>
            <span className="text-[10px] text-slate-500">({isTimerActive ? 'Running' : 'Paused'})</span>
          </button>

          <button
            onClick={handleSaveDraft}
            className="px-3 py-1.5 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Draft</span>
          </button>

          <button
            onClick={handleEvaluate}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evaluate Writing</span>
          </button>
        </div>
      </div>

      {draftSavedTime && (
        <div className="text-[11px] text-emerald-800 font-mono-tabular text-right">
          {draftSavedTime}
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('editor')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'editor' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Writing Workspace
        </button>
        <button
          onClick={() => setActiveTab('modelAnswers')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
            activeTab === 'modelAnswers' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Band 6–9 Model Answers</span>
        </button>
        {evaluation && (
          <button
            onClick={() => setActiveTab('evaluation')}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'evaluation' ? 'bg-emerald-900 text-white font-semibold' : 'text-emerald-700 hover:text-emerald-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Diagnostic Report (Band {evaluation.overallBand.toFixed(1)})</span>
          </button>
        )}
      </div>

      {/* Main Tab Views */}
      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Prompt / Chart Pane (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
                Task Instructions
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {task.prompt}
              </p>

              {task.letterPoints && task.letterPoints.length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">You must address:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                    {task.letterPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Visual SVG Chart if Task 1 */}
            {task.chartType && (
              <SvgCharts type={task.chartType} title={task.title} />
            )}
          </div>

          {/* Textarea Editor Pane (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
              <span className="font-semibold text-slate-700">Student Response</span>
              <div className="flex items-center gap-3 font-mono-tabular">
                <span className={wordCount >= task.minWordCount ? 'text-emerald-700 font-semibold' : 'text-slate-600'}>
                  {wordCount} / {task.minWordCount} words
                </span>
                <span>·</span>
                <span>{characterCount} chars</span>
              </div>
            </div>

            <textarea
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Begin writing your response here. Structure into introduction, body paragraphs, and conclusion..."
              rows={18}
              className="w-full text-sm leading-relaxed text-slate-900 border-0 focus:outline-none focus:ring-0 resize-y p-1 font-sans"
            />

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Drafts are saved locally in your browser.</span>
              <button
                onClick={handleEvaluate}
                disabled={wordCount < 10}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-40 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Evaluate & Score</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Model Answers Tab */}
      {activeTab === 'modelAnswers' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Official IELTS Model Answers
              </h3>
              <p className="text-xs text-slate-500">
                Compare essays across all four performance bands to understand linguistic expectations.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-mono-tabular">
              {(['band6', 'band7', 'band8', 'band9'] as const).map((band) => (
                <button
                  key={band}
                  onClick={() => setSelectedModelBand(band)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    selectedModelBand === band
                      ? 'bg-white text-slate-900 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {band.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line space-y-3 font-sans">
            {task.modelAnswers[selectedModelBand]}
          </div>
        </div>
      )}

      {/* Diagnostic Evaluation Report Tab */}
      {activeTab === 'evaluation' && evaluation && (
        <div className="space-y-6">
          
          {/* Overall Band Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono-tabular">
                IELTS Band Score Diagnostic
              </span>
              <h3 className="font-display font-bold text-2xl text-emerald-950">
                Overall Estimated Band: {evaluation.overallBand.toFixed(1)}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 max-w-xl leading-relaxed">
                {evaluation.generalFeedback}
              </p>
              <div className="flex items-center gap-3 text-xs text-emerald-800 font-mono-tabular pt-1">
                <span>{evaluation.wordCount} words written</span>
                <span>·</span>
                <span>{evaluation.characterCount} characters</span>
              </div>
            </div>

            <div className="font-mono-tabular text-right shrink-0">
              <div className="text-4xl font-extrabold text-emerald-900">{evaluation.overallBand.toFixed(1)}</div>
              <div className="text-xs text-emerald-700 font-medium">IELTS Band Scale 1-9</div>
            </div>
          </div>

          {/* 4 Criteria Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evaluation.criteria.map((crit, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-sm font-semibold text-slate-900">{crit.criterion}</h4>
                  <span className="font-mono-tabular text-sm font-bold text-slate-900">
                    Band {crit.score.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{crit.feedback}</p>

                {crit.strengths.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-semibold text-emerald-700 block">Observed Strengths:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      {crit.strengths.map((str, sIdx) => (
                        <li key={sIdx}>{str}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {crit.improvements.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-semibold text-amber-700 block">Areas for Improvement:</span>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      {crit.improvements.map((imp, iIdx) => (
                        <li key={iIdx}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vocabulary Suggestions */}
          {evaluation.vocabularySuggestions.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-700" />
                <h4 className="font-display font-semibold text-sm text-slate-900">Recommended Vocabulary Upgrades</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {evaluation.vocabularySuggestions.map((sug, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="line-through text-slate-500 font-mono">"{sug.original}"</span>
                      <span className="text-slate-400">→</span>
                      <span className="font-semibold text-emerald-800 font-mono">"{sug.suggested}"</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{sug.context}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structural Advice */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
            <h4 className="font-display font-semibold text-sm text-slate-900">Structural Recommendations</h4>
            <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
              {evaluation.structuralAdvice.map((adv, idx) => (
                <li key={idx} className="leading-relaxed">{adv}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setActiveTab('editor')}
              className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Back to Writing Editor
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
