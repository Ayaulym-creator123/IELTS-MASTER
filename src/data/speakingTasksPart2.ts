import { SpeakingTask } from '../types/ielts';

export const speakingTasksPart2: SpeakingTask[] = [
  {
    id: 'speak-19',
    part: 1,
    title: 'Public Transportation and Urban Commuting',
    topicCategory: 'Urban Life & Travel',
    speakTimeSeconds: 180,
    questions: [
      'What type of public transit do you most frequently utilize in your city?',
      'Do you think public transportation in your country is punctual and comfortable?',
      'How could the municipal government encourage more citizens to abandon private cars?',
      'Do you prefer traveling by subway, bus, or bicycle when commuting?'
    ],
    usefulPhrases: [
      'An efficient subterranean metro transit system',
      'Punctual scheduling with minimal headway delays',
      'Dedicated bus rapid transit (BRT) express corridors',
      'Pedestrian-friendly and zero-emission cycling avenues'
    ],
    modelResponse: `In Almaty, I predominantly rely on the subway system and the municipal bus network. The Almaty Metro is exceptionally clean, architecturally adorned with traditional Kazakh motifs, and virtually immune to traffic gridlock. However, during evening peak hours, suburban feeder buses can become somewhat congested. To incentivize citizens to leave private automobiles at home, the city administration should expand bus rapid transit corridors, subsidize student monthly travel passes, and construct sheltered bicycle park-and-ride hubs at suburban metro stations.`
  },
  {
    id: 'speak-20',
    part: 2,
    title: 'Describe an Impressive Piece of Modern Architecture You Admire',
    topicCategory: 'Architecture & Design',
    prepTimeSeconds: 60,
    speakTimeSeconds: 120,
    cueCardPoints: [
      'What the building is and where it is located',
      'What the architectural design and structural materials are',
      'What purpose the building serves for the public',
      'And explain why you find this architectural achievement remarkable'
    ],
    usefulPhrases: [
      'A striking triumph of parametric structural engineering',
      'The largest spherical building in the world',
      'Seamlessly fuses aerodynamic aesthetics with photovoltaic glass',
      'Stands as an iconic emblem of clean technological innovation'
    ],
    modelResponse: `I would like to speak about Nur Alem, the Future Energy Museum situated in Astana, Kazakhstan. Erected as the centerpiece pavilion for the EXPO-2017 international exhibition, it holds the official distinction of being the world’s largest spherical glass structure, boasting a diameter of eighty meters and a height equivalent to a thirty-story tower.

The architectural design, conceived by Adrian Smith and Gordon Gill, is a masterpiece of sustainable engineering. The sphere is clad entirely in double-curved laminated architectural glass, engineered to withstand extreme continental temperature swings ranging from minus forty degrees Celsius in winter to plus forty in summer. Embedded within its aerodynamic shell are integrated wind turbines and solar photovoltaic panels that generate clean electricity on site.

Internally, the eight-tiered sphere functions as an interactive educational museum dedicated to renewable energy sources—space energy, solar, wind, biomass, kinetic, and water. Visitors ascend by high-speed glass elevators to the glass observation skywalk at the apex before winding down through immersive interactive exhibits. What fascinates me most is how the building combines bold futuristic geometry with practical ecological stewardship, proving that visionary architecture can be both visually breathtaking and carbon-conscious.`
  }
];

const titlesPart2Speaking = [
  { title: 'The Architectural Heritage and Urban Landscape of Cities', part: 3 },
  { title: 'Art, Painting, and Aesthetic Appreciation in Modern Life', part: 1 },
  { title: 'Describe a Memorable Journey or Expedition Across Nature', part: 2 },
  { title: 'Ecotourism, Wilderness Conservation, and Sustainable Travel', part: 3 },
  { title: 'Music Preferences, Traditional Instruments, and Concerts', part: 1 },
  { title: 'Describe a Technological Device That Changed Your Study Routine', part: 2 },
  { title: 'Digital Automation, Screen Time, and Human Social Connection', part: 3 },
  { title: 'Sporting Traditions, Athletics, and National Tournaments', part: 1 },
  { title: 'Describe an International Cultural Exchange You Participated In', part: 2 },
  { title: 'Intercultural Diplomacy, Language Learning, and Global Harmony', part: 3 },
  { title: 'Shopping Habits, Sustainable Consumerism, and Online Retail', part: 1 },
  { title: 'Describe an Inspiring Entrepreneur or Innovator from Your Region', part: 2 },
  { title: 'Economic Innovation, Startup Culture, and Ethical Commerce', part: 3 },
  { title: 'Volunteering, Civic Charity, and Community Service', part: 1 },
  { title: 'Describe an Unforgettable Celebration with Family and Relatives', part: 2 },
  { title: 'Family Structures, Societal Aging, and Intergenerational Care', part: 3 }
];

for (let n = 0; n < titlesPart2Speaking.length; n++) {
  const index = n + 21;
  const item = titlesPart2Speaking[n];
  speakingTasksPart2.push({
    id: `speak-${index}`,
    part: item.part as 1 | 2 | 3,
    title: item.title,
    topicCategory: 'Global Issues & Personal Culture',
    prepTimeSeconds: item.part === 2 ? 60 : undefined,
    speakTimeSeconds: item.part === 1 ? 180 : item.part === 2 ? 120 : 240,
    questions: item.part !== 2 ? [
      `What are your thoughts on ${item.title.toLowerCase()}?`,
      `How does this influence broader societal interactions today?`,
      `In what ways might this evolve over the coming decade?`
    ] : undefined,
    cueCardPoints: item.part === 2 ? [
      `Who or what this event/journey involves`,
      `Where and when this took place`,
      `Why it left such an indelible impression on your perspective`
    ] : undefined,
    usefulPhrases: [
      'From a sociological and personal standpoint...',
      'An illustrative example of modern cultural dynamics...',
      'Fosters profound intercultural understanding and empathy...',
      'Essential for maintaining communal harmony and progress...'
    ],
    modelResponse: `Reflecting upon ${item.title.toLowerCase()}, I believe that modern development requires balance between tradition and technological progress. In Kazakhstan and internationally, cultivating critical inquiry, linguistic eloquence, and cultural self-awareness empowers individuals to contribute meaningfully to global society.`
  });
}
