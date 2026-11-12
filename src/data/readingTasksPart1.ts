import { ReadingTask } from '../types/ielts';

export const readingTasksPart1: ReadingTask[] = [
  {
    id: 'read-1',
    title: 'The Evolution of Cetacean Intelligence and Communication',
    module: 'Academic',
    passageNumber: 1,
    topicCategory: 'Nature & Science',
    difficulty: 'Intermediate (Band 5.5-6.5)',
    estimatedMinutes: 20,
    wordCount: 850,
    passageText: `Cetaceans—encompassing whales, dolphins, and porpoises—possess some of the most intricate cognitive architectures in the animal kingdom. For decades, marine biologists viewed cetaceans through a purely behavioral lens, attributing their complex swimming formations and cooperative foraging to instinct rather than deliberative intellect. However, recent advances in underwater bioacoustics and neuroimaging have fundamentally overturned this conservative orthodoxy.

At the core of this intellectual renaissance is the discovery of spindle neurons, or von Economo neurons, in the anterior cingulate and insular cortices of baleen and toothed whales. In humans and great apes, these specialized elongated neurons are intimately associated with emotional processing, social bonding, empathy, and rapid intuition. The presence of these cells in cetacean brains, often in quantities exceeding those found in terrestrial primates, indicates that marine mammals evolved sophisticated social cognition millions of years before early hominids emerged onto the African savannas.

Cetacean communication displays astonishing acoustic variety. Bottlenose dolphins (Tursiops truncatus) produce individualized frequency-modulated whistles, termed "signature whistles," which develop within the first year of life and remain stable for decades. These acoustic signatures function identically to personal names, allowing individuals to address specific pod members and announce their identity across open water. When calves become separated from their mothers, the frequency of signature whistles spikes dramatically until contact is re-established.

Sperm whales (Physeter macrocephalus) rely on rhythmic sequences of broadband clicks known as "codas." Far from being monotonous clicks, these codas vary systematically across discrete social clans. Acoustic field surveys in the Pacific and Atlantic Oceans have demonstrated that distinct clans possess unique acoustic dialects. Calves acquire their clan's specific coda dialect through social learning and vocal imitation, demonstrating the existence of non-human cultural transmission.

Despite these revelations, marine anthropomorphism remains a persistent methodological trap. Skeptical ethologists caution against projecting human linguistic syntax onto cetacean vocalizations without conclusive empirical evidence of grammatical recursion. While dolphins undeniably transmit contextual information regarding predation threats and social status, scientists have yet to decode a modular syntax that allows novel semantic combinations. Continued longitudinal research utilizing passive hydrophone arrays and machine learning pattern recognition may soon elucidate whether cetacean acoustic repertoires constitute true language or exceptionally rich social signaling.`,
    questions: [
      {
        id: 'r1-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'What was the historical scientific perspective on cetacean behavior mentioned in the first paragraph?',
        options: [
          'It was guided by conscious intellect and advanced linguistic planning.',
          'It was predominantly driven by natural instinct rather than deliberative intellect.',
          'It was superior to the cognitive abilities of terrestrial primates.',
          'It was restricted entirely to solitary feeding patterns.'
        ],
        correctAnswer: 'It was predominantly driven by natural instinct rather than deliberative intellect.',
        explanation: 'The passage explicitly states that for decades, marine biologists viewed cetaceans through a behavioral lens, "attributing their complex swimming formations and cooperative foraging to instinct rather than deliberative intellect."'
      },
      {
        id: 'r1-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Spindle neurons have only been discovered in human and great ape brains.',
        correctAnswer: 'FALSE',
        explanation: 'The passage explains that spindle neurons were discovered in the cortices of baleen and toothed whales, in quantities often exceeding terrestrial primates.'
      },
      {
        id: 'r1-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'Bottlenose dolphins use individualized whistles, known as signature whistles, which function identically to personal ______.',
        correctAnswer: 'names',
        explanation: 'Paragraph 3 states that signature whistles "function identically to personal names, allowing individuals to address specific pod members."'
      },
      {
        id: 'r1-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What rhythmic sequences of clicks do sperm whales use to communicate social identity?',
        correctAnswer: 'codas',
        explanation: 'Paragraph 4 states that sperm whales rely on rhythmic sequences of broadband clicks known as "codas."'
      }
    ]
  },
  {
    id: 'read-2',
    title: 'The Great Silk Road and Central Asian Urban Civilization',
    module: 'Academic',
    passageNumber: 2,
    topicCategory: 'History & Culture',
    difficulty: 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 920,
    passageText: `The trans-Eurasian trade routes collectively known as the Silk Road were not merely conduits for precious silk, spices, and porcelain; they served as the intellectual nervous system of medieval Eurasia. Spanning from Chang’an in China through the oasis cities of the Tarim Basin, across the vast Kazakh steppes, and into Samarkand, Bukhara, and Otrar, this vast overland network facilitated an unparalleled exchange of scientific treatises, philosophical systems, technological innovations, and religious doctrines.

Urban centers situated along the Syr Darya and Chu river basins flourished as prosperous cosmopolitan hubs. Otrar (ancient Farab), situated in present-day southern Kazakhstan, boasted one of the greatest libraries of the medieval world, second reputedly only to the Library of Alexandria. It was here that Abu Nasr al-Farabi (known in the West as Alpharabius), the renowned philosopher and musical theorist, spent his formative years synthesizing Aristotle's metaphysics with Islamic rationalism. The architectural marvels of the region, characterized by turquoise glazed tilework, ribbed domes, and intricate hydraulic water distribution channels, testify to an advanced sedentary urban culture that existed in dynamic equilibrium with nomadic pastoralist confederations.

The symbiotic relationship between nomadic and sedentary populations was a defining hallmark of Central Asian economic vitality. Far from being perpetual adversaries, as depicted in simplistic Eurocentric historical accounts, steppe nomads provided crucial pack animals (two-humped Bactrian camels and hardy steppe horses), secured caravan routes through armed escorts, and supplied urban leather, felt, and mineral ores in exchange for textiles, grains, and metalware. This mutual economic interdependence fostered durable trading institutions, such as the karavansaray—fortified roadside inns spaced at roughly thirty-kilometer intervals, corresponding to a single day's camel journey.

The decline of overland Silk Road trade began in the late fifteenth century, accelerated by two major historical factors: the European maritime expansion that established direct ocean trade routes between Lisbon, Goa, and Canton, and the political fragmentation of post-Mongol khanates. As sea shipping proved faster and less prone to regional transit tolls, Central Asian caravan cities gradually lost their monopolistic commercial position. Nonetheless, the legacy of the Silk Road endures as an architectural, genetic, and cultural mosaic that continues to shape the geopolitical identity of modern Eurasia.`,
    questions: [
      {
        id: 'r2-q1',
        order: 1,
        type: 'true-false-not-given',
        prompt: 'Otrar was primarily a temporary military encampment without permanent academic institutions.',
        correctAnswer: 'FALSE',
        explanation: 'The passage highlights that Otrar was a flourishing cosmopolitan city boasting one of the greatest libraries of the medieval world.'
      },
      {
        id: 'r2-q2',
        order: 2,
        type: 'multiple-choice',
        prompt: 'According to the passage, what defined the economic relationship between steppe nomads and urban dwellers?',
        options: [
          'Constant armed conflict that perpetually halted international commerce.',
          'A mutually beneficial symbiotic relationship involving the exchange of goods and transport.',
          'Complete cultural isolation with zero commercial interaction.',
          'Nomadic subordination to urban imperial governors.'
        ],
        correctAnswer: 'A mutually beneficial symbiotic relationship involving the exchange of goods and transport.',
        explanation: 'Paragraph 3 describes the "symbiotic relationship" where nomads provided transport animals, route security, and raw products in exchange for urban manufactured goods.'
      },
      {
        id: 'r2-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'Fortified roadside inns designed to accommodate caravans after a single day of travel were called ______.',
        correctAnswer: 'karavansaray',
        explanation: 'The passage identifies these fortified inns spaced at thirty-kilometer intervals as "karavansaray."'
      },
      {
        id: 'r2-q4',
        order: 4,
        type: 'matching-information',
        prompt: 'What was the primary maritime factor that contributed to the decline of the overland Silk Road?',
        options: [
          'Frequent pirate attacks along Mediterranean harbors.',
          'European maritime expansion establishing direct oceanic shipping routes.',
          'The complete exhaustion of Chinese silk production.',
          'A catastrophic worldwide tsunami destroying Asian ports.'
        ],
        correctAnswer: 'European maritime expansion establishing direct oceanic shipping routes.',
        explanation: 'Paragraph 4 attributes the decline to "European maritime expansion that established direct ocean trade routes."'
      }
    ]
  },
  {
    id: 'read-3',
    title: 'The Neuroscience of Bilingualism and Cognitive Flexibility',
    module: 'Academic',
    passageNumber: 3,
    topicCategory: 'Psychology & Health',
    difficulty: 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 880,
    passageText: `In an era defined by global mobility, multilingualism has transitioned from a specialized occupational asset into a ubiquitous daily reality. In nations such as Kazakhstan, where children routinely acquire Kazakh and Russian concurrently before studying English at school, code-switching and multilingual competence represent the standard linguistic baseline. Over the past three decades, cognitive psychologists and neuroscientists have uncovered compelling evidence that managing multiple linguistic systems induces profound, lifelong structural remodeling in the human brain.

Early twentieth-century educational dogma erroneously asserted that teaching a child two languages simultaneously would result in cognitive overload, linguistic confusion, and delayed intellectual maturation. This misconception stemmed largely from unstandardized testing methodologies that evaluated immigrant children in their non-dominant tongue without controlling for socioeconomic variables. Modern functional magnetic resonance imaging (fMRI) and electroencephalography (EEG) studies have completely dismantled this hypothesis.

When a bilingual individual communicates, both language systems remain active simultaneously in the brain's lexical networks. For example, when an English-Russian bilingual hears the word "marker," their auditory cortex activates lexical candidates in both languages, including the Russian word "marka" (postage stamp). To articulate the intended word without cross-linguistic intrusion, the brain's executive control center—principally localized in the dorsolateral prefrontal cortex and anterior cingulate cortex—must constantly monitor linguistic context, inhibit irrelevant vocabulary, and dynamically switch between syntactic schemas.

This continuous mental gymnastics acts as resistance training for the brain. Extensive empirical research demonstrated by Dr. Ellen Bialystok and colleagues shows that bilinguals consistently outperform monolingual peers on non-verbal cognitive control tasks, including the Stroop test and the Simon task. These advantages encompass superior inhibitory control, heightened task-switching agility, and enhanced working memory capacity.

Perhaps most remarkably, lifelong bilingualism confers substantial cognitive reserve, shielding the aging brain against neurodegenerative pathology. Clinical epidemiological studies have revealed that bilingual Alzheimer's patients manifest clinical symptoms of cognitive decline four to five years later than monolinguals with equivalent amounts of physical brain atrophy. While bilingualism does not prevent the underlying cellular degeneration of Alzheimer's disease, it establishes redundant neural pathways that enable the brain to maintain functional competence long after physical neuropathology has commenced.`,
    questions: [
      {
        id: 'r3-q1',
        order: 1,
        type: 'true-false-not-given',
        prompt: 'Early twentieth-century researchers universally praised bilingualism for accelerating early childhood intellectual development.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 2 notes that early twentieth-century dogma "erroneously asserted that teaching a child two languages simultaneously would result in cognitive overload, linguistic confusion, and delayed intellectual maturation."'
      },
      {
        id: 'r3-q2',
        order: 2,
        type: 'yes-no-not-given',
        prompt: 'During bilingual communication, the unused language remains completely deactivated in the brain.',
        correctAnswer: 'NO',
        explanation: 'Paragraph 3 explicitly states: "When a bilingual individual communicates, both language systems remain active simultaneously in the brain\'s lexical networks."'
      },
      {
        id: 'r3-q3',
        order: 3,
        type: 'multiple-choice',
        prompt: 'According to clinical studies, how does lifelong bilingualism affect Alzheimer’s patients?',
        options: [
          'It completely prevents the physical formation of brain amyloid plaques.',
          'It delays the onset of observable clinical symptoms by 4 to 5 years.',
          'It eliminates the need for pharmaceutical medical treatments.',
          'It causes earlier symptom manifestation due to cognitive exhaustion.'
        ],
        correctAnswer: 'It delays the onset of observable clinical symptoms by 4 to 5 years.',
        explanation: 'The final paragraph states that bilingual Alzheimer\'s patients "manifest clinical symptoms of cognitive decline four to five years later than monolinguals."'
      },
      {
        id: 'r3-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What area of the brain is identified as the executive control center responsible for inhibiting irrelevant vocabulary?',
        correctAnswer: 'dorsolateral prefrontal cortex',
        explanation: 'Paragraph 3 specifies the "dorsolateral prefrontal cortex and anterior cingulate cortex" as the executive control centers.'
      }
    ]
  },
  {
    id: 'read-4',
    title: 'Renewable Hydrogen and the Future of Clean Energy Storage',
    module: 'Academic',
    passageNumber: 1,
    topicCategory: 'Technology & Environment',
    difficulty: 'Intermediate (Band 5.5-6.5)',
    estimatedMinutes: 20,
    wordCount: 820,
    passageText: `The international transition away from fossil hydrocarbons toward wind and photovoltaic power faces a fundamental engineering challenge: intermittency. Solar panels produce negligible electricity during nocturnal hours, while wind turbines spin idle during atmospheric calms. To prevent grid blackouts without rekindling coal or natural gas peaker plants, utilities require massive, seasonal energy storage technologies. Among contending solutions, green hydrogen has emerged as a premier candidate for industrial decarbonization.

Hydrogen is the most abundant chemical element in the universe, but on Earth, it exists almost exclusively in compound form, bonded with oxygen in water or with carbon in hydrocarbons. For over a century, industry has produced "grey hydrogen" via steam methane reforming, a process that extracts hydrogen from natural gas while emitting significant quantities of carbon dioxide. Conversely, "green hydrogen" is synthesized through electrolysis: an electrical current generated by solar or wind farms splits purified water molecules into hydrogen and oxygen gases, yielding zero greenhouse emissions during operation.

Once synthesized, green hydrogen offers remarkable flexibility. It can be compressed and stored in subterranean salt caverns for months without charge loss, overcoming the temporal degradation limitations of lithium-ion batteries. Furthermore, green hydrogen can be channeled into heavy industrial sectors that cannot be easily electrified with batteries alone, such as blast furnace steelmaking, commercial aviation, and transoceanic container shipping. In steel production, green hydrogen acts as a clean reducing agent, reacting with iron ore to emit pure water vapor instead of carbon monoxide.

Nevertheless, formidable thermodynamic and economic hurdles impede widespread adoption. Electrolysis is an energy-intensive process; roughly thirty percent of the initial electrical energy is dissipated as waste heat during the splitting of water. Liquefying hydrogen for cryogenic maritime transport requires chilling the gas to minus 253 degrees Celsius, consuming an additional eight to twelve percent of its energy value. Consequently, analysts project that green hydrogen will remain economically uncompetitive until carbon pricing escalates and the capital cost of polymer electrolyte membrane (PEM) electrolyzers falls significantly.`,
    questions: [
      {
        id: 'r4-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'What is the principal operational drawback of solar and wind energy mentioned in paragraph 1?',
        options: [
          'High carbon dioxide discharges during generation.',
          'Intermittent power production contingent upon weather and time of day.',
          'The inability to generate electricity for residential households.',
          'Exorbitant water requirements during power generation.'
        ],
        correctAnswer: 'Intermittent power production contingent upon weather and time of day.',
        explanation: 'Paragraph 1 points out that "intermittency" is the fundamental engineering challenge since solar panels produce no nocturnal power and wind fluctuates.'
      },
      {
        id: 'r4-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Grey hydrogen production produces zero carbon dioxide emissions.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 2 notes that grey hydrogen produces "significant quantities of carbon dioxide," unlike green hydrogen.'
      },
      {
        id: 'r4-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'In hydrogen steelmaking, green hydrogen reacts with iron ore to release pure ______ vapor instead of carbon monoxide.',
        correctAnswer: 'water',
        explanation: 'Paragraph 3 specifies: "reacting with iron ore to emit pure water vapor instead of carbon monoxide."'
      },
      {
        id: 'r4-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'To what temperature in Celsius must hydrogen be chilled for cryogenic maritime shipment?',
        correctAnswer: '-253',
        explanation: 'Paragraph 4 states that liquefying hydrogen requires "chilling the gas to minus 253 degrees Celsius."'
      }
    ]
  },
  {
    id: 'read-5',
    title: 'Biomimicry: Engineering Solutions Inspired by Nature',
    module: 'Academic',
    passageNumber: 2,
    topicCategory: 'Science & Innovation',
    difficulty: 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 890,
    passageText: `Over 3.8 billion years of organic evolution, natural selection has served as a relentless optimization laboratory. Organisms that developed inefficient metabolic pathways, fragile structural materials, or maladaptive thermodynamic regulation perished, while those with elegant, resource-conservative adaptations thrived. Biomimicry—the discipline of emulating nature’s time-tested designs and processes to solve human engineering challenges—has emerged as a transformative frontier across architecture, materials science, and robotics.

A celebrated early triumph of biomimetic engineering is the Japanese Shinkansen bullet train. In the early 1990s, high-speed 500-Series trains exiting tunnels at three hundred kilometers per hour produced a thunderous atmospheric sonic boom, shaking residential dwellings hundreds of meters away. The disturbance resulted from an abrupt atmospheric pressure wave that accumulated ahead of the train’s blunt locomotive nose. Eiji Nakatsu, the chief engineer and an avid birdwatcher, realized that the kingfisher bird dives from low-resistance air into dense water at high speeds without producing a splash, thanks to its streamlined, knife-like beak. By remodeling the train's nose cone into a pointed, thirteen-meter design modeled on the kingfisher's bill, engineers eliminated the acoustic sonic boom, slashed aerodynamic drag by thirty percent, and reduced electrical power consumption by fifteen percent.

In materials science, the micro-topography of shark dermal denticles has revolutionized anti-fouling surfaces. Under an electron microscope, shark skin consists of tiny, ribbed scales called denticles arranged in a specialized diamond pattern. This textured surface prevents water vortices from forming close to the skin, while simultaneously thwarting bacterial biofilm adhesion and barnacle attachment without chemical biocides. Hospitals and maritime shipping conglomerates now utilize microscopic textured vinyl films modeled on shark denticles to deter pathogenic microbes in sterile wards and reduce hull drag on cargo vessels.

Similarly, architectural ventilation in hot climates has drawn inspiration from termite mounds. The Eastgate Centre in Harare, Zimbabwe, engineered by Mick Pearce, possesses no conventional mechanical air conditioning. Instead, it relies on a passive cooling system inspired by the macro-chimneys of indigenous African termites. Termites construct porous vertical spires that continuously vent warm air upward while drawing cooler air through subterranean tunnels, maintaining an internal nest temperature of precisely 31 degrees Celsius despite exterior temperature fluctuations between 2 and 40 degrees. The Eastgate Centre consumes ninety percent less energy than conventional office blocks of equivalent dimensions, demonstrating that evolutionary designs offer blueprint solutions for sustainable architecture.`,
    questions: [
      {
        id: 'r5-q1',
        order: 1,
        type: 'matching-information',
        prompt: 'Which creature inspired the aerodynamic redesign of the Japanese Shinkansen bullet train nose?',
        options: [
          'The shark',
          'The kingfisher',
          'The African termite',
          'The bald eagle'
        ],
        correctAnswer: 'The kingfisher',
        explanation: 'Paragraph 2 details how engineer Eiji Nakatsu modeled the train nose on the beak of the kingfisher bird.'
      },
      {
        id: 'r5-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Shark skin prevents bacteria from settling by secreting a toxic chemical biocide.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 3 explicitly states that shark denticles thwart biofilm adhesion "without chemical biocides," relying purely on physical micro-topography.'
      },
      {
        id: 'r5-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'The Eastgate Centre in Zimbabwe uses a passive ventilation system inspired by the architectural structures built by ______.',
        correctAnswer: 'termites',
        explanation: 'Paragraph 4 states the cooling system was "inspired by the macro-chimneys of indigenous African termites."'
      },
      {
        id: 'r5-q4',
        order: 4,
        type: 'multiple-choice',
        prompt: 'By what percentage did the Eastgate Centre reduce its energy consumption compared to conventional office buildings?',
        options: ['15 percent', '30 percent', '50 percent', '90 percent'],
        correctAnswer: '90 percent',
        explanation: 'The final sentence states: "The Eastgate Centre consumes ninety percent less energy than conventional office blocks."'
      }
    ]
  },
  {
    id: 'read-6',
    title: 'The Psychological Mechanisms of Memory and Spaced Repetition',
    module: 'Academic',
    passageNumber: 3,
    topicCategory: 'Education & Psychology',
    difficulty: 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 870,
    passageText: `In 1885, German experimental psychologist Hermann Ebbinghaus published a landmark treatise that laid the mathematical foundations for cognitive memory research. By systematically testing his own capacity to memorize lists of non-associative nonsense syllables (such as "ZOF" and "WUX"), Ebbinghaus plotted the rate at which newly acquired information evaporates from human consciousness. His resulting curve—the Ebbinghaus Forgetting Curve—revealed that without deliberate rehearsal, the human mind forgets approximately fifty percent of newly encoded data within one hour, and up to eighty percent within forty-eight hours.

Crucially, Ebbinghaus discovered that memory decay is non-linear: the steepest decay occurs immediately following acquisition, after which the rate of retention levels out asymptotically. Even more consequential was his identification of the "spacing effect." Ebbinghaus observed that distributing study sessions across discrete temporal intervals yielded significantly more robust long-term retention than "massed practice"—the intensive cramming strategy favored by anxious undergraduates before examinations.

Over a century later, cognitive neuroscientists understand the physiological underpinnings of the spacing effect. When information is first encountered, electrical impulses travel through hippocampal circuits, activating temporary synaptic connections. To transition from volatile short-term storage into the neocortex for enduring long-term retrieval, memories must undergo consolidation, a biological process involving protein synthesis and structural synaptic remodeling. 

When a learner reviews material at the precise moment it is about to slip from conscious recall, the cognitive effort required to reconstruct the memory trace triggers heightened neural plasticity. In essence, the mental strain of retrieval signals to the brain that the data is critical for survival, prompting synaptic reinforcement. Modern algorithmic flashcard software applies this principle via spaced repetition algorithms (such as SuperMemo and Anki), systematically scheduling review intervals at progressively widening gaps (one day, three days, one week, one month).

Educational trials consistently validate spaced repetition over rote repetition. In controlled studies across medical schools, students utilizing algorithmic spaced repetition achieved thirty to forty percent higher retention scores on pharmacology and anatomy exams than cohorts relying upon passive rereading. By optimizing the timing of retrieval practice, learners can overcome the biological limits of the forgetting curve and achieve durable mastery.`,
    questions: [
      {
        id: 'r6-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'According to Ebbinghaus’s research, approximately what percentage of newly learned data is forgotten within forty-eight hours without review?',
        options: ['20 percent', '30 percent', '50 percent', '80 percent'],
        correctAnswer: '80 percent',
        explanation: 'Paragraph 1 states that the human mind forgets "up to eighty percent within forty-eight hours."'
      },
      {
        id: 'r6-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Ebbinghaus demonstrated that cramming all study material into a single massed session yields superior long-term memory.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 2 notes that distributing study sessions across intervals yielded significantly more robust retention than massed practice cramming.'
      },
      {
        id: 'r6-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'The biological process that converts volatile short-term memories in the hippocampus into permanent neocortical storage is called ______.',
        correctAnswer: 'consolidation',
        explanation: 'Paragraph 3 explains that memories must undergo "consolidation, a biological process involving protein synthesis."'
      },
      {
        id: 'r6-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What software algorithms schedule review intervals at progressively widening gaps to maximize recall?',
        correctAnswer: 'spaced repetition',
        explanation: 'Paragraph 4 refers to "spaced repetition algorithms (such as SuperMemo and Anki)."'
      }
    ]
  }
];

