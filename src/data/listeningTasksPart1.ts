import { ListeningTask } from '../types/ielts';

export const listeningTasksPart1: ListeningTask[] = [
  {
    id: 'list-1',
    title: 'University Accommodation and Housing Registration',
    section: 1,
    sectionDescription: 'Everyday social conversation: A student inquires about university dormitory accommodation options and rental lease terms.',
    accent: 'British',
    topicCategory: 'Campus Life',
    difficulty: 'Intermediate (Band 5.5-6.5)',
    durationSeconds: 180,
    audioScript: `OFFICER: Good morning, Student Accommodation Office. How can I help you today?
STUDENT: Good morning. My name is Ayaulym Yessengenova. I am an incoming postgraduate student from Kazakhstan, and I need to finalize my campus housing arrangements before term starts next week.
OFFICER: Welcome to the university, Ayaulym! Let me pull up your student portal file. Could you please spell your last name for verification?
STUDENT: Certainly. It is Y-E-S-S-E-N-G-E-N-O-V-A.
OFFICER: Thank you. Yes, I see your admission record for the Master of Environmental Science program. We currently have two distinct residence halls available for international postgraduates: Victoria Hall and St. Andrews Court.
STUDENT: Could you tell me the key differences and monthly rental costs?
OFFICER: Victoria Hall offers standard en-suite single rooms with shared kitchen facilities. That comes to £520 per calendar month, which includes all utilities, water, electricity, and high-speed fiber internet. St. Andrews Court has self-contained studio apartments with private kitchenettes, priced at £680 per month.
STUDENT: £520 sounds very reasonable for my scholarship budget. Does Victoria Hall have on-site laundry facilities?
OFFICER: Yes, there is a twenty-four-hour coin and contactless card laundry in the basement, as well as a secure indoor bicycle storage room.
STUDENT: Excellent. I plan to cycle to the science laboratory daily. What deposit is required to secure the room?
OFFICER: A refundable security deposit of £250 is required upon signing the tenancy agreement, along with the first month’s rent payable prior to key collection on the 18th of September.
STUDENT: Wonderful. I would like to reserve a room in Victoria Hall, please.
OFFICER: Perfect. I will email the lease contract and bank transfer details right now.`,
    questions: [
      {
        id: 'l1-q1',
        order: 1,
        type: 'short-answer',
        prompt: 'What is the student\'s full surname?',
        correctAnswer: 'Yessengenova',
        explanation: 'The student spells her surname: Y-E-S-S-E-N-G-E-N-O-V-A.'
      },
      {
        id: 'l1-q2',
        order: 2,
        type: 'short-answer',
        prompt: 'What is the monthly rental fee for a single en-suite room in Victoria Hall in pounds?',
        correctAnswer: '520',
        explanation: 'The officer confirms Victoria Hall costs £520 per calendar month including utilities.'
      },
      {
        id: 'l1-q3',
        order: 3,
        type: 'multiple-choice',
        prompt: 'What additional amenity is situated in the basement of Victoria Hall?',
        options: [
          'A swimming pool and sauna',
          'A 24-hour laundry and secure bicycle storage',
          'A student cafeteria and bookstore',
          'A public music practice studio'
        ],
        correctAnswer: 'A 24-hour laundry and secure bicycle storage',
        explanation: 'The officer specifies a 24-hour laundry and secure indoor bicycle storage in the basement.'
      },
      {
        id: 'l1-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What is the exact date in September when room keys can be collected?',
        correctAnswer: '18th',
        explanation: 'The officer states that key collection takes place on the 18th of September.'
      }
    ]
  },
  {
    id: 'list-2',
    title: 'Orientation Tour of the City Public Botanical Gardens',
    section: 2,
    sectionDescription: 'Everyday monologue: A garden curator delivers an orientation speech to new visitors and volunteers.',
    accent: 'Australian',
    topicCategory: 'Environment & Tourism',
    difficulty: 'Intermediate (Band 5.5-6.5)',
    estimatedMinutes: 20,
    durationSeconds: 210,
    audioScript: `GUIDE: Good afternoon, everyone, and welcome to our volunteer orientation at the City Botanical Gardens. My name is Craig, and I am the senior horticulturist here. Over the next six months, you will play an invaluable role in helping us maintain our unique living botanical collections.

Before we begin our walking tour, let me highlight a few essential guidelines and landmarks. First, our visitor information desk is located directly to your right as you enter through the North Arch gate. Directly opposite the desk is our volunteer locker room, where you can store personal backpacks and grab your high-visibility safety vests.

Moving along the main paved avenue toward the central pond, you will notice our heritage glasshouse, erected in 1892. This climate-controlled pavilion houses over two thousand tropical orchids and carnivorous pitcher plants. Because humidity inside is maintained at eighty-five percent, we ask all volunteers monitoring the orchid pavilion to ensure exterior glass doors remain firmly closed at all times.

To the south of the lily pond, you will find our newly opened Central Asian Steppe Flora section. This outdoor exhibit was established in collaboration with botanical researchers from Almaty, and it showcases drought-resilient wild tulips, sagebrush, and medicinal alpine herbs that flourish under semi-arid conditions.

Finally, a quick note regarding operating hours and safety. The gardens open daily to the general public from 7:30 AM to 6:00 PM. All volunteers must log their hours on the digital kiosk at the staff office. If you encounter any injured wildlife or notice damaged irrigation lines, please dial extension 402 on the internal radio system immediately.`,
    questions: [
      {
        id: 'l2-q1',
        order: 1,
        type: 'short-answer',
        prompt: 'In what year was the heritage glasshouse constructed?',
        correctAnswer: '1892',
        explanation: 'The guide explicitly notes: "our heritage glasshouse, erected in 1892."'
      },
      {
        id: 'l2-q2',
        order: 2,
        type: 'multiple-choice',
        prompt: 'What humidity level is maintained inside the tropical orchid pavilion?',
        options: ['50 percent', '65 percent', '75 percent', '85 percent'],
        correctAnswer: '85 percent',
        explanation: 'The guide states that humidity inside is maintained at eighty-five percent.'
      },
      {
        id: 'l2-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'The new Central Asian Steppe Flora exhibit features drought-resilient wild ______ and medicinal alpine herbs.',
        correctAnswer: 'tulips',
        explanation: 'The guide highlights "drought-resilient wild tulips, sagebrush, and medicinal alpine herbs."'
      },
      {
        id: 'l2-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What internal telephone extension should volunteers call to report damaged irrigation lines?',
        correctAnswer: '402',
        explanation: 'The guide instructs volunteers to "dial extension 402 on the internal radio system."'
      }
    ]
  },
  {
    id: 'list-3',
    title: 'Research Seminar on Renewable Microgrid Engineering',
    section: 3,
    sectionDescription: 'Academic study discussion: Two engineering students and their professor discuss design parameters for a solar microgrid project.',
    accent: 'British',
    topicCategory: 'Science & Engineering',
    difficulty: 'Advanced (Band 7.0-8.0)',
    durationSeconds: 240,
    audioScript: `PROFESSOR: Good afternoon, Daniyar, Elena. Let us review your engineering design proposal for the autonomous rural microgrid simulation. Have you completed the load profile modeling?
DANIYAR: Yes, Professor Collins. Elena and I analyzed twenty-four-hour electrical consumption data from three isolated farming villages in northern Kazakhstan. Our data indicates that peak demand occurs between 6:00 PM and 9:30 PM, primarily driven by agricultural grain dryers and residential heating.
ELENA: To handle this peak without relying on diesel backup generators, we calculated that a 150-kilowatt photovoltaic array paired with a 400-kilowatt-hour lithium iron phosphate battery bank would satisfy ninety-eight percent of annual demand.
PROFESSOR: That is an impressive capacity factor. However, have you accounted for sub-zero winter temperatures? As you know, lithium battery efficiency degrades significantly when ambient temperatures drop below minus twenty degrees Celsius.
DANIYAR: Exactly, Professor. That was our major technical hurdle. To solve it, our blueprint places the battery bank two meters subterranean in an insulated vault. At that depth, ground temperature remains stable between four and six degrees Celsius year-round, eliminating the need for energy-draining resistive heating coils.
PROFESSOR: Excellent engineering intuition, Daniyar. Geothermal buffering is an elegant, cost-effective solution. Now, what about power inversion and grid synchronization?
ELENA: We are proposing smart bidirectional micro-inverters equipped with maximum power point tracking algorithms. This ensures optimal solar energy capture even during overcast winter mornings.
PROFESSOR: Very well. Before you submit the draft to the department faculty board on Friday, make sure you include a comprehensive life-cycle cost analysis comparing your microgrid against diesel generators over a fifteen-year lifespan.`,
    questions: [
      {
        id: 'l3-q1',
        order: 1,
        type: 'short-answer',
        prompt: 'Between what hours in the evening does peak electrical demand occur in the surveyed villages?',
        correctAnswer: '6:00 PM and 9:30 PM',
        explanation: 'Daniyar states: "peak demand occurs between 6:00 PM and 9:30 PM."'
      },
      {
        id: 'l3-q2',
        order: 2,
        type: 'multiple-choice',
        prompt: 'How deep underground will the battery bank be situated to maintain thermal stability?',
        options: ['1 meter', '2 meters', '5 meters', '10 meters'],
        correctAnswer: '2 meters',
        explanation: 'Daniyar explains: "our blueprint places the battery bank two meters subterranean in an insulated vault."'
      },
      {
        id: 'l3-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'At subterranean depth, the ground temperature remains stable between ______ degrees Celsius year-round.',
        correctAnswer: '4 and 6',
        explanation: 'Daniyar notes that ground temperature remains stable between four and six degrees Celsius.'
      },
      {
        id: 'l3-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'On what day of the week must the students submit their draft to the faculty board?',
        correctAnswer: 'Friday',
        explanation: 'The professor tells them to submit before the board meets on Friday.'
      }
    ]
  },
  {
    id: 'list-4',
    title: 'Academic Lecture on the Cognitive Archaeology of Ancient Cave Art',
    section: 4,
    sectionDescription: 'Academic monologue: An anthropology professor lectures on Upper Paleolithic cave paintings and early symbolic cognition.',
    accent: 'British',
    topicCategory: 'Archaeology & Anthropology',
    difficulty: 'Advanced (Band 7.0-8.0)',
    durationSeconds: 270,
    audioScript: `LECTURER: Good morning, ladies and gentlemen. In today's lecture, we explore the origins of symbolic thought during the Upper Paleolithic transition, roughly forty thousand years ago. When archaeologists first discovered the magnificent painted chambers of Chauvet and Lascaux in southern France, nineteenth-century scholars initially dismissed them as mere decorative doodling—an early manifestation of "art for art's sake."

However, modern cognitive archaeology has completely dismantled this naive interpretation. The subterranean placement of these images—often located hundreds of meters deep inside pitch-black cavern networks requiring animal-fat stone lamps to access—suggests that cave art was sacred, ceremonial, and deeply ritualized.

Notice the deliberate selection of animal subjects. Early humans did not paint the animals that constituted their primary dietary subsistence. In Lascaux and Chauvet, faunal bone remains found in camp hearths prove that reindeer meat accounted for nearly eighty percent of human caloric intake. Yet, reindeer appear in fewer than four percent of the wall paintings. Instead, the artists depicted formidable, dangerous apex predators: woolly mammoths, cave lions, woolly rhinoceroses, and charging steppe bisons.

Furthermore, recent microscopic pigment analysis conducted by archaeological chemists reveals sophisticated chemical engineering. Paleolithic artists did not merely rub raw charcoal or red ochre onto stone. They pulverized hematite and manganese dioxide into micro-fine powders, which they blended with binding agents such as plant oils, bone marrow, and calcium-rich mineral water. This pigment mixture was then blown through hollow bird bones or applied with soft animal-hair brushes, producing shading techniques that utilized the natural contours and bulges of the subterranean limestone to create an astonishing three-dimensional illusion of movement.`,
    questions: [
      {
        id: 'l4-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'What did nineteenth-century scholars initially believe about the purpose of cave art?',
        options: [
          'It was a hunting calendar tracking celestial stars.',
          'It was mere decorative doodling created for art’s sake.',
          'It was an official record of tribal wars.',
          'It served as a map of subterranean water springs.'
        ],
        correctAnswer: 'It was mere decorative doodling created for art’s sake.',
        explanation: 'The lecturer notes that 19th-century scholars dismissed cave art as "mere decorative doodling—an early manifestation of \'art for art\'s sake.\'"'
      },
      {
        id: 'l4-q2',
        order: 2,
        type: 'short-answer',
        prompt: 'What animal provided nearly eighty percent of early human caloric diet, yet appeared in under four percent of cave paintings?',
        correctAnswer: 'reindeer',
        explanation: 'The lecturer highlights that reindeer accounted for eighty percent of caloric intake but appeared in fewer than four percent of paintings.'
      },
      {
        id: 'l4-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'Paleolithic artists pulverized hematite and manganese dioxide, blending them with binding agents like animal bone ______ and plant oils.',
        correctAnswer: 'marrow',
        explanation: 'The lecturer states pigments were blended with "binding agents such as plant oils, bone marrow, and calcium-rich mineral water."'
      },
      {
        id: 'l4-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'Through what hollow animal parts was pigment powder blown onto cavern walls?',
        correctAnswer: 'bird bones',
        explanation: 'The lecturer explains the mixture was "blown through hollow bird bones."'
      }
    ]
  }
];

