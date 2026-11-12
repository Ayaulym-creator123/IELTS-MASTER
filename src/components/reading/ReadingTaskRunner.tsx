import React, { useState, useEffect } from 'react';
import { ReadingTask, Question } from '../../types/ielts';
import { recordAttempt } from '../../services/storageService';
import { Clock, CheckCircle2, XCircle, ArrowLeft, RotateCcw, HelpCircle, Eye, EyeOff } from 'lucide-react';

interface ReadingTaskRunnerProps {
  task: ReadingTask;
  onBack: () => void;
}

export const ReadingTaskRunner: React.FC<ReadingTaskRunnerProps> = ({ task, onBack }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(task.estimatedMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && secondsLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setSecondsLeft(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsLeft, submitted]);

  const handleAnswerChange = (questionId: string, val: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: val }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    let correctCount = 0;

    task.questions.forEach((q) => {
      const userAns = (answers[q.id] || '').trim().toLowerCase();
      const correctAns = Array.isArray(q.correctAnswer)
        ? q.correctAnswer.map(c => c.toLowerCase())
        : [q.correctAnswer.toLowerCase()];

      if (correctAns.some(ans => ans === userAns || userAns.includes(ans) || ans.includes(userAns) && userAns.length > 2)) {
        correctCount += 1;
      }
    });

    setScore(correctCount);
    setSubmitted(true);
    setIsTimerRunning(false);

    const timeSpent = (task.estimatedMinutes * 60) - secondsLeft;
    recordAttempt('reading', task.id, task.title, correctCount, task.questions.length, Math.max(10, timeSpent));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setSecondsLeft(task.estimatedMinutes * 60);
    setIsTimerRunning(true);
    setActiveQuestionIndex(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <span>{task.module} Reading</span>
              <span>·</span>
              <span>Passage {task.passageNumber}</span>
              <span>·</span>
              <span>{task.wordCount} words</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">{task.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Timer */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg font-mono-tabular text-xs font-semibold text-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{formatTime(secondsLeft)}</span>
          </div>

          {/* Font toggle */}
          <button
            onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'normal')}
            className="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md font-mono"
            title="Toggle text size"
          >
            {fontSize === 'normal' ? 'A+' : 'A-'}
          </button>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Submit Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Task</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header if submitted */}
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              Task Evaluation Complete
            </div>
            <div className="text-sm text-emerald-950 font-medium">
              You scored <span className="font-bold font-mono-tabular">{score}</span> out of <span className="font-bold font-mono-tabular">{task.questions.length}</span> ({Math.round((score / task.questions.length) * 100)}%).
            </div>
            <p className="text-xs text-emerald-800">
              Review detailed explanations below for each question to identify correct reading comprehension strategies.
            </p>
          </div>
          <div className="font-mono-tabular text-right">
            <span className="text-xs text-emerald-700 block">Estimated Band</span>
            <span className="text-2xl font-bold text-emerald-900">
              {score === 4 ? '8.5 - 9.0' : score === 3 ? '7.0 - 7.5' : score === 2 ? '6.0 - 6.5' : '5.0 - 5.5'}
            </span>
          </div>
        </div>
      )}

      {/* Split-pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Reading Passage (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 max-h-[750px] overflow-y-auto">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs text-slate-500 font-mono-tabular uppercase tracking-wider block">
              Reading Passage {task.passageNumber}
            </span>
            <h3 className="font-display font-bold text-lg text-slate-900 mt-1">{task.title}</h3>
          </div>

          <div className={`text-slate-800 leading-relaxed space-y-4 whitespace-pre-line ${
            fontSize === 'large' ? 'text-base leading-8' : 'text-sm leading-7'
          }`}>
            {task.passageText}
          </div>
        </div>

        {/* Right: Question Deck (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Question Navigator */}
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-semibold text-slate-700">Questions ({task.questions.length})</span>
              <span>Click number to jump</span>
            </div>
            <div className="flex items-center gap-2">
              {task.questions.map((q, idx) => {
                const isAnswered = !!answers[q.id];
                const isActive = activeQuestionIndex === idx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIndex(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono-tabular font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : isAnswered
                        ? 'bg-slate-100 text-slate-900 font-semibold'
                        : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Question Box */}
          {task.questions.map((q, idx) => {
            if (idx !== activeQuestionIndex) return null;
            const currentAns = answers[q.id] || '';
            const isCorrect = submitted && (
              Array.isArray(q.correctAnswer)
                ? q.correctAnswer.map(c => c.toLowerCase()).includes(currentAns.trim().toLowerCase())
                : q.correctAnswer.toLowerCase() === currentAns.trim().toLowerCase()
            );

            return (
              <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
                    Question {idx + 1} of {task.questions.length} · {q.type.replace(/-/g, ' ')}
                  </span>
                  {submitted && (
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </span>
                  )}
                </div>

                <div className="text-sm font-medium text-slate-900 leading-snug">
                  {q.prompt}
                </div>

                {/* Question Input rendering by type */}
                {q.options && q.options.length > 0 ? (
                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => (
                      <label
                        key={optIdx}
                        className={`flex items-start gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                          currentAns === opt
                            ? 'border-slate-900 bg-slate-50/70 font-medium text-slate-900'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={opt}
                          checked={currentAns === opt}
                          disabled={submitted}
                          onChange={() => handleAnswerChange(q.id, opt)}
                          className="mt-0.5 text-slate-900 focus:ring-slate-900"
                        />
                        <span className="leading-relaxed">{opt}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs text-slate-500 block">Type your answer here (case-insensitive):</label>
                    <input
                      type="text"
                      value={currentAns}
                      disabled={submitted}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder="e.g. consolidation / names / 80%"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 disabled:bg-slate-50"
                    />
                  </div>
                )}

                {/* Explanation on Submission */}
                {submitted && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="font-semibold text-slate-900">
                      Correct Answer: <span className="font-mono text-emerald-800">{Array.isArray(q.correctAnswer) ? q.correctAnswer.join(' / ') : q.correctAnswer}</span>
                    </div>
                    <div className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-800 block mb-0.5">Explanation:</span>
                      {q.explanation}
                    </div>
                  </div>
                )}

                {/* Prev / Next Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeQuestionIndex === 0}
                    onClick={() => setActiveQuestionIndex(prev => prev - 1)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 disabled:opacity-30 rounded-md"
                  >
                    Previous Question
                  </button>
                  <button
                    disabled={activeQuestionIndex === task.questions.length - 1}
                    onClick={() => setActiveQuestionIndex(prev => prev + 1)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-900 hover:text-slate-700 disabled:opacity-30 rounded-md"
                  >
                    Next Question
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