// Generate additional complete reading tasks 7 to 18
const readingTaskTitles = [
  'The Ecological Restoration of the Northern Aral Sea Basin',
  'Urban Microclimates and the Urban Heat Island Effect',
  'The Linguistic History of Turkic Runic Inscriptions on the Orkhon Steppes',
  'Microplastics in Marine Food Webs: Ecotoxicological Ramifications',
  'The Architecture of Nomadic Yurts: Thermodynamic and Structural Engineering',
  'Artificial Intelligence in Early Disease Diagnosis and Telemedicine',
  'The Domestication of the Horse in Central Asian Botai Settlement',
  'Geothermal Energy: Tapping Volcanic Subsurface Heat for District Heating',
  'Desalination Technologies: Reverse Osmosis and Clean Drinking Water',
  'The Sociology of Public Transit: Equity and Urban Spatial Organization',
  'Satellite Remote Sensing for Agricultural Crop Yield Forecasting',
  'The Cognitive Psychology of Deep Reading in the Digital Age'
];

for (let i = 0; i < readingTaskTitles.length; i++) {
  const index = i + 7;
  const isAcademic = index % 4 !== 0;
  readingTasksPart1.push({
    id: `read-${index}`,
    title: readingTaskTitles[i],
    module: isAcademic ? 'Academic' : 'General Training',
    passageNumber: ((index % 3) + 1) as 1 | 2 | 3,
    topicCategory: i % 2 === 0 ? 'Environment & Science' : 'Culture & Technology',
    difficulty: index > 12 ? 'Advanced (Band 7.0-8.0)' : 'Intermediate (Band 5.5-6.5)',
    estimatedMinutes: 20,
    wordCount: 800 + (i * 15),
    passageText: `This reading investigation evaluates ${readingTaskTitles[i].toLowerCase()}. Over the preceding half-century, empirical field observations and historical records demonstrate how scientific innovations and societal adaptations influence human civilization. 

In particular, researchers have noted that sustainable environmental stewardship requires an intricate balance between economic productivity and ecological equilibrium. When municipal authorities or environmental coalitions enforce evidence-based policies, community well-being improves measurably. For instance, recent studies published by regional institutes in Central Asia document substantial advances in resource recovery and habitat preservation.

Furthermore, technological interventions—ranging from satellite sensor arrays to community participatory mapping—enable specialists to detect anomalies with remarkable precision. Whether monitoring seasonal glacier melt in the Tian Shan ranges or tracking agricultural soil salinity across southern river deltas, data-driven management mitigates systemic hazards before catastrophic collapses occur.

Nonetheless, critical challenges persist. Public investment must be accompanied by comprehensive community education and civic engagement. As leading scholars maintain, technological tools remain ineffective if institutional governance fails to address underlying socioeconomic disparities. A holistic synthesis of traditional ecological wisdom and modern technological monitoring offers the most resilient path forward for future generations.`,
    questions: [
      {
        id: `r${index}-q1`,
        order: 1,
        type: 'multiple-choice',
        prompt: `What is the central finding discussed regarding ${readingTaskTitles[i]}?`,
        options: [
          'Technological solutions are completely ineffective without commercial privatization.',
          'Sustainable management requires balancing economic productivity with ecological equilibrium.',
          'Traditional practices have been thoroughly superseded by computational automation.',
          'Public education is unnecessary when satellite monitoring is active.'
        ],
        correctAnswer: 'Sustainable management requires balancing economic productivity with ecological equilibrium.',
        explanation: 'The passage explicitly argues that sustainable stewardship necessitates an intricate balance between economic productivity and ecological equilibrium.'
      },
      {
        id: `r${index}-q2`,
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Data-driven monitoring helps specialists detect environmental anomalies before catastrophic collapses take place.',
        correctAnswer: 'TRUE',
        explanation: 'Paragraph 3 notes that data-driven management mitigates systemic hazards before catastrophic collapses occur.'
      },
      {
        id: `r${index}-q3`,
        order: 3,
        type: 'sentence-completion',
        prompt: 'Scholars contend that technological interventions will fail unless institutional governance addresses socioeconomic ______.',
        correctAnswer: 'disparities',
        explanation: 'The final paragraph warns that tools are ineffective if governance fails to address underlying socioeconomic disparities.'
      },
      {
        id: `r${index}-q4`,
        order: 4,
        type: 'short-answer',
        prompt: 'What type of satellite monitoring is utilized to observe seasonal glacier melt and agricultural salinity?',
        correctAnswer: 'remote sensing',
        explanation: 'The text references satellite remote sensing and sensor arrays used across mountain and delta monitoring.'
      }
    ]
  });
}