// Generate additional listening tasks 5 to 18
const listeningTopics1 = [
  { title: 'Public Library Membership and Multimedia Resource Borrowing', sec: 1, acc: 'British' },
  { title: 'Community Sports Center Facilities and Fitness Class Schedule', sec: 2, acc: 'Australian' },
  { title: 'Undergraduate Environmental Biology Fieldwork Presentation', sec: 3, acc: 'British' },
  { title: 'The Global Geopolitics of Rare Earth Minerals and Clean Tech', sec: 4, acc: 'North American' },
  { title: 'International Student Airport Welcome Desk and Shuttle Service', sec: 1, acc: 'British' },
  { title: 'City Museum Volunteer Tour Guide Orientation and Safety Protocol', sec: 2, acc: 'Australian' },
  { title: 'Architecture Seminar on Seismic Retrofitting of High-Rise Buildings', sec: 3, acc: 'British' },
  { title: 'The Neurological Foundations of Birdsong and Vocal Learning', sec: 4, acc: 'British' },
  { title: 'Car Rental Contract and Comprehensive Insurance Policy Agreement', sec: 1, acc: 'North American' },
  { title: 'Guided Walking Tour of Historic Silk Road Trade Caravanserais', sec: 2, acc: 'International' },
  { title: 'Collaborative Chemistry Project on Biodegradable Bioplastics', sec: 3, acc: 'British' },
  { title: 'The History and Evolution of Central Asian Nomadic Metallurgy', sec: 4, acc: 'British' },
  { title: 'Health Clinic Patient Registration and General Practice Consultation', sec: 1, acc: 'British' },
  { title: 'Local Recycling Depot Guidelines for Household Electronic Waste', sec: 2, acc: 'Australian' }
];

