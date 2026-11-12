import { SpeakingTask } from '../types/ielts';

export const speakingTasksPart1: SpeakingTask[] = [
  {
    id: 'speak-1',
    part: 1,
    title: 'Hometown and Regional Geography',
    topicCategory: 'Personal Life & Origin',
    speakTimeSeconds: 180,
    questions: [
      'Where is your hometown located in Kazakhstan or your country?',
      'What do you like most about living in your hometown?',
      'Has your hometown changed significantly over the past ten years?',
      'Would you prefer to live in your hometown in the future or relocate abroad?'
    ],
    usefulPhrases: [
      'Nestled in the foothills of...',
      'A bustling metropolitan center with a rich historical tapestry',
      'Undergone massive infrastructural metamorphosis',
      'Offers an idyllic juxtaposition of urban vibrancy and nature'
    ],
    modelResponse: `I hail from Almaty, the historic cultural capital situated in southeastern Kazakhstan, nestled directly against the snow-capped foothills of the Zailiyskiy Alatau mountain range. What captivates me most is the unique juxtaposition of vibrant cosmopolitan urban life and immediate alpine wilderness. Within thirty minutes from the city center, you can be hiking through the Medeu gorge or skiing in Shymbulak. Over the past decade, the city has undergone remarkable infrastructural modernization, with extensive pedestrian boulevards, dedicated cycling corridors, and burgeoning tech hubs. While I relish international travel and plan to pursue tertiary studies overseas, Almaty will always remain my cherished emotional home.`
  },
  {
    id: 'speak-2',
    part: 2,
    title: 'Describe an Inspiring Environmental Project You Know About',
    topicCategory: 'Environment & Society',
    prepTimeSeconds: 60,
    speakTimeSeconds: 120,
    cueCardPoints: [
      'What the project is and where it is located',
      'Who is involved in organizing and funding it',
      'What specific ecological problems it addresses',
      'And explain why you consider this project particularly inspiring'
    ],
    usefulPhrases: [
      'An audacious conservation initiative aimed at...',
      'Reversed catastrophic desertification through...',
      'A collaborative endeavor between national authorities and local communities',
      'Testament to the resilience of human ecological restoration'
    ],
    modelResponse: `I would like to speak about the Northern Aral Sea Restoration Project, specifically the construction of the Kokaral Dike in southwestern Kazakhstan. Historically, the Aral Sea was the fourth-largest inland body of water in the world, but unsustainable agricultural water diversion during the mid-twentieth century led to one of the most catastrophic man-made ecological disasters in modern history, desiccating nearly ninety percent of the sea.

In 2005, the government of Kazakhstan, in partnership with the World Bank, constructed the thirteen-kilometer Kokaral Dam. The primary objective was to trap freshwater flowing from the Syr Darya river within the northern basin, preventing it from evaporating into the arid southern desert. 

The ecological outcomes have been nothing short of miraculous. Within just three years of completion, water levels in the Northern Aral Sea climbed by over four meters, salinity dropped by more than half, and native freshwater fish species—including pike-perch and carp—rebounded dramatically. Former fishing communities like Aralsk have witnessed the gradual revival of commercial fish processing, and local microclimates have softened, reducing toxic dust storms. 

I find this project immensely inspiring because it proves that ecological destruction is not irreversible. When scientific engineering, governmental commitment, and local community determination converge, nature can recover with astonishing vitality.`
  },
  {
    id: 'speak-3',
    part: 3,
    title: 'Environmental Responsibility and Global Policy Deliberation',
    topicCategory: 'Global Issues & Governance',
    speakTimeSeconds: 240,
    questions: [
      'Do you believe individual consumers or multinational corporations bear greater responsibility for reducing carbon emissions?',
      'How effective are international climate agreements in compelling sovereign nations to reduce fossil fuel dependency?',
      'What role should educational institutions play in cultivating environmental consciousness among young children?'
    ],
    usefulPhrases: [
      'A shared, reciprocal obligation where neither party can be absolved',
      'Corporate greenwashing vs systemic industrial decarbonization',
      'Enforceable multilateral compliance mechanisms',
      'Instilling environmental stewardship from formative early childhood'
    ],
    modelResponse: `Regarding responsibility, I believe the obligation is intrinsically reciprocal, though multinational corporations undeniably possess far greater systemic leverage. While individual consumer choices—such as utilizing mass transit and avoiding single-use plastics—are laudable, personal carbon footprints are fundamentally constrained by municipal infrastructure. Over seventy percent of global emissions originate from a mere hundred industrial conglomerates. Therefore, governments must implement stringent carbon taxation and regulatory quotas to force corporate decarbonization.

As for international climate accords, their efficacy is frequently undermined by the absence of legally binding enforcement mechanisms. While treaties like the Paris Agreement foster diplomatic consensus and set aspirational benchmarks, sovereign geopolitical priorities often take precedence during domestic economic crises. Without punitive trade tariffs or carbon border adjustments, compliance remains largely voluntary.

Finally, educational institutions are the single most pivotal incubator for long-term ecological consciousness. Integrating hands-on sustainability into primary school curricula—through school gardens, recycling audits, and outdoor science field trips—transforms environmental stewardship from an abstract ethical concept into an instinctual lifelong habit.`
  },
  {
    id: 'speak-4',
    part: 1,
    title: 'Daily Routine and Time Management',
    topicCategory: 'Lifestyle & Productivity',
    speakTimeSeconds: 180,
    questions: [
      'What is your favorite part of the day and why?',
      'Do you plan your daily schedule meticulously or prefer spontaneity?',
      'How has your daily routine changed compared to when you were younger?',
      'Do you find it difficult to maintain a consistent work-life balance?'
    ],
    usefulPhrases: [
      'The tranquil stillness of early morning hours',
      'A structured, disciplined time-blocking strategy',
      'Juggling rigorous academic preparation with personal wellness',
      'Carving out deliberate downtime away from digital screens'
    ],
    modelResponse: `Without hesitation, my favorite part of the day is the early morning, around 6:30 AM. In the tranquil stillness before the urban rush commences, I can enjoy a hot cup of tea, read several chapters of academic prose, and plan my priorities with absolute clarity. I tend to follow a disciplined time-blocking schedule because managing university coursework, IELTS preparation, and sports requires rigorous organization. Compared to my teenage years, when my schedule was largely dictated by school bells and parents, my current routine demands far greater self-regulation and intentionality.`
  },
  {
    id: 'speak-5',
    part: 2,
    title: 'Describe a Book or Piece of Literature That Left a Lasting Impression on You',
    topicCategory: 'Literature & Culture',
    prepTimeSeconds: 60,
    speakTimeSeconds: 120,
    cueCardPoints: [
      'What the book is and who wrote it',
      'What the main subject or philosophical theme is',
      'When and why you first read it',
      'And explain why this work of literature had such a profound impact on your thinking'
    ],
    usefulPhrases: [
      'A seminal literary masterpiece of philosophical introspection',
      'A profound meditation on moral rectitude, education, and human empathy',
      'Resonates with timeless, universal ethical truths',
      'Served as an intellectual compass during my formative adolescence'
    ],
    modelResponse: `I would like to speak about the celebrated philosophical masterpiece "The Book of Words" (Kara Sozder), penned by the preeminent Kazakh poet, philosopher, and social reformer Abai Qunanbaiuly in the late nineteenth century. 

Comprising forty-five short prose treatises or philosophical parables, the work explores the moral, educational, and cultural condition of human society. Abai critically examines the vices of intellectual complacency, vanity, and social apathy, while passionately advocating for universal literacy, philosophical inquiry, hard work, and deep cross-cultural dialogue. He famously urged his compatriots to learn foreign languages—especially English and European languages of science—arguing that acquiring other tongues unlocks the accumulated wisdom of human civilization without sacrificing one's cultural identity.

I first encountered this book during my secondary school years in Almaty. What resonated so deeply was Abai’s uncompromising intellectual honesty. Rather than indulging in romanticized nostalgia, he subjected human frailties to rigorous moral scrutiny, balancing incisive critique with profound, compassionate humanism. His central aphorism—that true human dignity is attained only through the synthesis of a warm heart, an enlightened intellect, and an unwavering moral will—has served as a lasting intellectual compass throughout my academic journey.`
  },
  {
    id: 'speak-6',
    part: 3,
    title: 'The Role of Literature and Humanities in the Modern Technological Era',
    topicCategory: 'Culture & Philosophy',
    speakTimeSeconds: 240,
    questions: [
      'Why do you think reading literature remains important in an age dominated by short-form digital media?',
      'Should public educational funding prioritize STEM subjects over classical literature and philosophy?',
      'How does exposure to global literature foster intercultural empathy?'
    ],
    usefulPhrases: [
      'Cultivating the capacity for sustained, deep cognitive contemplation',
      'A dangerous false dichotomy between technical acumen and ethical wisdom',
      'The definitive antidote to cognitive fragmentation and soundbite culture',
      'Enabling readers to inhabit alternative consciousnesses across historical epochs'
    ],
    modelResponse: `In our hyper-connected epoch characterized by algorithmic short-form media, reading classical literature is more vital than ever. Algorithms are engineered to fragment human attention into superficial ten-second dopamine bursts, eroding our capacity for deep, sustained contemplation. Engaging with a complex multi-layered novel demands imaginative immersion, training the brain to follow nuanced narrative arcs and decipher subtle subtext.

Furthermore, pitting STEM disciplines against the humanities is a dangerously short-sighted pedagogical error. While engineering and computer science provide the technical instruments to build tools like artificial intelligence and genetic editing, it is the humanities—philosophy, ethics, and literature—that teach us how to govern those tools responsibly. A society populated exclusively by technocrats lacking philosophical grounding risks inventing powerful technologies without ethical boundaries.

Finally, global literature is the supreme engine of human empathy. Reading translated masterpieces from diverse cultural traditions allows an individual to temporarily inhabit the internal consciousness of someone living in a completely different epoch or geography, dismantling xenophobic stereotypes and revealing our shared human vulnerability.`
  }
];

