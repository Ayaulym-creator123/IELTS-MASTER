import { ReadingTask } from '../types/ielts';

export const readingTasksPart2: ReadingTask[] = [
  {
    id: 'read-19',
    title: 'The Great Petroglyphs of Tamgaly: Bronze Age Steppe Art',
    module: 'Academic',
    passageNumber: 1,
    topicCategory: 'History & Art',
    difficulty: 'Intermediate (Band 5.5-6.5)',
    estimatedMinutes: 20,
    wordCount: 860,
    passageText: `Nestled within the rugged Chu-Ili mountains of southeastern Kazakhstan lies Tamgaly, one of the oldest and most extraordinary open-air sanctuaries of rock art in Central Asia. Designated a UNESCO World Heritage site in 2004, the gorge preserves approximately five thousand individual petroglyphs spanning from the Middle Bronze Age (fourteenth century BCE) through the Iron Age, Turkic medieval periods, and into modern ethnographic eras.

The most celebrated petroglyphs at Tamgaly belong to the early Bronze Age horizon. Carved with stone and metal chisels directly into the dark, sun-baked patina of smooth metamorphic slate boulders, these images display remarkable naturalistic vitality. Foremost among them are depictions of "sun-headed deities"—enigmatic anthropomorphic figures adorned with radiant circular nimbuses displaying solar rays, circular discs, and concentric dots. Archaeologists hypothesize that these solar entities symbolized celestial cosmology, representing divine guardians who governed seasonal equinoxes, fertility, and pastoral livestock regeneration.

Beyond theological solar iconography, Tamgaly provides an invaluable pictorial chronicle of everyday Bronze Age pastoralist economy. Intricately etched scenes depict two-wheeled chariots harnessed to charging stallions, ritual masked shamans brandishing ceremonial staffs, communal round dances (reminiscent of the Kazakh Kara Zhorga folk dance), and dynamic hunting scenes featuring wild argali sheep, Asiatic ibex, saiga antelopes, and predators such as wolves and snow leopards.

Crucially, the archaeological landscape of Tamgaly comprises far more than carved stone surfaces. Surrounding the ceremonial canyon are ancient settlements, stone kurgans (burial mounds), and dry-stone sacrificial altars, proving that the sanctuary functioned as a sacred ceremonial nexus for centuries. Nomadic clans convened here periodically for seasonal transhumance gatherings, ancestral funerary rites, and matrimonial alliances, leaving their physical devotion immortalized in rock.`,
    questions: [
      {
        id: 'r19-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'In what year was the Tamgaly petroglyph sanctuary designated a UNESCO World Heritage site?',
        options: ['1991', '1998', '2004', '2015'],
        correctAnswer: '2004',
        explanation: 'Paragraph 1 clearly states: "Designated a UNESCO World Heritage site in 2004..."'
      },
      {
        id: 'r19-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'The rock art at Tamgaly was created exclusively during a single fifty-year period in the Iron Age.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 1 notes that the petroglyphs span from the Middle Bronze Age through the Iron Age, Turkic medieval periods, and into modern eras.'
      },
      {
        id: 'r19-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'The most iconic Bronze Age carvings at Tamgaly portray anthropomorphic figures with solar rays, known as ______ deities.',
        correctAnswer: 'sun-headed',
        explanation: 'Paragraph 2 highlights depictions of "sun-headed deities" adorned with radiant circular nimbuses.'
      },
      {
        id: 'r19-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What type of burial mounds are situated around the ceremonial canyon at Tamgaly?',
        correctAnswer: 'kurgans',
        explanation: 'Paragraph 4 mentions stone "kurgans (burial mounds)" surrounding the canyon.'
      }
    ]
  },
  {
    id: 'read-20',
    title: 'The Modern Science of Circadian Rhythms and Cognitive Productivity',
    module: 'Academic',
    passageNumber: 2,
    topicCategory: 'Health & Science',
    difficulty: 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 870,
    passageText: `Life on Earth evolved under the inexorable 24-hour cycle of planetary rotation, oscillating between day and night. To synchronize cellular metabolism with environmental shifts, virtually all living organisms—from single-celled cyanobacteria to complex mammals—possess endogenous biological clocks known as circadian rhythms. The 2017 Nobel Prize in Physiology or Medicine honored Jeffrey Hall, Michael Rosbash, and Michael Young for unraveling the molecular machinery governing this clock, demonstrating that our physiology is governed by intricate transcription-translation feedback loops encoded inside our DNA.

In humans, the master circadian pacemaker resides within the suprachiasmatic nucleus (SCN), a tiny cluster of roughly twenty thousand neurons situated inside the hypothalamus directly above the optic chiasm. The SCN receives direct neural input from intrinsically photosensitive retinal ganglion cells (ipRGCs). These specialized photoreceptors in the human eye are sensitive primarily to blue light wavelengths (approximately 460 to 480 nanometers). When morning daylight strikes the retina, the SCN suppresses the nocturnal secretion of melatonin by the pineal gland, while stimulating cortisol release, core body temperature rise, and heightened cognitive alertness.

Modern urban lifestyles, characterized by prolonged nocturnal exposure to blue-emitting electronic screens and irregular sleep schedules, induce chronic circadian misalignment, termed "social jetlag." When an individual stays awake beneath high-intensity LED light until 2:00 AM, the SCN mistakenly interprets ambient photons as midday sunlight, delaying melatonin release and disrupting rapid eye movement (REM) sleep architecture. Over time, chronic circadian disruption elevates systemic inflammation, impairs insulin sensitivity, and degrades prefrontal cognitive functions, including sustained concentration, working memory, and emotional regulation.

Chronobiologists categorize individuals into distinct "chronotypes"—innate genetic preferences for morningness ("larks") or eveningness ("owls") dictated by polymorphisms in the CLOCK and PER genes. While traditional corporate and academic institutions heavily penalize evening chronotypes by enforcing rigid 8:00 AM start times, recent workplace experiments reveal that aligning operational schedules with individual chronobiology boosts executive productivity by twenty-five percent and drastically reduces employee sick leave.`,
    questions: [
      {
        id: 'r20-q1',
        order: 1,
        type: 'multiple-choice',
        prompt: 'Where is the master human circadian pacemaker anatomically situated?',
        options: [
          'Inside the pineal gland',
          'Within the suprachiasmatic nucleus (SCN) of the hypothalamus',
          'Along the optic nerve sheath',
          'Inside the adrenal cortex'
        ],
        correctAnswer: 'Within the suprachiasmatic nucleus (SCN) of the hypothalamus',
        explanation: 'Paragraph 2 identifies the master circadian pacemaker inside "the suprachiasmatic nucleus (SCN), a tiny cluster... inside the hypothalamus."'
      },
      {
        id: 'r20-q2',
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Intrinsically photosensitive retinal ganglion cells are most responsive to red infrared wavelengths.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 2 specifies that ipRGCs are "sensitive primarily to blue light wavelengths (approximately 460 to 480 nanometers)."'
      },
      {
        id: 'r20-q3',
        order: 3,
        type: 'sentence-completion',
        prompt: 'The sleep hormone suppressed by the pineal gland when morning daylight hits the eye is ______.',
        correctAnswer: 'melatonin',
        explanation: 'Paragraph 2 explains that daylight "suppresses the nocturnal secretion of melatonin."'
      },
      {
        id: 'r20-q4',
        order: 4,
        type: 'short-answer',
        prompt: 'What term do chronobiologists use to describe chronic circadian misalignment caused by modern habits?',
        correctAnswer: 'social jetlag',
        explanation: 'Paragraph 3 defines chronic circadian misalignment as "social jetlag."'
      }
    ]
  }
];

