import React, { useState } from 'react';
import { vocabularyDatabase } from '../../data/vocabularyDatabase';
import { VocabularyEntry, UserProgress } from '../../types/ielts';
import { FlashcardDeck } from './FlashcardDeck';
import { VocabularyQuiz } from './VocabularyQuiz';
import { AudioEngine } from '../../services/audioService';
import { toggleWordBookmark, markWordLearned } from '../../services/storageService';
import { 
  Sparkles, Search, Volume2, Bookmark, BookmarkCheck, 
  Check, RotateCw, Layers, Award, BookOpen 
} from 'lucide-react';

interface VocabularyViewProps {
  progress: UserProgress;
  onProgressUpdated: () => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ progress, onProgressUpdated }) => {
  const [viewMode, setViewMode] = useState<'dictionary' | 'flashcards' | 'quiz'>('dictionary');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);

  const categories = [
    'All',
    'Education',
    'Technology',
    'Environment',
    'Health',
    'Society',
    'Culture',
    'Business',
    'Science',
    'Travel',
    'Work',
    'Government',
    'Media',
    'Psychology',
    'Economics',
    'Crime',
    'Globalization',
    'IELTS Academic Vocabulary',
    'IELTS Writing Vocabulary',
    'IELTS Speaking Vocabulary'
  ];

  const filteredWords = vocabularyDatabase.filter((w) => {
    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesSearch = w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.exampleSentence.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmark = onlyBookmarked ? progress.bookmarkedWords.includes(w.id) : true;
    return matchesCategory && matchesSearch && matchesBookmark;
  });

  const handleToggleBookmark = (wordId: string) => {
    toggleWordBookmark(wordId);
    onProgressUpdated();
  };

  const handleToggleLearned = (wordId: string) => {
    markWordLearned(wordId);
    onProgressUpdated();
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono-tabular">
            <span>Skill Module</span>
            <span>·</span>
            <span>{vocabularyDatabase.length} Unique English Words</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
            IELTS Academic Vocabulary Database
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            A comprehensive lexicon covering 18 academic categories with phonetic transcriptions, definitions, IELTS example sentences, interactive flashcards, and spaced repetition quizzes.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('dictionary')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'dictionary' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dictionary ({filteredWords.length})</span>
          </button>
          <button
            onClick={() => setViewMode('flashcards')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'flashcards' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>
          <button
            onClick={() => setViewMode('quiz')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              viewMode === 'quiz' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Quiz Mode</span>
          </button>
        </div>
      </div>

      {/* Flashcards View */}
      {viewMode === 'flashcards' && (
        <FlashcardDeck
          words={filteredWords}
          onFinish={() => setViewMode('dictionary')}
        />
      )}

      {/* Quiz Mode View */}
      {viewMode === 'quiz' && (
        <VocabularyQuiz
          words={filteredWords.length >= 10 ? filteredWords : vocabularyDatabase}
          onFinish={() => setViewMode('dictionary')}
        />
      )}

      {/* Dictionary Table View */}
      {viewMode === 'dictionary' && (
        <div className="space-y-6">
          
          {/* Controls bar: Search + Category + Bookmarks toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vocabulary by word, definition, or example..."
                className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Category selector */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-slate-200 rounded-lg bg-white text-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Favorites filter toggle */}
              <button
                onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                className={`px-3 py-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  onlyBookmarked
                    ? 'border-amber-400 bg-amber-50 text-amber-900 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Favorites Only ({progress.bookmarkedWords.length})</span>
              </button>
            </div>
          </div>

          {/* Vocabulary Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWords.map((entry) => {
              const isBookmarked = progress.bookmarkedWords.includes(entry.id);
              const isLearned = progress.learnedWords.includes(entry.id);

              return (
                <div
                  key={entry.id}
                  className={`bg-white border rounded-xl p-5 space-y-3 transition-colors ${
                    isLearned ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-display font-bold text-lg text-slate-900">
                          {entry.word}
                        </h3>
                        <span className="text-xs font-mono text-slate-500">{entry.phonetic}</span>
                        <span className="text-[11px] text-slate-400 italic">({entry.partOfSpeech})</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono-tabular mt-0.5">
                        {entry.category} · Target {entry.targetBand}
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => AudioEngine.speakWord(entry.word)}
                        className="p-1.5 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
                        title="Pronounce word"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleToggleBookmark(entry.id)}
                        className={`p-1.5 rounded-md hover:bg-slate-100 transition-colors ${
                          isBookmarked ? 'text-amber-600' : 'text-slate-400 hover:text-slate-700'
                        }`}
                        title="Bookmark word"
                      >
                        {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {entry.definition}
                  </p>

                  <div className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed font-sans">
                    "{entry.exampleSentence}"
                  </div>

                  {entry.collocations && entry.collocations.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1">
                      <span className="text-slate-400">Collocations:</span>
                      {entry.collocations.map((col, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {col}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredWords.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-xs text-slate-500 space-y-2">
              <Sparkles className="w-6 h-6 text-slate-400 mx-auto" />
              <div>No vocabulary entries match your search criteria.</div>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setOnlyBookmarked(false); }}
                className="text-xs font-semibold text-slate-900 underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
