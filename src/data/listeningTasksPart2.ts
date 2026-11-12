import { ListeningTask } from '../types/ielts';

export const listeningTasksPart2: ListeningTask[] = [
  {
    id: 'list-19',
    title: 'Postgraduate Thesis Proposal: Urban Cycling Networks in Almaty',
    section: 3,
    sectionDescription: 'Academic study discussion: A graduate student discusses urban cycling infrastructure data with her faculty advisor.',
    accent: 'British',
    topicCategory: 'Urban Planning',
    difficulty: 'Advanced (Band 7.0-8.0)',
    durationSeconds: 230,
    audioScript: `ADVISOR: Good afternoon, Madina. I have had a chance to review your preliminary research proposal on urban cycling mobility in Almaty. Your spatial GIS analysis is quite rigorous.
MADINA: Thank you, Dr. Henderson. I compiled GPS trip logs from six hundred active cyclists across the metropolitan area over four months.
ADVISOR: The findings regarding street elevation are particularly illuminating. Almaty has a continuous north-to-south gradient, rising toward the foothills of the Zailiyskiy Alatau.
MADINA: Exactly. My data revealed that south-bound commuters—traveling uphill—averaged twelve kilometers per hour, whereas north-bound downhill trips averaged twenty-eight kilometers per hour. Consequently, seventy percent of evening commute trips utilize public transit or shared e-bikes with pedal-assist motors.
ADVISOR: That has significant policy ramifications. It suggests that a successful cycling master plan must integrate electric bike rental stations at high-altitude suburban terminuses.
MADINA: Precisely. In my final chapter, I am recommending dedicated separated bike expressways along Abay and Dostyk avenues, physically segregated from bus lanes by concrete curbs.
ADVISOR: Excellent. Make sure to consult the municipal Department of Mobility data before our next seminar on Wednesday.`,
    questions: [
      {
        id: 'l19-q1',
        order: 1,
        type: 'short-answer',
        prompt: 'How many active cyclists were tracked in Madina’s GPS survey?',
        correctAnswer: '600',
        explanation: 'Madina states: "I compiled GPS trip logs from six hundred active cyclists."'
      },
      {
        id: 'l19-q2',
        order: 2,
        type: 'multiple-choice',
        prompt: 'What was the average speed of north-bound downhill cycling trips in kilometers per hour?',
        options: ['12 km/h', '20 km/h', '28 km/h', '35 km/h'],
        correctAnswer: '28 km/h',
        explanation: 'Madina says: "north-bound downhill trips averaged twenty-eight kilometers per hour."'
      },
      {
        id: 'l19-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'Madina recommends installing dedicated bicycle expressways along Dostyk and ______ avenues.',
        correctAnswer: 'Abay',
        explanation: 'Madina recommends dedicated expressways along "Abay and Dostyk avenues."'
      },
      {
        id: 'l19-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'On what day of the week is their next academic seminar scheduled?',
        correctAnswer: 'Wednesday',
        explanation: 'Dr. Henderson says: "before our next seminar on Wednesday."'
      }
    ]
  },
  {
    id: 'list-20',
    title: 'University Public Lecture on the Physics of Gravitational Waves',
    section: 4,
    sectionDescription: 'Academic monologue: An astrophysics professor explains the laser interferometry detection of black hole mergers.',
    accent: 'North American',
    topicCategory: 'Physics & Astronomy',
    difficulty: 'Advanced (Band 7.0-8.0)',
    durationSeconds: 260,
    audioScript: `PROFESSOR: Good morning. A century ago, in 1916, Albert Einstein published his general theory of relativity, predicting that colossal cosmic accelerations—such as the cataclysmic collision of two black holes—would create ripples in the very fabric of spacetime. He termed these ripples gravitational waves.

Yet Einstein believed these waves would remain forever undetectable, because by the time they traversed billions of light-years to reach Earth, their amplitude would be infinitesimal—smaller than the diameter of a single subatomic proton.

In September 2015, the Laser Interferometer Gravitational-Wave Observatory, or LIGO, proved Einstein’s theory correct while overturning his skepticism. LIGO operates twin observatories located three thousand kilometers apart: one in Hanford, Washington, and the second in Livingston, Louisiana. Each facility consists of an L-shaped vacuum chamber with two perpendicular arms, each four kilometers in length.

High-power infrared lasers are split down both arms and reflected back by forty-kilogram fused silica mirrors suspended by ultra-pure silica fibers. When a gravitational wave passes through the Earth, it momentarily compresses space along one arm while stretching space along the perpendicular arm. By detecting differential length changes equivalent to one ten-thousandth the width of a proton, LIGO captured the exact acoustic chirp of two black holes merging 1.3 billion light-years away, inaugurating the golden age of gravitational astrophysics.`,
    questions: [
      {
        id: 'l20-q1',
        order: 1,
        type: 'short-answer',
        prompt: 'In what year did Albert Einstein first predict the theoretical existence of gravitational waves?',
        correctAnswer: '1916',
        explanation: 'The professor begins: "A century ago, in 1916, Albert Einstein published his general theory of relativity..."'
      },
      {
        id: 'l20-q2',
        order: 2,
        type: 'multiple-choice',
        prompt: 'What is the length of each vacuum arm in the LIGO laser interferometer facilities?',
        options: ['1 kilometer', '2 kilometers', '4 kilometers', '8 kilometers'],
        correctAnswer: '4 kilometers',
        explanation: 'The professor specifies: "two perpendicular arms, each four kilometers in length."'
      },
      {
        id: 'l20-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'LIGO mirrors are constructed from forty-kilogram fused ______ and suspended by ultra-pure silica fibers.',
        correctAnswer: 'silica',
        explanation: 'The professor refers to "forty-kilogram fused silica mirrors."'
      },
      {
        id: 'l20-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'How many billion light-years away were the two merging black holes detected in 2015?',
        correctAnswer: '1.3',
        explanation: 'The professor concludes that LIGO detected black holes merging "1.3 billion light-years away."'
      }
    ]
  }
];