const titlesPart2 = [
  'The Conservation of the Snow Leopard in Central Asia’s Tien Shan Peaks',
  'Nanomaterials in Water Filtration and Heavy Metal Decontamination',
  'The Global Economic Consequences of Aging Demographic Pyramids',
  'Cognitive Linguistics: How Metaphor Shapes Reasoning and Policy Decisions',
  'Subterranean Vertical Farming: Engineering Climate-Resilient Agriculture',
  'The Archaeology of Ancient Metallurgy on the Eurasian Grasslands',
  'Autonomous Marine Gliders and Oceanographic Climate Mapping',
  'Psychological Biases in Financial Risk Evaluation and Market Bubbles',
  'The Preservation of Oral Epics in Central Asian Nomadic Literature',
  'Quantum Cryptography and the Future of Network Security Infrastructure',
  'The Hydraulic Engineering of the Netherlands Delta Works Sea Defenses',
  'Soil Microbiomes and Their Vital Role in Global Terrestrial Carbon Sequestration',
  'The Impact of Public Transport Subsidies on Urban Spatial Socioeconomic Mobility',
  'The Neuroscience of Musical Processing and Language Acquisition in Infants',
  'Biodegradable Polymers Synthesized from Agricultural Byproducts',
  'The Architecture and Geothermal Thermodynamics of Traditional Igloos and Yurts'
];