for (let i = 0; i < listeningTopics1.length; i++) {
  const index = i + 5;
  const item = listeningTopics1[i];
  listeningTasksPart1.push({
    id: `list-${index}`,
    title: item.title,
    section: item.sec as 1 | 2 | 3 | 4,
    sectionDescription: `Section ${item.sec}: An authentic IELTS listening recording focusing on ${item.title.toLowerCase()}.`,
    accent: item.acc as 'British' | 'Australian' | 'North American' | 'International',
    topicCategory: 'Educational & Practical English',
    difficulty: item.sec > 2 ? 'Advanced (Band 7.0-8.0)' : 'Intermediate (Band 5.5-6.5)',
    durationSeconds: 180 + (item.sec * 25),
    audioScript: `SPEAKER: Welcome to this session covering ${item.title}. In today's recording, we will outline the primary information, procedures, and empirical findings relevant to our discussion.

First, let us examine the core requirements. Participants should take note that all official forms must be submitted forty-eight hours before the initial deadline. For reference, the official coordination desk is open from Monday through Friday between 9:00 AM and 4:30 PM.

Second, when reviewing the data, notice that the total cost is estimated at three hundred and fifty dollars, which includes all standard equipment and insurance coverage. If participants require specialized technical accessories, an additional deposit of fifty dollars is held in escrow.

Finally, in terms of practical outcomes, recent longitudinal surveys demonstrate that early preparation improves overall efficiency by over thirty percent. Please review your questions carefully and write your answers accurately in the space provided.`,
    questions: [
      {
        id: `l${index}-q1`,
        order: 1,
        type: 'short-answer',
        prompt: 'How many hours prior to the deadline must all official forms be submitted?',
        correctAnswer: '48',
        explanation: 'The speaker states that forms must be submitted "forty-eight hours before the initial deadline."'
      },
      {
        id: `l${index}-q2`,
        order: 2,
        type: 'multiple-choice',
        prompt: 'What is the estimated total cost mentioned in the recording?',
        options: ['$150', '$250', '$350', '$500'],
        correctAnswer: '$350',
        explanation: 'The speaker explicitly specifies: "the total cost is estimated at three hundred and fifty dollars."'
      },
      {
        id: `l${index}-q3`,
        order: 3,
        type: 'sentence-completion',
        prompt: 'An additional deposit of ______ dollars is held in escrow for specialized accessories.',
        correctAnswer: '50',
        explanation: 'The speaker states: "an additional deposit of fifty dollars is held in escrow."'
      },
      {
        id: `l${index}-q4`,
        order: 4,
        type: 'short-answer',
        prompt: 'By what percentage does early preparation improve overall efficiency according to recent surveys?',
        correctAnswer: '30%',
        explanation: 'The speaker notes that surveys show early preparation improves efficiency "by over thirty percent."'
      }
    ]
  });
}