// Additional speaking tasks 7 to 18
const speakingTaskTitles1 = [
  { title: 'Technology and Social Media Habits in Daily Routine', part: 1 },
  { title: 'Describe a Historical Monument or Landmark You Visited', part: 2 },
  { title: 'Preservation of Historical Heritage vs Urban Modernization', part: 3 },
  { title: 'Food Traditions, Dining Customs, and Home Cooking', part: 1 },
  { title: 'Describe a Traditional Festival or Celebration in Your Country', part: 2 },
  { title: 'Cultural Identity and Globalization in Traditional Festivities', part: 3 },
  { title: 'Hobbies, Recreational Sports, and Creative Activities', part: 1 },
  { title: 'Describe a Challenging Academic Goal You Successfully Achieved', part: 2 },
  { title: 'Educational Ambition, Testing Pressures, and Mental Well-being', part: 3 },
  { title: 'Weather Patterns, Seasonal Changes, and Outdoor Pastimes', part: 1 },
  { title: 'Describe a Person Who Has Been a Significant Mentor in Your Life', part: 2 },
  { title: 'The Importance of Mentorship and Intergenerational Wisdom', part: 3 }
];

for (let i = 0; i < speakingTaskTitles1.length; i++) {
  const index = i + 7;
  const item = speakingTaskTitles1[i];
  speakingTasksPart1.push({
    id: `speak-${index}`,
    part: item.part as 1 | 2 | 3,
    title: item.title,
    topicCategory: 'Everyday Life & Society',
    prepTimeSeconds: item.part === 2 ? 60 : undefined,
    speakTimeSeconds: item.part === 1 ? 180 : item.part === 2 ? 120 : 240,
    questions: item.part !== 2 ? [
      `What are your thoughts on ${item.title.toLowerCase()}?`,
      `How has this aspect changed over recent decades in your region?`,
      `What advice would you offer to someone experiencing this for the first time?`
    ] : undefined,
    cueCardPoints: item.part === 2 ? [
      `What or who this topic describes`,
      `Where and when this occurred`,
      `Why it was memorable and impactful for you`
    ] : undefined,
    usefulPhrases: [
      'In my personal estimation and daily experience...',
      'A notable cultural transformation over recent years...',
      'Provides an instructive window into human social behavior...',
      'Crucial for sustaining holistic balance in modern life...'
    ],
    modelResponse: `In response to ${item.title.toLowerCase()}, I believe that modern living requires conscious reflection. Whether discussing everyday habits, communal festivities, or academic aspirations, maintaining authentic cultural roots while embracing international perspectives allows individuals to thrive. In Kazakhstan and globally, young scholars achieve success by combining disciplined hard work with active empathy.`
  });
}
