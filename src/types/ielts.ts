export type ModuleType = 
  | 'reading'
  | 'listening'
  | 'writing'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'mock-exams';

export type PublicPage = 
  | 'home'
  | 'about'
  | 'preparation'
  | 'features'
  | 'contact'
  | 'dashboard'
  | 'reading'
  | 'listening'
  | 'writing'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'mock-exams'
  | 'results'
  | 'progress'
  | 'history';

export type DifficultyLevel = 'Intermediate (Band 5.5-6.5)' | 'Advanced (Band 7.0-8.0)' | 'Expert (Band 8.5-9.0)';

export type QuestionType =
  | 'multiple-choice'
  | 'true-false-not-given'
  | 'yes-no-not-given'
  | 'matching-headings'
  | 'matching-information'
  | 'matching-features'
  | 'matching-sentence-endings'
  | 'sentence-completion'
  | 'summary-completion'
  | 'note-completion'
  | 'table-completion'
  | 'flowchart-completion'
  | 'diagram-completion'
  | 'short-answer';

export interface Question {
  id: string;
  order: number;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface ReadingTask {
  id: string;
  title: string;
  module: 'Academic' | 'General Training';
  passageNumber: 1 | 2 | 3;
  topicCategory: string;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  wordCount: number;
  passageText: string;
  questions: Question[];
}

export interface ListeningTask {
  id: string;
  title: string;
  section: 1 | 2 | 3 | 4;
  sectionDescription: string;
  accent: 'British' | 'Australian' | 'North American' | 'International';
  topicCategory: string;
  difficulty: DifficultyLevel;
  durationSeconds: number;
  estimatedMinutes?: number;
  audioScript: string;
  questions: Question[];
}

export type WritingTaskType = 'academic-task-1' | 'gt-task-1' | 'task-2';

export interface WritingTask {
  id: string;
  type: WritingTaskType;
  title: string;
  topicCategory: string;
  prompt: string;
  minWordCount: number;
  suggestedMinutes: number;
  chartType?: 'line' | 'bar' | 'pie' | 'table' | 'map' | 'process' | 'mixed';
  chartData?: any;
  letterPoints?: string[];
  essayType?: 'opinion' | 'discussion' | 'advantages-disadvantages' | 'problem-solution' | 'two-part';
  modelAnswers: {
    band6: string;
    band7: string;
    band8: string;
    band9: string;
  };
}

export interface SpeakingTask {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  topicCategory: string;
  cueCardPoints?: string[];
  questions?: string[];
  prepTimeSeconds?: number;
  speakTimeSeconds: number;
  usefulPhrases: string[];
  modelResponse: string;
}

export interface GrammarExercise {
  id: string;
  number: number;
  title: string;
  cefrLevel: 'B1' | 'B2' | 'C1' | 'C2';
  overview: string;
  rules: {
    heading: string;
    explanation: string;
    examples: string[];
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    reason: string;
  }[];
  questions: {
    id: string;
    sentence: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface VocabularyEntry {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  category: string;
  cefrLevel: 'B2' | 'C1' | 'C2';
  targetBand: string;
  definition: string;
  exampleSentence: string;
  synonyms: string[];
  collocations?: string[];
}

export interface MockExam {
  id: string;
  title: string;
  type: 'Academic' | 'General Training';
  description: string;
  readingTaskId: string;
  listeningTaskId: string;
  writingTask1Id: string;
  writingTask2Id: string;
  speakingTaskId: string;
  totalDurationMinutes: number;
}

export interface ExerciseAttempt {
  id: string;
  module: ModuleType;
  taskId: string;
  taskTitle: string;
  date: string;
  score: number;
  maxScore: number;
  percentage: number;
  estimatedBand: number;
  timeSpentSeconds: number;
  details?: Record<string, any>;
}

export interface UserProgress {
  completedTaskIds: string[];
  savedDrafts: Record<string, { text: string; date: string }>;
  bookmarkedWords: string[];
  learnedWords: string[];
  attempts: ExerciseAttempt[];
  streakDays: number;
  lastActiveDate: string;
  totalStudySeconds: number;
}
