import { ReadingTask } from '../types/ielts';
import { readingTasksPart1 } from './readingTasksPart1';
import { readingTasksPart2 } from './readingTasksPart2';

export const readingTasks: ReadingTask[] = [
  ...readingTasksPart1,
  ...readingTasksPart2
];
