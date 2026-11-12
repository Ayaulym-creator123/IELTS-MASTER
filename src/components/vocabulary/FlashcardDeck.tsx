import React, { useState } from 'react';
import { VocabularyEntry } from '../../types/ielts';
import { AudioEngine } from '../../services/audioService';
import { RotateCw, Volume2, Check, ArrowRight, ArrowLeft } from 'lucide-react';

interface FlashcardDeckProps {
  words: VocabularyEntry[];
  onFinish?: () => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ words, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCount, setKnownCount] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);

  if (words.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-xs text-slate-500">
        No words available for this filter selection.
      </div>
    );
  }

  const currentWord = words[currentIndex];

  const handleNext = (known: boolean) => {
    if (known) setKnownCount(prev => prev + 1);
    else setReviewCount(prev => prev + 1);

    setIsFlipped(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (onFinish) onFinish();
    }
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    AudioEngine.speakWord(currentWord.word);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      
      {/* Deck Status Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono-tabular">
        <span>Card {currentIndex + 1} of {words.length}</span>
        <div className="flex items-center gap-3">
          <span className="text-emerald-700 font-semibold">{knownCount} Mastered</span>
          <span>·</span>
          <span className="text-amber-700 font-semibold">{reviewCount} Review</span>
        </div>
      </div>

      {/* Interactive 3D Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full min-h-[320px] bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all cursor-pointer relative select-none"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono-tabular">
            {currentWord.category} · {currentWord.targetBand}
          </span>
          <button
            onClick={handleSpeak}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            title="Pronounce word"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        {!isFlipped ? (
          <div className="text-center py-8 space-y-3">
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {currentWord.word}
            </h3>
            <div className="text-sm font-mono text-slate-500">{currentWord.phonetic}</div>
            <div className="text-xs text-slate-400 italic">({currentWord.partOfSpeech})</div>
            <div className="pt-4 text-xs text-slate-400 flex items-center justify-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click card to reveal definition & example</span>
            </div>
          </div>
        ) : (
          <div className="py-4 space-y-4 text-left">
            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Definition:</span>
              <p className="text-sm text-slate-900 font-medium leading-relaxed mt-0.5">
                {currentWord.definition}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">IELTS Example:</span>
              <p className="text-xs text-slate-700 italic leading-relaxed mt-0.5">
                "{currentWord.exampleSentence}"
              </p>
            </div>

            {currentWord.synonyms.length > 0 && (
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-400">Synonyms:</span>
                {currentWord.synonyms.map((syn, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                    {syn}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="text-center text-[11px] text-slate-400 border-t border-slate-100 pt-3 font-mono-tabular">
          {isFlipped ? 'Click card to flip back' : 'Tap to reveal answer'}
        </div>
      </div>

      {/* Action Buttons: Review Again vs Got It */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => handleNext(false)}
          className="flex-1 py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <RotateCw className="w-4 h-4 text-amber-600" />
          <span>Needs Review</span>
        </button>
        <button
          onClick={() => handleNext(true)}
          className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Mastered</span>
        </button>
      </div>

    </div>
  );
};