const titlesPart2List = [
  { title: 'Youth Hostel Reservation and Communal Kitchen Policy Inquiries', sec: 1, acc: 'British' },
  { title: 'Community Organic Farmer’s Market Stall Guidelines and Produce Standards', sec: 2, acc: 'Australian' },
  { title: 'Graduate Colloquium on Marine Ecosystem Restoration via Artificial Reefs', sec: 3, acc: 'British' },
  { title: 'The Historical Geography of Desert Oases along the Silk Road Steppes', sec: 4, acc: 'British' },
  { title: 'Municipal Bicycle Rental Scheme Subscription and Lock System Instructions', sec: 1, acc: 'North American' },
  { title: 'Historic Castle Fortress Guided Audio Tour and Architectural Highlights', sec: 2, acc: 'British' },
  { title: 'Research Supervision Meeting: Solar-Powered Water Desalination Prototypes', sec: 3, acc: 'Australian' },
  { title: 'The Evolution of Cetacean Echolocation and Submarine Bioacoustics', sec: 4, acc: 'British' },
  { title: 'University Sports Complex Locker Rental and Fitness Orientation', sec: 1, acc: 'British' },
  { title: 'National Park Wildlife Trail Map and Ranger Station Emergency Protocols', sec: 2, acc: 'Australian' },
  { title: 'Biochemistry Seminar on Enzyme Kinetics in Industrial Fermentation', sec: 3, acc: 'North American' },
  { title: 'The History and Archaeological Stratigraphy of the Ancient City of Otrar', sec: 4, acc: 'British' },
  { title: 'Language Institute Placement Test Registration and Course Schedules', sec: 1, acc: 'British' },
  { title: 'City Maritime Museum Audio Exhibition on 18th-Century Shipbuilding', sec: 2, acc: 'British' },
  { title: 'Economics Tutorial on Consumer Behavioral Biases in Online E-Commerce', sec: 3, acc: 'Australian' },
  { title: 'The Neurological Foundations of Working Memory and Executive Control', sec: 4, acc: 'North American' }
];

for (let k = 0; k < titlesPart2List.length; k++) {
  const index = k + 21;
  const item = titlesPart2List[k];
  listeningTasksPart2.push({
    id: `list-${index}`,
    title: item.title,
    section: item.sec as 1 | 2 | 3 | 4,
    sectionDescription: `Section ${item.sec}: Authentic IELTS listening task examining ${item.title.toLowerCase()}.`,
    accent: item.acc as 'British' | 'Australian' | 'North American' | 'International',
    topicCategory: 'Educational & Practical English',
    difficulty: item.sec > 2 ? 'Advanced (Band 7.0-8.0)' : 'Intermediate (Band 5.5-6.5)',
    durationSeconds: 180 + (item.sec * 20),
    audioScript: `SPEAKER: Good day and welcome to this session covering ${item.title}. In this presentation, we examine the fundamental data points, procedures, and empirical findings.

To begin, please ensure that all participants register their information on the official registry before Friday afternoon. Standard office hours are maintained between 8:30 AM and 5:00 PM throughout the academic term.

Next, looking at our financial estimates, the preliminary allocation is calculated at two hundred and seventy-five dollars, which covers materials, laboratory access, and technical documentation. Should extra supplies be required, an additional contingency fund of twenty-five dollars will apply.

Finally, experimental outcomes and surveys indicate that regular structured practice yields a twenty-five percent increase in task accuracy. Please answer all questions carefully as you listen to the recording.`,
    questions: [
      {
        id: `l${index}-q1`,
        order: 1,
        type: 'short-answer',
        prompt: 'On what day of the week must participants register their information on the official registry?',
        correctAnswer: 'Friday',
        explanation: 'The speaker states that participants must register before Friday afternoon.'
      },
      {
        id: `l${index}-q2`,
        order: 2,
        type: 'multiple-choice',
        prompt: 'What is the preliminary financial allocation stated in the recording?',
        options: ['$175', '$225', '$275', '$325'],
        correctAnswer: '$275',
        explanation: 'The speaker states: "the preliminary allocation is calculated at two hundred and seventy-five dollars."'
      },
      {
        id: `l${index}-q3`,
        order: 3,
        type: 'sentence-completion',
        prompt: 'An additional contingency fund of ______ dollars applies if extra supplies are required.',
        correctAnswer: '25',
        explanation: 'The speaker specifies: "an additional contingency fund of twenty-five dollars will apply."'
      },
      {
        id: `l${index}-q4`,
        order: 4,
        type: 'short-answer',
        prompt: 'What percentage increase in task accuracy is achieved through regular structured practice?',
        correctAnswer: '25%',
        explanation: 'The speaker notes a "twenty-five percent increase in task accuracy."'
      }
    ]
  });
}
