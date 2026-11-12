import { SpeakingTask } from '../types/ielts';
import { speakingTasksPart1 } from './speakingTasksPart1';
import { speakingTasksPart2 } from './speakingTasksPart2';

export const speakingTasks: SpeakingTask[] = [
  ...speakingTasksPart1,
  ...speakingTasksPart2
];
