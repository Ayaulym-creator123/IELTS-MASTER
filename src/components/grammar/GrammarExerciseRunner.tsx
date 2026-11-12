import React, { useState } from 'react';
import { GrammarExercise } from '../../types/ielts';
import { recordAttempt } from '../../services/storageService';
import { ArrowLeft, BookCheck, CheckCircle2, XCircle, RotateCcw, AlertTriangle } from 'lucide-react';

interface GrammarExerciseRunnerProps {
  exercise: GrammarExercise;
  onBack: () => void;
}

export const GrammarExerciseRunner: React.FC<GrammarExerciseRunnerProps> = ({ exercise, onBack }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelect = (qId: string, val: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    let correct = 0;
    exercise.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
      }
    });
    setScore(correct);
    setSubmitted(true);

    recordAttempt('grammar', exercise.id, exercise.title, correct, exercise.questions.length, 120);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-xl px-5 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-tabular">
              <span>Lesson {exercise.number} of 36</span>
              <span>·</span>
              <span>CEFR {exercise.cefrLevel}</span>
              <span>·</span>
              <span>{exercise.questions.length} Practice Questions</span>
            </div>
            <h2 className="text-sm font-semibold text-slate-900 line-clamp-1">{exercise.title}</h2>
          </div>
        </div>

        <div>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < exercise.questions.length}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-40 transition-colors"
            >
              Check Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Quiz</span>
            </button>
          )}
        </div>
      </div>

      {/* Grammar Lesson & Rule Cards */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
            Grammar Foundation
          </span>
          <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
            {exercise.title} Overview
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
            {exercise.overview}
          </p>
        </div>

        {/* Rules */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
            Key Grammatical Principles & Academic Examples
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {exercise.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-semibold text-xs sm:text-sm text-slate-900 block">{rule.heading}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.explanation}</p>
                <div className="pt-2 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">IELTS Examples:</span>
                  <ul className="space-y-1 text-xs text-slate-800 list-disc list-inside">
                    {rule.examples.map((ex, eIdx) => (
                      <li key={eIdx} className="italic font-medium">{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Pitfalls */}
        {exercise.commonMistakes.length > 0 && (
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Common Student Errors to Avoid in IELTS Writing & Speaking</span>
            </div>
            {exercise.commonMistakes.map((err, errIdx) => (
              <div key={errIdx} className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/70 text-xs space-y-2">
                <div className="space-y-1">
                  <div className="line-through text-rose-700 font-mono">✗ {err.incorrect}</div>
                  <div className="text-emerald-800 font-mono font-medium">✓ {err.correct}</div>
                </div>
                <p className="text-slate-600 leading-relaxed pt-1 border-t border-amber-100">
                  <span className="font-semibold text-slate-800">Grammar Rule:</span> {err.reason}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quiz Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Interactive Practice Quiz
            </h3>
            <p className="text-xs text-slate-500">
              Select the grammatically accurate word or phrase to complete each sentence.
            </p>
          </div>
          {submitted && (
            <div className="text-right font-mono-tabular">
              <span className="text-xs text-slate-500 block">Score</span>
              <span className="text-base font-bold text-emerald-800">
                {score} / {exercise.questions.length} ({Math.round((score / exercise.questions.length) * 100)}%)
              </span>
            </div>
          )}
        </div>

        <div className="space-y-5">
          {exercise.questions.map((q, idx) => {
            const currentAns = answers[q.id];
            const isCorrect = submitted && currentAns === q.correctAnswer;
            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border space-y-3 transition-colors ${
                  submitted
                    ? isCorrect
                      ? 'border-emerald-200 bg-emerald-50/10'
                      : 'border-rose-200 bg-rose-50/10'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold font-mono-tabular">Question {idx + 1} of {exercise.questions.length}</span>
                  {submitted && (
                    <span className={`inline-flex items-center gap-1 font-semibold ${
                      isCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed font-sans">
                  {q.sentence}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <label
                      key={optIdx}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                        currentAns === opt
                          ? 'border-slate-900 bg-slate-50 font-semibold text-slate-900'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`g-q-${q.id}`}
                        value={opt}
                        checked={currentAns === opt}
                        disabled={submitted}
                        onChange={() => handleSelect(q.id, opt)}
                        className="text-slate-900 focus:ring-slate-900"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                {submitted && (
                  <div className="pt-3 border-t border-slate-100 text-xs space-y-1">
                    <div className="font-semibold text-slate-900">
                      Correct Answer: <span className="font-mono text-emerald-800">{q.correctAnswer}</span>
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
      </div>

    </div>
  );
};
