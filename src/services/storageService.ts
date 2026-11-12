import { UserProgress, ExerciseAttempt, ModuleType } from '../types/ielts';

const STORAGE_KEY = 'ielts_master_user_progress_v1';

const getInitialProgress = (): UserProgress => {
  const today = new Date().toISOString().split('T')[0];
  return {
    completedTaskIds: [],
    savedDrafts: {},
    bookmarkedWords: [],
    learnedWords: [],
    attempts: [],
    streakDays: 1,
    lastActiveDate: today,
    totalStudySeconds: 0
  };
};

export const getStoredProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialProgress();
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.error('Failed to load local storage progress', e);
    return getInitialProgress();
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('ielts_progress_updated'));
    }
  } catch (e) {
    console.error('Failed to save progress to local storage', e);
  }
};

export const recordAttempt = (
  module: ModuleType,
  taskId: string,
  taskTitle: string,
  score: number,
  maxScore: number,
  timeSpentSeconds: number,
  details?: Record<string, any>
): ExerciseAttempt => {
  const current = getStoredProgress();
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  
  // Convert percentage or raw score to IELTS band score approximation
  let estimatedBand = 5.0;
  if (percentage >= 90) estimatedBand = 9.0;
  else if (percentage >= 80) estimatedBand = 8.0;
  else if (percentage >= 70) estimatedBand = 7.5;
  else if (percentage >= 60) estimatedBand = 7.0;
  else if (percentage >= 50) estimatedBand = 6.5;
  else if (percentage >= 40) estimatedBand = 6.0;
  else if (percentage >= 30) estimatedBand = 5.5;

  const attempt: ExerciseAttempt = {
    id: 'att-' + Date.now(),
    module,
    taskId,
    taskTitle,
    date: new Date().toISOString(),
    score,
    maxScore,
    percentage,
    estimatedBand,
    timeSpentSeconds,
    details
  };

  const completedTaskIds = current.completedTaskIds.includes(taskId)
    ? current.completedTaskIds
    : [...current.completedTaskIds, taskId];

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  let streakDays = current.streakDays;
  if (current.lastActiveDate !== today) {
    streakDays += 1;
  }

  const updated: UserProgress = {
    ...current,
    completedTaskIds,
    attempts: [attempt, ...current.attempts],
    streakDays,
    lastActiveDate: today,
    totalStudySeconds: current.totalStudySeconds + timeSpentSeconds
  };

  saveProgress(updated);
  return attempt;
};

export const saveEssayDraft = (taskId: string, text: string): void => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    savedDrafts: {
      ...current.savedDrafts,
      [taskId]: {
        text,
        date: new Date().toISOString()
      }
    }
  };
  saveProgress(updated);
};

export const toggleWordBookmark = (wordId: string): boolean => {
  const current = getStoredProgress();
  const exists = current.bookmarkedWords.includes(wordId);
  const updatedList = exists
    ? current.bookmarkedWords.filter(id => id !== wordId)
    : [...current.bookmarkedWords, wordId];

  saveProgress({
    ...current,
    bookmarkedWords: updatedList
  });
  return !exists;
};

export const markWordLearned = (wordId: string): void => {
  const current = getStoredProgress();
  if (current.learnedWords.includes(wordId)) return;
  saveProgress({
    ...current,
    learnedWords: [...current.learnedWords, wordId]
  });
};

export const clearLocalProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('ielts_progress_updated'));
  }
};
