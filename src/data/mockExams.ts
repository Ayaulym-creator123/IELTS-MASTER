import { MockExam } from '../types/ielts';

export const mockExams: MockExam[] = [
  {
    id: 'mock-acad-1',
    title: 'IELTS Academic Full Examination 1',
    type: 'Academic',
    description: 'Complete simulation of the official IELTS Academic test comprising all four components: 40-question Listening section with audio, complete 3-passage Academic Reading, Writing Task 1 (Line Graph) & Task 2 (Opinion Essay), and 3-part Speaking interview.',
    readingTaskId: 'read-1',
    listeningTaskId: 'list-1',
    writingTask1Id: 'write-1',
    writingTask2Id: 'write-5',
    speakingTaskId: 'speak-2',
    totalDurationMinutes: 165
  },
  {
    id: 'mock-acad-2',
    title: 'IELTS Academic Full Examination 2',
    type: 'Academic',
    description: 'Comprehensive IELTS Academic practice test featuring advanced scientific and historical texts, four recorded listening parts, Writing Task 1 (Bar Chart) & Task 2 (Discussion Essay), and a full cue card Speaking examination.',
    readingTaskId: 'read-2',
    listeningTaskId: 'list-3',
    writingTask1Id: 'write-2',
    writingTask2Id: 'write-12',
    speakingTaskId: 'speak-5',
    totalDurationMinutes: 165
  },
  {
    id: 'mock-gt-1',
    title: 'IELTS General Training Full Examination 1',
    type: 'General Training',
    description: 'Full-length IELTS General Training simulation covering practical workplace and social listening audio, workplace reading texts, General Training Writing Task 1 (Formal Letter to Council) & Task 2 (Social Essay), and Speaking practice.',
    readingTaskId: 'read-4',
    listeningTaskId: 'list-2',
    writingTask1Id: 'write-4',
    writingTask2Id: 'write-5',
    speakingTaskId: 'speak-1',
    totalDurationMinutes: 165
  },
  {
    id: 'mock-gt-2',
    title: 'IELTS General Training Full Examination 2',
    type: 'General Training',
    description: 'Authentic General Training examination with real-world informational dialogues, workplace reading comprehension, General Training Writing Task 1 (Semi-Formal Request Letter) & Task 2, and timed audio-recorded Speaking module.',
    readingTaskId: 'read-8',
    listeningTaskId: 'list-5',
    writingTask1Id: 'write-10',
    writingTask2Id: 'write-20',
    speakingTaskId: 'speak-4',
    totalDurationMinutes: 165
  }
];
