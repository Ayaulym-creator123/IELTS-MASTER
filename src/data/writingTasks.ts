import { WritingTask } from '../types/ielts';
import { writingTasksPart1 } from './writingTasksPart1';
import { writingTasksPart2 } from './writingTasksPart2';

export const writingTasks: WritingTask[] = [
  ...writingTasksPart1,
  ...writingTasksPart2
];
