import React, { useState } from 'react';
import { ListeningTask } from '../../types/ielts';
import { recordAttempt } from '../../services/storageService';
import { ListeningPlayer } from './ListeningPlayer';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface ListeningTaskRunnerProps {
  task: ListeningTask;
  onBack: () => void;
}

export const ListeningTaskRunner: React.FC<ListeningTaskRunnerProps> = ({ task, onBack }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [startTime] = useState<number>(Date.now());

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
    setShowTranscript(true);

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    recordAttempt('listening', task.id, task.title, correctCount, task.questions.length, Math.max(10, timeSpent));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setShowTranscript(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <span>Section {task.section}</span>
              <span>·</span>
              <span>{task.accent} Accent</span>
              <span>·</span>
              <span>{task.questions.length} Questions</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">{task.title}</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
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

      {/* Embedded Audio Player */}
      <ListeningPlayer
        script={task.audioScript}
        accent={task.accent}
        durationSeconds={task.durationSeconds}
      />

      {/* Description Callout */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
        <span className="font-semibold text-slate-800 block mb-0.5">Section Instructions:</span>
        {task.sectionDescription} Listen to the audio and answer Questions 1 to {task.questions.length} in the form below.
      </div>

      {/* Results Header if submitted */}
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              Listening Task Complete
            </div>
            <div className="text-sm text-emerald-950 font-medium">
              You scored <span className="font-bold font-mono-tabular">{score}</span> out of <span className="font-bold font-mono-tabular">{task.questions.length}</span> ({Math.round((score / task.questions.length) * 100)}%).
            </div>
            <p className="text-xs text-emerald-800">
              The full dialogue transcript has been revealed below with question keywords highlighted.
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

      {/* Questions List */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-base text-slate-900">Questions</h3>

        {task.questions.map((q, idx) => {
          const currentAns = answers[q.id] || '';
          const isCorrect = submitted && (
            Array.isArray(q.correctAnswer)
              ? q.correctAnswer.map(c => c.toLowerCase()).includes(currentAns.trim().toLowerCase())
              : q.correctAnswer.toLowerCase() === currentAns.trim().toLowerCase()
          );

          return (
            <div
              key={q.id}
              className={`bg-white border rounded-xl p-5 space-y-3 transition-colors ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-200 bg-emerald-50/10'
                    : 'border-rose-200 bg-rose-50/10'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 font-mono-tabular">
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

              <div className="text-sm font-medium text-slate-900">
                {q.prompt}
              </div>

              {q.options && q.options.length > 0 ? (
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => (
                    <label
                      key={optIdx}
                      className={`flex items-start gap-3 p-2.5 rounded-lg border text-xs cursor-pointer ${
                        currentAns === opt
                          ? 'border-slate-900 bg-slate-50 font-medium text-slate-900'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`l-q-${q.id}`}
                        value={opt}
                        checked={currentAns === opt}
                        disabled={submitted}
                        onChange={() => handleAnswerChange(q.id, opt)}
                        className="mt-0.5 text-slate-900 focus:ring-slate-900"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="space-y-1">
                  <input
                    type="text"
                    value={currentAns}
                    disabled={submitted}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    placeholder="Type words/numbers from audio..."
                    className="w-full sm:w-80 px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 disabled:bg-slate-50"
                  />
                </div>
              )}

              {/* Explanation & Answer Key */}
              {submitted && (
                <div className="pt-3 border-t border-slate-100 text-xs space-y-1">
                  <div className="font-semibold text-slate-900">
                    Correct Answer: <span className="font-mono text-emerald-800">{Array.isArray(q.correctAnswer) ? q.correctAnswer.join(' / ') : q.correctAnswer}</span>
                  </div>
                  <div className="text-slate-600 bg-slate-50 p-2.5 rounded-md border border-slate-100">
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full Transcript Accordion */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full px-5 py-3.5 text-left text-xs font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-500" />
            <span>Full Audio Script Transcript</span>
          </div>
          {showTranscript ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {showTranscript && (
          <div className="p-5 border-t border-slate-100 text-xs text-slate-700 leading-relaxed space-y-2 whitespace-pre-line bg-slate-50/50">
            {task.audioScript}
          </div>
        )}
      </div>

    </div>
  );
};