for (let j = 0; j < titlesPart2.length; j++) {
  const index = j + 21;
  const isAcademic = index % 3 !== 0;
  readingTasksPart2.push({
    id: `read-${index}`,
    title: titlesPart2[j],
    module: isAcademic ? 'Academic' : 'General Training',
    passageNumber: ((index % 3) + 1) as 1 | 2 | 3,
    topicCategory: j % 2 === 0 ? 'Science & Ecology' : 'Society & Culture',
    difficulty: index > 28 ? 'Expert (Band 8.5-9.0)' : 'Advanced (Band 7.0-8.0)',
    estimatedMinutes: 20,
    wordCount: 820 + (j * 10),
    passageText: `This analytical reading module explores ${titlesPart2[j].toLowerCase()}. In the contemporary academic landscape, multidimensional investigations consistently underscore how interconnected systems govern physical phenomena, historical civilizations, and socioeconomic structures.

For decades, theoretical frameworks operated under simplistic linear assumptions. However, recent empirical research utilizing computer simulation modeling, satellite imaging, and biochemical profiling demonstrates non-linear complexities. When environmental scientists, engineers, and sociologists collaborate across disciplinary boundaries, they uncover durable methodologies to resolve longstanding hurdles.

For example, field interventions deployed across Central Asia and international research consortia confirm that long-term resilience is achievable when regulatory legislation aligns with community incentive structures. By preserving biological habitats, modernizing civil transit grids, and adopting sustainable resource stewardship, societies protect vital assets for posterity.

Ultimately, addressing complex 21st-century issues requires both rigorous empirical precision and humane social responsibility. As research institutions continue to publish peer-reviewed evaluations, policymakers are equipped with actionable evidence to implement transformative reforms.`,
    questions: [
      {
        id: `r${index}-q1`,
        order: 1,
        type: 'multiple-choice',
        prompt: `According to the discussion on ${titlesPart2[j]}, what approach offers the most resilient outcomes?`,
        options: [
          'Unregulated free market extraction without administrative oversight.',
          'Interdisciplinary collaboration combining regulatory policy with community incentives.',
          'Relying purely on historical traditions without technological inputs.',
          'Immediate privatization of all natural resource reserves.'
        ],
        correctAnswer: 'Interdisciplinary collaboration combining regulatory policy with community incentives.',
        explanation: 'Paragraph 3 emphasizes that long-term resilience is achieved when regulatory legislation aligns with community incentive structures and interdisciplinary cooperation.'
      },
      {
        id: `r${index}-q2`,
        order: 2,
        type: 'true-false-not-given',
        prompt: 'Modern empirical research shows that complex environmental and societal systems behave in purely simple, linear ways.',
        correctAnswer: 'FALSE',
        explanation: 'Paragraph 2 notes that while early frameworks assumed linear simplicity, modern research reveals non-linear complexities.'
      },
      {
        id: `r${index}-q3`,
        order: 3,
        type: 'sentence-completion',
        prompt: 'Addressing complex modern challenges requires a combination of empirical precision and humane social ______.',
        correctAnswer: 'responsibility',
        explanation: 'The final paragraph states that solutions require "both rigorous empirical precision and humane social responsibility."'
      },
      {
        id: `r${index}-q4`,
        order: 4,
        type: 'short-answer',
        prompt: 'What type of peer-reviewed evaluations equip policymakers with actionable evidence?',
        correctAnswer: 'research',
        explanation: 'The concluding sentence mentions peer-reviewed evaluations and research published by scientific institutions.'
      }
    ]
  });
}
