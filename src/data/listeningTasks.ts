import { ListeningTask } from '../types/ielts';
import { listeningTasksPart1 } from './listeningTasksPart1';
import { listeningTasksPart2 } from './listeningTasksPart2';

export const listeningTasks: ListeningTask[] = [
  ...listeningTasksPart1,
  ...listeningTasksPart2
];
