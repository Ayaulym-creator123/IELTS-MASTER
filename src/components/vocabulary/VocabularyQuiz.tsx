import React, { useState } from 'react';
import { VocabularyEntry } from '../../types/ielts';
import { recordAttempt } from '../../services/storageService';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface VocabularyQuizProps {
  words: VocabularyEntry[];
  onFinish?: () => void;
}

export const VocabularyQuiz: React.FC<VocabularyQuizProps> = ({ words, onFinish }) => {
  const [quizQuestions] = useState(() => {
    // Pick 10 random words
    const shuffled = [...words].sort(() => 0.5 - Math.random()).slice(0, 10);
    return shuffled.map((target) => {
      // 3 wrong distractors
      const wrong = words
        .filter(w => w.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.definition);

      const allOptions = [target.definition, ...wrong].sort(() => 0.5 - Math.random());
      return {
        word: target.word,
        phonetic: target.phonetic,
        partOfSpeech: target.partOfSpeech,
        correctDefinition: target.definition,
        exampleSentence: target.exampleSentence,
        options: allOptions
      };
    });
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const currentQ = quizQuestions[currentIndex];

  const handleSelectOption = (opt: string) => {
    if (isFinished) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: opt }));
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Calculate score
      let correct = 0;
      quizQuestions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctDefinition) {
          correct += 1;
        }
      });
      setScore(correct);
      setIsFinished(true);

      recordAttempt('vocabulary', 'vocab-quiz-' + Date.now(), 'Vocabulary Mastery Quiz', correct, quizQuestions.length, 180);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsFinished(false);
    setCurrentIndex(0);
    setScore(0);
  };

  if (quizQuestions.length === 0) {
    return <div className="p-8 text-center text-xs text-slate-500">Not enough words to generate quiz.</div>;
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      
      {/* Quiz Progress Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
        <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
        <span>Vocabulary Recall Quiz</span>
      </div>

      {!isFinished ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Identify the correct definition for:
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900">
              {currentQ.word}
            </h3>
            <div className="text-xs text-slate-500 font-mono">
              {currentQ.phonetic} · <span className="italic">({currentQ.partOfSpeech})</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = selectedAnswers[currentIndex] === opt;
              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(opt)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${
                    isSelected
                      ? 'border-slate-900 bg-slate-50 font-medium text-slate-900 shadow-sm'
                      : 'border-slate-200 hover:bg-slate-50/70 text-slate-700'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => prev - 1)}
              className="text-xs text-slate-500 hover:text-slate-900 disabled:opacity-30"
            >
              Previous
            </button>
            <button
              disabled={!selectedAnswers[currentIndex]}
              onClick={handleNext}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 disabled:opacity-40 transition-colors flex items-center gap-1.5"
            >
              <span>{currentIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-center">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Quiz Completed!
            </h3>
            <p className="text-sm text-slate-600">
              You scored <span className="font-bold text-slate-900 font-mono-tabular">{score}</span> out of <span className="font-bold text-slate-900 font-mono-tabular">{quizQuestions.length}</span> ({Math.round((score / quizQuestions.length) * 100)}%).
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Quiz</span>
            </button>
            {onFinish && (
              <button
                onClick={onFinish}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Back to Database
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
