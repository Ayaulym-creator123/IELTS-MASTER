import { GrammarExercise } from '../types/ielts';

export const grammarExercises: GrammarExercise[] = [
  {
    id: 'gram-1',
    number: 1,
    title: 'Present Simple',
    cefrLevel: 'B1',
    overview: 'Used in IELTS to state universal truths, permanent states, recurring habits, and to report published scientific findings.',
    rules: [
      {
        heading: 'Universal Truths & Scientific Facts',
        explanation: 'Use the base form (or +s/es for 3rd person singular) for facts that do not change over time.',
        examples: ['The ozone layer absorbs most of the Sun’s harmful ultraviolet radiation.', 'Water boils at 100 degrees Celsius under standard atmospheric pressure.']
      },
      {
        heading: 'Permanent Situations & Regular Trends',
        explanation: 'Academic research often reports data in the present simple when summarizing general findings.',
        examples: ['The survey illustrates that renewable energy generates significant economic benefits.', 'Urban dwellers consume more processed food than rural populations.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The government provide adequate funding for secondary schools.',
        correct: 'The government provides adequate funding for secondary schools.',
        reason: 'Third-person singular subjects (government, institution, committee) require the -s suffix.'
      }
    ],
    questions: [
      {
        id: 'g1-q1',
        sentence: 'The data clearly ______ that expenditure on healthcare has steadily increased.',
        options: ['indicate', 'indicates', 'is indicating', 'indicated'],
        correctAnswer: 'indicates',
        explanation: '"The data" when treated as a singular collective or collective research summary requires "indicates", representing a permanent factual statement.'
      },
      {
        id: 'g1-q2',
        sentence: 'Many developing nations ______ substantial challenges in modernizing their transit networks.',
        options: ['faces', 'face', 'is facing', 'are faced'],
        correctAnswer: 'face',
        explanation: 'Plural subject "developing nations" takes the base form "face" for a continuous general state.'
      },
      {
        id: 'g1-q3',
        sentence: 'Photosynthesis ______ radiant solar energy into chemical energy within plant cells.',
        options: ['convert', 'converts', 'is converting', 'converted'],
        correctAnswer: 'converts',
        explanation: 'Scientific processes that represent timeless truths take present simple with singular agreement.'
      }
    ]
  },
  {
    id: 'gram-2',
    number: 2,
    title: 'Present Continuous',
    cefrLevel: 'B1',
    overview: 'Essential in IELTS Writing Task 1 to describe ongoing trends, developing social phenomena, and contemporary shifts.',
    rules: [
      {
        heading: 'Trends & Dynamic Shifts',
        explanation: 'Formed with am/is/are + verb-ing to depict changes in progress at the current epoch.',
        examples: ['Global temperatures are rising at an unprecedented rate.', 'A growing number of undergraduates are choosing STEM disciplines.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The cost of living rises currently across major metropolitan hubs.',
        correct: 'The cost of living is currently rising across major metropolitan hubs.',
        reason: 'Ongoing temporary or changing trends require the continuous aspect.'
      }
    ],
    questions: [
      {
        id: 'g2-q1',
        sentence: 'Technological advancements ______ the way modern corporations manage remote teams.',
        options: ['revolutionize', 'are revolutionizing', 'was revolutionizing', 'has revolutionized'],
        correctAnswer: 'are revolutionizing',
        explanation: 'Ongoing transformation taking place in the present era uses present continuous.'
      },
      {
        id: 'g2-q2',
        sentence: 'Public interest in sustainable agriculture ______ continuously according to recent reports.',
        options: ['grows', 'is growing', 'are growing', 'grow'],
        correctAnswer: 'is growing',
        explanation: '"Public interest" is an uncountable singular noun describing a dynamic current trend.'
      }
    ]
  },
  {
    id: 'gram-3',
    number: 3,
    title: 'Present Perfect',
    cefrLevel: 'B2',
    overview: 'Crucial for connecting past occurrences with current relevance, describing historical developments without a specific date.',
    rules: [
      {
        heading: 'Unspecified Past Action with Present Impact',
        explanation: 'Use have/has + past participle for achievements, changes over time, or cumulative research.',
        examples: ['Scholars have discovered substantial correlations between bilingualism and cognitive flexibility.', 'Governments have introduced stricter emissions standards in recent years.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Scientists have published this breakthrough paper in 2018.',
        correct: 'Scientists published this breakthrough paper in 2018.',
        reason: 'Specific past time markers (in 2018, yesterday, five years ago) require Past Simple, not Present Perfect.'
      }
    ],
    questions: [
      {
        id: 'g3-q1',
        sentence: 'Over the past two decades, internet penetration ______ dramatically in Central Asia.',
        options: ['increased', 'has increased', 'is increasing', 'had increased'],
        correctAnswer: 'has increased',
        explanation: 'Time expressions like "over the past two decades" denote a period continuing up to the present.'
      },
      {
        id: 'g3-q2',
        sentence: 'Several leading universities ______ their curricula to emphasize digital literacy.',
        options: ['have revised', 'has revised', 'revised recently in 1999', 'was revising'],
        correctAnswer: 'have revised',
        explanation: 'Plural subject "Several leading universities" takes "have revised" to highlight an accomplished present state.'
      }
    ]
  },
  {
    id: 'gram-4',
    number: 4,
    title: 'Present Perfect Continuous',
    cefrLevel: 'B2',
    overview: 'Demonstrates grammatical range by highlighting ongoing duration of actions that began in the past and continue today.',
    rules: [
      {
        heading: 'Continuous Duration over Time',
        explanation: 'Formed with have/has been + verb-ing to emphasize the unbroken activity rather than the final result.',
        examples: ['Climatologists have been studying ice core samples for over thirty years.', 'Policy makers have been debating urban migration incentives since the beginning of the decade.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Economists are analyzing this demographic pattern for five years.',
        correct: 'Economists have been analyzing this demographic pattern for five years.',
        reason: 'Actions spanning a duration from past to present require Present Perfect Continuous when modified by "for" or "since".'
      }
    ],
    questions: [
      {
        id: 'g4-q1',
        sentence: 'Medical researchers ______ into the neurological roots of memory loss for more than a quarter-century.',
        options: ['have been inquiring', 'are inquiring', 'inquired', 'had been inquired'],
        correctAnswer: 'have been inquiring',
        explanation: 'The duration marker "for more than a quarter-century" necessitates the present perfect continuous.'
      }
    ]
  },
  {
    id: 'gram-5',
    number: 5,
    title: 'Past Simple',
    cefrLevel: 'B1',
    overview: 'The primary tense for IELTS Writing Task 1 historical reports (e.g. 1990 to 2015) and Speaking Part 2 personal narratives.',
    rules: [
      {
        heading: 'Completed Past Events at Definite Times',
        explanation: 'Use regular -ed or irregular past verb forms for events anchored to completed time frames.',
        examples: ['Between 1995 and 2010, the coal sector declined by approximately 18 percent.', 'Kazakhstan achieved independence in December 1991.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The birth rate has dropped significantly between 2000 and 2008.',
        correct: 'The birth rate dropped significantly between 2000 and 2008.',
        reason: 'Completed periods in the past must be expressed with Past Simple.'
      }
    ],
    questions: [
      {
        id: 'g5-q1',
        sentence: 'During the financial crisis of 2008, industrial output in Europe ______ sharply.',
        options: ['fell', 'has fallen', 'was fallen', 'had fall'],
        correctAnswer: 'fell',
        explanation: '"During the financial crisis of 2008" marks a completed historical event requiring Past Simple.'
      }
    ]
  },
  {
    id: 'gram-6',
    number: 6,
    title: 'Past Continuous',
    cefrLevel: 'B2',
    overview: 'Used to provide background context for past events or to contrast an ongoing action interrupted by a specific occurrence.',
    rules: [
      {
        heading: 'Background Activity in the Past',
        explanation: 'Formed with was/were + verb-ing to set the scene or describe two simultaneous historical activities.',
        examples: ['While international trade was expanding rapidly in the 1990s, local artisans were adopting automated tools.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'While the factory was operating, an unexpected power failure was occurring.',
        correct: 'While the factory was operating, an unexpected power failure occurred.',
        reason: 'The sudden interrupting event must take Past Simple.'
      }
    ],
    questions: [
      {
        id: 'g6-q1',
        sentence: 'At the time when the new regulation was passed, many manufacturers ______ existing supply chains.',
        options: ['were restructuring', 'restructured', 'have restructured', 'are restructuring'],
        correctAnswer: 'were restructuring',
        explanation: 'An ongoing process simultaneously occurring at a specified past milestone.'
      }
    ]
  },
  {
    id: 'gram-7',
    number: 7,
    title: 'Past Perfect',
    cefrLevel: 'B2',
    overview: 'Clarifies sequence when one past event concluded prior to another past event. Vital for Band 7+ syntactic complexity.',
    rules: [
      {
        heading: 'Prior Past Actions',
        explanation: 'Formed with had + past participle to indicate the earlier of two completed past actions.',
        examples: ['By the time the emergency measures were enacted, the virus had already spread across multiple regions.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Before the government intervened, commodity prices rose already.',
        correct: 'Before the government intervened, commodity prices had already risen.',
        reason: 'The action completed prior to the past intervention requires Past Perfect.'
      }
    ],
    questions: [
      {
        id: 'g7-q1',
        sentence: 'Prior to 2015, the municipality ______ no unified cycling infrastructure.',
        options: ['had built', 'built', 'has built', 'was building'],
        correctAnswer: 'had built',
        explanation: '"Prior to 2015" sets a boundary before a past point in time, calling for Past Perfect.'
      }
    ]
  },
  {
    id: 'gram-8',
    number: 8,
    title: 'Past Perfect Continuous',
    cefrLevel: 'C1',
    overview: 'Emphasizes the duration of an ongoing process before another past event took place.',
    rules: [
      {
        heading: 'Continuous Past Duration Prior to a Point',
        explanation: 'Had been + verb-ing shows prolonged effort leading up to a past climax.',
        examples: ['The engineering consortium had been testing the prototype for three years before securing patent approval.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'They were studying the phenomenon for months before discovering the anomaly.',
        correct: 'They had been studying the phenomenon for months before discovering the anomaly.',
        reason: 'Emphasis on duration before a past discovery requires Past Perfect Continuous.'
      }
    ],
    questions: [
      {
        id: 'g8-q1',
        sentence: 'The research institute ______ with synthetic polymers for a decade before commercial production commenced.',
        options: ['had been experimenting', 'has experimented', 'was experimented', 'experiments'],
        correctAnswer: 'had been experimenting',
        explanation: 'Unbroken continuous activity leading up to a specific historical event.'
      }
    ]
  },
  {
    id: 'gram-9',
    number: 9,
    title: 'Future Forms',
    cefrLevel: 'B2',
    overview: 'Used in Task 1 projections (e.g. forecasted trends to 2050) and Task 2 proposals (will, is predicted to, is likely to).',
    rules: [
      {
        heading: 'Academic Forecasts & Predictions',
        explanation: 'Avoid absolute "will" in academic essays when expressing future uncertainty; use modal phrases like "is projected to" or "is anticipated to".',
        examples: ['Renewable energy is projected to account for 60% of total output by 2040.', 'Urban density is likely to escalate substantially unless decentralization policies are adopted.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'By 2050 the population will definitely doubles.',
        correct: 'By 2050 the population is projected to double.',
        reason: 'Academic projections require cautious hedging rather than informal assertions.'
      }
    ],
    questions: [
      {
        id: 'g9-q1',
        sentence: 'According to the United Nations, global freshwater demand ______ by approximately 30% by mid-century.',
        options: ['is expected to increase', 'increases', 'will have been increase', 'is increasing currently'],
        correctAnswer: 'is expected to increase',
        explanation: 'Academic passive future construction "is expected to increase" accurately expresses statistical forecasting.'
      }
    ]
  },
  {
    id: 'gram-10',
    number: 10,
    title: 'Modal Verbs',
    cefrLevel: 'B2',
    overview: 'Essential for academic hedging, expressing probability, necessity, capability, and recommendations in Task 2 and Speaking.',
    rules: [
      {
        heading: 'Hedging in Academic Writing',
        explanation: 'Words such as may, might, could, and should temper strong assertions, making arguments scholarly and defensible.',
        examples: ['Over-reliance on automation may stifle creative problem-solving among adolescents.', 'Strict punitive measures could inadvertently deter whistleblowers from coming forward.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'This policy must solve every economic hardship instantly.',
        correct: 'This policy should alleviate some economic hardships over time.',
        reason: 'Overgeneralization damages academic coherence; use nuanced modals.'
      }
    ],
    questions: [
      {
        id: 'g10-q1',
        sentence: 'Early childhood language immersion ______ significantly enhance cognitive processing in later life.',
        options: ['can', 'must to', 'ought', 'should to'],
        correctAnswer: 'can',
        explanation: '"Can" appropriately expresses theoretical capacity without requiring the particle "to".'
      }
    ]
  },
  {
    id: 'gram-11',
    number: 11,
    title: 'Passive Voice',
    cefrLevel: 'B2',
    overview: 'The hallmark of objective academic style. Used heavily in Writing Task 1 process diagrams and Task 2 formal analysis.',
    rules: [
      {
        heading: 'Focusing on the Process / Result',
        explanation: 'Be + past participle shifts focus away from the human agent onto the procedure or observation.',
        examples: ['Raw cocoa beans are harvested, fermented, and subsequently dried under controlled temperatures.', 'Comprehensive measures must be implemented to curb industrial runoff.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The data was analyzed by the software yesterday.',
        correct: 'The data were analyzed by the research team (or: The data was analyzed).',
        reason: 'Ensure subject-verb concord and accurate passive conjugation.'
      }
    ],
    questions: [
      {
        id: 'g11-q1',
        sentence: 'Once the recycling materials are sorted, they ______ to high temperatures in specialized furnaces.',
        options: ['are subjected', 'subjected', 'are subjecting', 'were subject'],
        correctAnswer: 'are subjected',
        explanation: 'Passive present simple describing a standard industrial manufacturing phase.'
      }
    ]
  },
  {
    id: 'gram-12',
    number: 12,
    title: 'Zero Conditional',
    cefrLevel: 'B1',
    overview: 'Used to state scientific verities, logical axioms, and cause-and-effect principles: If/When + present simple, present simple.',
    rules: [
      {
        heading: 'Cause and Effect Axioms',
        explanation: 'Both clauses take the present simple to express inevitable results.',
        examples: ['When consumer disposable income drops, non-essential spending decreases.', 'If ambient temperatures exceed 40°C, concrete sets prematurely.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'If inflation rises, purchasing power will drop always.',
        correct: 'If inflation rises, purchasing power drops.',
        reason: 'Zero conditional expresses an unchanging economic axiom, requiring present simple in both clauses.'
      }
    ],
    questions: [
      {
        id: 'g12-q1',
        sentence: 'When soil ______ essential organic nitrogen, crop yields decline precipitously.',
        options: ['lacks', 'will lack', 'is lacking of', 'lacked'],
        correctAnswer: 'lacks',
        explanation: 'Present simple in the condition clause for general scientific truths.'
      }
    ]
  },
  {
    id: 'gram-13',
    number: 13,
    title: 'First Conditional',
    cefrLevel: 'B2',
    overview: 'Expresses real, plausible future outcomes based on current policy decisions: If + present simple, will / may / can + base form.',
    rules: [
      {
        heading: 'Plausible Future Scenarios',
        explanation: 'Ideal for concluding paragraphs in Task 2 to present remedies and anticipated consequences.',
        examples: ['If municipal authorities invest in bus rapid transit, vehicular congestion will ease significantly.', 'Unless greenhouse emissions are curtailed, coastal cities may face severe inundation.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'If authorities will subsidize solar panels, adoption increases.',
        correct: 'If authorities subsidize solar panels, adoption will increase.',
        reason: 'Do not use "will" in the if-clause of a first conditional.'
      }
    ],
    questions: [
      {
        id: 'g13-q1',
        sentence: 'Unless prompt legislative remedies ______ enacted, environmental degradation will accelerate.',
        options: ['are', 'will be', 'were', 'have been being'],
        correctAnswer: 'are',
        explanation: '"Unless" operates like "if not" and requires present simple in the condition clause.'
      }
    ]
  },
  {
    id: 'gram-14',
    number: 14,
    title: 'Second Conditional',
    cefrLevel: 'B2',
    overview: 'Expresses hypothetical, counterfactual present situations or unlikely future scenarios: If + past simple, would / could / might + base form.',
    rules: [
      {
        heading: 'Hypothetical Speculation',
        explanation: 'Use the subjunctive "were" for all subjects in formal academic English.',
        examples: ['If higher education were entirely free, national productivity would likely surge.', 'If individuals consumed less processed sugar, public healthcare burdens could be mitigated.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'If the government would ban petrol cars, air quality improved.',
        correct: 'If the government banned petrol cars, air quality would improve.',
        reason: 'Condition clause takes past simple; result clause takes modal would/could.'
      }
    ],
    questions: [
      {
        id: 'g14-q1',
        sentence: 'If renewable alternatives ______ more affordable, reliance on fossil fuels would diminish rapidly.',
        options: ['were', 'are', 'would be', 'will be'],
        correctAnswer: 'were',
        explanation: 'Formal hypothetical condition uses subjunctive "were".'
      }
    ]
  },
  {
    id: 'gram-15',
    number: 15,
    title: 'Third Conditional',
    cefrLevel: 'C1',
    overview: 'Used to evaluate unfulfilled past events or historical what-ifs: If + past perfect, would have + past participle.',
    rules: [
      {
        heading: 'Counterfactual Past Evaluation',
        explanation: 'Essential for sophisticated argumentation and retrospectives in Speaking Part 3 and Task 2.',
        examples: ['Had authorities acted sooner, the economic downturn would have been far less disruptive.', 'If city planners had preserved green corridors, current heat-island effects could have been prevented.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'If they invested earlier, they would have reaped higher returns.',
        correct: 'If they had invested earlier, they would have reaped higher returns.',
        reason: 'Third conditional requires past perfect in the conditional clause.'
      }
    ],
    questions: [
      {
        id: 'g15-q1',
        sentence: 'If stricter building codes ______ prior to the tremor, structural damages would have been negligible.',
        options: ['had been enforced', 'were enforced', 'would have been enforced', 'have been enforced'],
        correctAnswer: 'had been enforced',
        explanation: 'Passive past perfect in the conditional clause of a third conditional.'
      }
    ]
  },
  {
    id: 'gram-16',
    number: 16,
    title: 'Mixed Conditionals',
    cefrLevel: 'C1',
    overview: 'Combines past conditions with present outcomes or present character with past actions. Demonstrates top-tier grammatical mastery (Band 8+).',
    rules: [
      {
        heading: 'Past Action with Present Consequence',
        explanation: 'If + past perfect, would + base verb (linking a past failure to an ongoing contemporary status).',
        examples: ['If the administration had ratified the treaty in 2005, the nation would not face international sanctions today.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'If he studied medicine in university, he would be a licensed surgeon now.',
        correct: 'If he had studied medicine in university, he would be a licensed surgeon now.',
        reason: 'Completed past action that shapes present status requires past perfect in the if-clause.'
      }
    ],
    questions: [
      {
        id: 'g16-q1',
        sentence: 'If environmental safeguards ______ decades ago, marine ecosystems would be thriving today.',
        options: ['had been instituted', 'were instituted', 'would be instituted', 'are instituted'],
        correctAnswer: 'had been instituted',
        explanation: 'Past condition (decades ago) coupled with present result (today).'
      }
    ]
  },
  {
    id: 'gram-17',
    number: 17,
    title: 'Relative Clauses',
    cefrLevel: 'B2',
    overview: 'Essential for writing complex, cohesive sentences. Distinguishes between defining (no commas) and non-defining (with commas) clauses.',
    rules: [
      {
        heading: 'Non-Defining Relative Clauses for Additional Academic Detail',
        explanation: 'Surrounded by commas; adds descriptive nuance without limiting the noun.',
        examples: ['Wind turbines, which convert kinetic energy into electrical power, require minimal operational maintenance.', 'Students who lack foundational numeracy often struggle in tertiary analytics coursework.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The treaty, that was signed in Geneva, has altered international maritime law.',
        correct: 'The treaty, which was signed in Geneva, has altered international maritime law.',
        reason: 'Do not use "that" in non-defining relative clauses; use "which" or "who".'
      }
    ],
    questions: [
      {
        id: 'g17-q1',
        sentence: 'Artificial intelligence algorithms, ______ can process massive datasets in milliseconds, are reshaping healthcare.',
        options: ['which', 'that', 'whom', 'whose'],
        correctAnswer: 'which',
        explanation: 'Non-defining relative clause modifying an inanimate subject requires "which".'
      }
    ]
  },
  {
    id: 'gram-18',
    number: 18,
    title: 'Reported Speech',
    cefrLevel: 'B2',
    overview: 'Used to cite academic research, paraphrase expert testimony, and report survey respondents in both Speaking and Writing.',
    rules: [
      {
        heading: 'Academic Reporting Verbs',
        explanation: 'Replace repetitive "said" with precise verbs: asserted, contended, established, highlighted, hypothesized.',
        examples: ['Proponents argue that genetic engineering enhances agricultural resilience.', 'The survey revealed that 72% of respondents favored public transit subsidies.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The researchers explained that they will publish the findings next year.',
        correct: 'The researchers explained that they would publish the findings the following year.',
        reason: 'Reported speech usually shifts modals back (will -> would) and adjusts time phrases.'
      }
    ],
    questions: [
      {
        id: 'g18-q1',
        sentence: 'Dr. Madina Kassymova maintained that the trial ______ conclusive proof of pharmaceutical efficacy.',
        options: ['had provided', 'has provided', 'provide', 'will provide'],
        correctAnswer: 'had provided',
        explanation: 'Past reporting verb "maintained" triggers backshift to past perfect for earlier findings.'
      }
    ]
  },
  {
    id: 'gram-19',
    number: 19,
    title: 'Articles (A, An, The)',
    cefrLevel: 'B2',
    overview: 'One of the most frequent grammar deductions for Kazakh and international students. Governs definiteness, generic classes, and geographic names.',
    rules: [
      {
        heading: 'Definite vs Zero Article with Plural & General Concepts',
        explanation: 'Do not use "the" when speaking of a whole class or abstract concept in general.',
        examples: ['Education is the cornerstone of societal progress. (NOT: The education...)', 'The education provided at Nazarbayev University adheres to global standards. (Specific)']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The modern technology has transformed the human communication.',
        correct: 'Modern technology has transformed human communication.',
        reason: 'Uncountable abstract nouns used in general statements take the zero article.'
      }
    ],
    questions: [
      {
        id: 'g19-q1',
        sentence: '______ rapid expansion of renewable infrastructure is vital for mitigating climate change.',
        options: ['The', 'A', 'An', 'No article'],
        correctAnswer: 'The',
        explanation: 'Specific identified expansion ("expansion of renewable infrastructure") requires the definite article.'
      }
    ]
  },
  {
    id: 'gram-20',
    number: 20,
    title: 'Prepositions & Prepositional Phrases',
    cefrLevel: 'B2',
    overview: 'Governs time, place, direction, and academic collocations (e.g. increase in, responsible for, impact on).',
    rules: [
      {
        heading: 'Trend & Measurement Prepositions in Task 1',
        explanation: 'An increase OF 15% (the difference); reached a peak AT 500 (the coordinate); rose FROM 20 TO 80.',
        examples: ['There was an increase of 25% in domestic tourism between May and August.', 'Expenditure peaked at $4.2 million in the final quarter.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The chart shows a rapid rise of unemployment in 2010.',
        correct: 'The chart shows a rapid rise in unemployment in 2010.',
        reason: 'The category affected takes "in" (rise in unemployment); the magnitude takes "of" (rise of 5%).'
      }
    ],
    questions: [
      {
        id: 'g20-q1',
        sentence: 'The government allocated $50 million ______ the restoration of regional wetlands.',
        options: ['for', 'to', 'in', 'at'],
        correctAnswer: 'to',
        explanation: 'The verb "allocate" takes the preposition "to" when designating recipients or targets.'
      }
    ]
  },
  {
    id: 'gram-21',
    number: 21,
    title: 'Gerunds and Infinitives',
    cefrLevel: 'B2',
    overview: 'Crucial for clause structuring. Verbs followed exclusively by -ing or to-infinitive, and gerunds acting as grammatical subjects.',
    rules: [
      {
        heading: 'Gerunds as Complex Sentence Subjects',
        explanation: 'Using a gerund phrase as the subject creates natural, high-band academic tone.',
        examples: ['Implementing congestion taxes discourages private automobile usage.', 'Failing to regulate social media platforms poses grave psychological risks for adolescents.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'To reduce public deficits involves to curb wasteful subsidies.',
        correct: 'Reducing public deficits involves curbing wasteful subsidies.',
        reason: '"Involve" requires a gerund object; gerund subjects read more naturally in academic prose.'
      }
    ],
    questions: [
      {
        id: 'g21-q1',
        sentence: 'Urban authorities must prioritize ______ sustainable mass transit options.',
        options: ['expanding', 'to expand', 'expand', 'expanded'],
        correctAnswer: 'expanding',
        explanation: '"Prioritize" is transitively followed by a gerund noun phrase.'
      }
    ]
  },
  {
    id: 'gram-22',
    number: 22,
    title: 'Comparatives and Superlatives',
    cefrLevel: 'B2',
    overview: 'The core linguistic tool for IELTS Task 1 comparisons: twice as high as, considerably higher than, the least prominent.',
    rules: [
      {
        heading: 'Proportional & Advanced Comparisons',
        explanation: 'Use modifiers such as significantly, marginal, substantially, fourfold to add academic precision.',
        examples: ['The proportion of female graduates was marginally higher than that of their male counterparts.', 'Coal consumption was threefold higher than hydroelectric generation.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The rate in 2010 was more higher than 2005.',
        correct: 'The rate in 2010 was significantly higher than that in 2005.',
        reason: 'Avoid double comparatives ("more higher") and ensure parallel comparison using "that in".'
      }
    ],
    questions: [
      {
        id: 'g22-q1',
        sentence: 'Solar energy was ______ more cost-effective in 2020 than in the preceding decade.',
        options: ['substantially', 'most', 'very much more', 'extreme'],
        correctAnswer: 'substantially',
        explanation: '"Substantially" is an academic adverb that naturally intensifies comparative adjectives.'
      }
    ]
  },
  {
    id: 'gram-23',
    number: 23,
    title: 'Subject-Verb Agreement',
    cefrLevel: 'B2',
    overview: 'Ensures singular/plural alignment in complex sentences where the subject is separated from the verb by prepositional phrases.',
    rules: [
      {
        heading: 'Intervening Prepositional Phrases',
        explanation: 'The verb must agree with the head noun, not with the noun inside an adjacent prepositional phrase.',
        examples: ['The proliferation of digital mobile devices has transformed youth communication patterns. (Proliferation is singular)', 'A wide array of structural reforms are being implemented.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The quality of educational facilities in rural districts are declining.',
        correct: 'The quality of educational facilities in rural districts is declining.',
        reason: 'The head noun is "quality" (singular); "facilities" is part of the modifying phrase.'
      }
    ],
    questions: [
      {
        id: 'g23-q1',
        sentence: 'The implementation of rigorous environmental regulations ______ significant capital investments.',
        options: ['requires', 'require', 'have required', 'are requiring'],
        correctAnswer: 'requires',
        explanation: 'The head subject "implementation" is singular, requiring "requires".'
      }
    ]
  },
  {
    id: 'gram-24',
    number: 24,
    title: 'Sentence Structures (Simple, Compound, Complex)',
    cefrLevel: 'B2',
    overview: 'IELTS Band 7+ Grammatical Range requires a deliberate mix of simple, compound, and complex sentence structures with accurate punctuation.',
    rules: [
      {
        heading: 'Compound Sentences with Coordinating Conjunctions',
        explanation: 'Join two independent clauses with FANBOYS (for, and, nor, but, or, yet, so) preceded by a comma.',
        examples: ['Renewable energy costs have fallen precipitously, yet fossil fuel subsidies remain stubbornly high.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The experiment failed, however the team persevered.',
        correct: 'The experiment failed; however, the team persevered. (or: The experiment failed. However, the team...)',
        reason: '"However" is a conjunctive adverb, not a coordinating conjunction; joining with a mere comma creates a comma splice.'
      }
    ],
    questions: [
      {
        id: 'g24-q1',
        sentence: 'Public libraries provide complimentary internet access, ______ they foster communal integration among newcomers.',
        options: ['and', 'yet', 'so that', 'whereas'],
        correctAnswer: 'and',
        explanation: '"And" coordinates two parallel positive contributions of public libraries.'
      }
    ]
  },
  {
    id: 'gram-25',
    number: 25,
    title: 'Complex Sentences & Subordination',
    cefrLevel: 'C1',
    overview: 'The foundation of academic depth. Utilizes subordinating conjunctions (although, whereas, while, since, provided that) to establish logical nuance.',
    rules: [
      {
        heading: 'Concessive & Adversative Subordination',
        explanation: 'Place the counter-argument in the subordinate clause and your main thesis in the independent clause.',
        examples: ['Although opponents contend that space exploration is prohibitively expensive, spinoff satellite technologies yield billions in economic value.', 'Whereas developed nations possess robust recycling networks, emerging economies frequently lack processing facilities.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Although the initial setup costs are high, but long-term savings are substantial.',
        correct: 'Although the initial setup costs are high, long-term savings are substantial.',
        reason: 'Never pair "although" with "but" in the same complex sentence.'
      }
    ],
    questions: [
      {
        id: 'g25-q1',
        sentence: '______ consumer demand for electric vehicles is escalating, battery recycling infrastructure remains embryonic.',
        options: ['While', 'Despite', 'Because of', 'In spite of'],
        correctAnswer: 'While',
        explanation: '"While" introduces a subordinate clause containing a complete subject and finite verb.'
      }
    ]
  },
  {
    id: 'gram-26',
    number: 26,
    title: 'Conjunctions and Transitions',
    cefrLevel: 'B2',
    overview: 'Governs Coherence & Cohesion (25% of Writing and Speaking score). Distinguishes coordinating, subordinating, and correlative conjunctions.',
    rules: [
      {
        heading: 'Correlative Conjunctions',
        explanation: 'Pairs like not only... but also, neither... nor, either... or must connect grammatically parallel structures.',
        examples: ['The curriculum must emphasize not only theoretical foundations but also practical vocational competencies.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Not only the policy is inequitable, but it also harms vulnerable demographics.',
        correct: 'Not only is the policy inequitable, but it also harms vulnerable demographics.',
        reason: 'When "not only" initiates a sentence, negative subject-auxiliary inversion is mandatory.'
      }
    ],
    questions: [
      {
        id: 'g26-q1',
        sentence: 'The initiative was designed to benefit ______ university scholars but also vocational apprentices.',
        options: ['not only', 'neither', 'either', 'both'],
        correctAnswer: 'not only',
        explanation: 'Correlative partner for "but also" is "not only".'
      }
    ]
  },
  {
    id: 'gram-27',
    number: 27,
    title: 'Punctuation in Academic Writing',
    cefrLevel: 'B2',
    overview: 'Accurate usage of commas, semicolons, colons, and apostrophes. Punctuation errors directly depress the Grammatical Accuracy score.',
    rules: [
      {
        heading: 'Semicolons for Closely Linked Independent Clauses',
        explanation: 'Use a semicolon to connect two related sentences without a coordinating conjunction.',
        examples: ['Tuition fees have risen consistently; consequently, student debt has reached historic highs.', 'Urban centres offer abundant employment; rural locales provide tranquility.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Its widely believed that childrens health is deteriorating.',
        correct: 'It is widely believed that children’s health is deteriorating.',
        reason: '"Its" is possessive; "It’s" is a contraction. Plural possessive of irregular nouns takes ’s (children’s).'
      }
    ],
    questions: [
      {
        id: 'g27-q1',
        sentence: 'The research yielded unexpected results______ the experimental group outperformed control benchmarks.',
        options: [':', ',', '-', '; and'],
        correctAnswer: ':',
        explanation: 'A colon is properly used to introduce an explanation or elaboration of the preceding clause.'
      }
    ]
  },
  {
    id: 'gram-28',
    number: 28,
    title: 'Word Formation and Nominalization',
    cefrLevel: 'C1',
    overview: 'Transforming verbs and adjectives into academic nouns (nominalization) elevates writing from conversational (Band 5) to formal academic (Band 8+).',
    rules: [
      {
        heading: 'Academic Nominalization',
        explanation: 'Convert weak verb phrases into concise, authoritative noun concepts.',
        examples: ['Conversational: When the government decided to expand cities... -> Academic: The rapid urban expansion led to...']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The destroying of natural habitats has caused extinction.',
        correct: 'The destruction of natural habitats has caused extinction.',
        reason: 'Prefer standard nominal forms (destruction) over informal verb-ing compounds where standard nouns exist.'
      }
    ],
    questions: [
      {
        id: 'g28-q1',
        sentence: 'The ______ of the national economy onto digital platforms requires massive telecommunication upgrades.',
        options: ['transition', 'transitioning', 'transitional', 'transitioned'],
        correctAnswer: 'transition',
        explanation: 'Standard formal nominalization "The transition of...".'
      }
    ]
  },
  {
    id: 'gram-29',
    number: 29,
    title: 'Countable and Uncountable Nouns',
    cefrLevel: 'B2',
    overview: 'Essential academic nouns that are uncountable in English: information, research, equipment, advice, evidence, machinery, baggage, furniture.',
    rules: [
      {
        heading: 'Uncountable Research Nouns',
        explanation: 'Never pluralize with -s and never precede with "a/an". Use "a piece of evidence" or "pieces of research".',
        examples: ['Empirical evidence suggests that early childhood intervention yields lifelong benefits.', 'Modern laboratory equipment is vital for conducting cutting-edge biotechnology research.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Scholars gathered numerous researches and informations.',
        correct: 'Scholars gathered numerous pieces of research and a wealth of information.',
        reason: '"Research" and "information" are strictly uncountable in English.'
      }
    ],
    questions: [
      {
        id: 'g29-q1',
        sentence: 'The university acquired advanced technological ______ to bolster its robotics laboratory.',
        options: ['equipment', 'equipments', 'piece of equipments', 'an equipment'],
        correctAnswer: 'equipment',
        explanation: '"Equipment" is uncountable and cannot take an -s plural.'
      }
    ]
  },
  {
    id: 'gram-30',
    number: 30,
    title: 'Quantifiers',
    cefrLevel: 'B2',
    overview: 'Proper pairing with countable versus uncountable nouns: few vs little, many vs much, fewer vs less, amount vs number.',
    rules: [
      {
        heading: 'Fewer vs Less / Number vs Amount',
        explanation: 'Use "number of / fewer" with plural countable nouns; use "amount of / less" with uncountable nouns.',
        examples: ['The number of international applicants rose by 14%.', 'A substantial amount of capital was allocated to renewable R&D.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Less people utilize public transport during weekends.',
        correct: 'Fewer people utilize public transport during weekends.',
        reason: '"People" is a countable plural noun; it must be modified by "fewer", not "less".'
      }
    ],
    questions: [
      {
        id: 'g30-q1',
        sentence: 'A significant ______ of agricultural land was converted into residential subdivisions.',
        options: ['amount', 'number', 'few', 'many'],
        correctAnswer: 'amount',
        explanation: '"Land" is uncountable, requiring "amount of".'
      }
    ]
  },
  {
    id: 'gram-31',
    number: 31,
    title: 'Determiners and Demonstratives',
    cefrLevel: 'B2',
    overview: 'Establishing reference cohesion across paragraphs using this, that, these, those, each, every, either, neither.',
    rules: [
      {
        heading: 'Cohesive Summary Demonstratives',
        explanation: 'Use "this/these + summarizing noun" to link complex arguments without repetition.',
        examples: ['Urban migration has surged. This demographic shift places immense strain on metropolitan utilities.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'These phenomenon has been documented globally.',
        correct: 'This phenomenon has been documented globally. (or: These phenomena have...)',
        reason: 'Singular "phenomenon" requires "this"; plural "phenomena" requires "these".'
      }
    ],
    questions: [
      {
        id: 'g31-q1',
        sentence: '______ of the candidates was evaluated according to standardized IELTS criteria.',
        options: ['Each', 'Every of', 'All', 'Both of each'],
        correctAnswer: 'Each',
        explanation: '"Each of + plural noun" takes a singular verb "was evaluated".'
      }
    ]
  },
  {
    id: 'gram-32',
    number: 32,
    title: 'Pronouns and Anaphoric Reference',
    cefrLevel: 'B2',
    overview: 'Maintains paragraph flow without mechanical noun repetition. Avoids vague pronoun references where the antecedent is ambiguous.',
    rules: [
      {
        heading: 'Clarity of Antecedents',
        explanation: 'Ensure pronouns (it, they, their, its) unequivocally point to a single identifiable entity.',
        examples: ['When governments subsidize universities, they empower the next generation of scholars.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The school built a new library and gym; it was very modern.',
        correct: 'The school built a new library and gym, both of which were exceptionally modern.',
        reason: 'Using "it" leaves the reader uncertain whether the library, gym, or school is modern.'
      }
    ],
    questions: [
      {
        id: 'g32-q1',
        sentence: 'Neither the department head nor the research associates had published ______ findings.',
        options: ['their', 'its', 'his or her', 'one’s'],
        correctAnswer: 'their',
        explanation: 'In modern academic English, plural reference matching the closer plural subject "associates" uses "their".'
      }
    ]
  },
  {
    id: 'gram-33',
    number: 33,
    title: 'Adjectives and Adverbs (Position and Degree)',
    cefrLevel: 'B2',
    overview: 'Precise academic modification: sharply, gradually, marginal, exponential, substantially, inextricably.',
    rules: [
      {
        heading: 'Adverb-Adjective Academic Collocations',
        explanation: 'Combine adverbs of degree with participle adjectives for natural band 8+ sophistication.',
        examples: ['Economic growth and environmental degradation are inextricably linked.', 'The hypothesis is widely accepted among leading sociologists.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'The figures grew extreme rapidly throughout the summer.',
        correct: 'The figures grew extremely rapidly throughout the summer.',
        reason: 'Modifying an adverb (rapidly) requires another adverb (extremely), not an adjective.'
      }
    ],
    questions: [
      {
        id: 'g33-q1',
        sentence: 'The two socioeconomic phenomena are ______ intertwined.',
        options: ['inextricably', 'inextricable', 'inextricability', 'with inextricable'],
        correctAnswer: 'inextricably',
        explanation: 'Adverb "inextricably" modifies the participle adjective "intertwined".'
      }
    ]
  },
  {
    id: 'gram-34',
    number: 34,
    title: 'Linking Words and Discourse Markers',
    cefrLevel: 'C1',
    overview: 'Sophisticated transitions for addition (furthermore), contrast (nevertheless), result (consequently), and exemplification (to illustrate).',
    rules: [
      {
        heading: 'Avoiding Mechanical Linker Overuse',
        explanation: 'Do not start every sentence with a linking word. Integrate discourse markers naturally within the clause.',
        examples: ['This recommendation, however, has drawn criticism from municipal budget officers.', 'Consequently, public confidence in financial markets eroded.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'In the one hand education is good. In the other hand it costs money.',
        correct: 'On the one hand, education yields immense social dividends; on the other hand, it requires substantial fiscal investment.',
        reason: 'Correct idiom is "On the one hand... on the other hand", requiring paired balanced clauses.'
      }
    ],
    questions: [
      {
        id: 'g34-q1',
        sentence: 'The initiative was costly; ______, its long-term benefits to public health are indisputable.',
        options: ['nevertheless', 'furthermore', 'for example', 'in consequence'],
        correctAnswer: 'nevertheless',
        explanation: '"Nevertheless" introduces a strong concessive contrast to the preceding expense.'
      }
    ]
  },
  {
    id: 'gram-35',
    number: 35,
    title: 'Inversion and Negative Fronting',
    cefrLevel: 'C1',
    overview: 'Placing negative or restrictive adverbs at the beginning of a clause reverses subject and auxiliary verb for rhetorical emphasis (Band 8.5-9.0).',
    rules: [
      {
        heading: 'Negative Adverbial Fronting',
        explanation: 'Seldom, rarely, hardly, scarcely, under no circumstances + auxiliary + subject + main verb.',
        examples: ['Rarely do economic policies achieve unanimous support among legislative stakeholders.', 'Under no circumstances should ethical oversight be compromised during clinical trials.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Hardly the students had entered the examination hall when the bell rang.',
        correct: 'Hardly had the students entered the examination hall when the bell rang.',
        reason: 'Fronted negative adverbs trigger auxiliary inversion (had the students entered).'
      }
    ],
    questions: [
      {
        id: 'g35-q1',
        sentence: 'Seldom ______ an international conference generated such widespread multilateral consensus.',
        options: ['has', 'did', 'is', 'was'],
        correctAnswer: 'has',
        explanation: 'Negative fronting requires inversion: Seldom + auxiliary has + subject + past participle generated.'
      }
    ]
  },
  {
    id: 'gram-36',
    number: 36,
    title: 'Advanced Grammar Structures (Cleft Sentences & Participle Clauses)',
    cefrLevel: 'C2',
    overview: 'The pinnacle of academic styling. Uses cleft sentences (It is X that..., What Y does is...) and reduced participle clauses for high density.',
    rules: [
      {
        heading: 'Reduced Participle Clauses for Syntactic Density',
        explanation: 'Replaces full adverbial or relative clauses to create concise, sophisticated prose.',
        examples: ['Having analyzed the demographic census data, the researchers published an alarming report on rural depopulation.', 'It is the lack of affordable childcare that prevents many parents from re-entering the workforce.']
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Walking down the boulevard, the library was seen.',
        correct: 'Walking down the boulevard, the researchers observed the new library.',
        reason: 'Dangling participle: the subject of the main clause must logically perform the action of the participle.'
      }
    ],
    questions: [
      {
        id: 'g36-q1',
        sentence: '______ multiple peer reviews, the methodology was deemed rigorously sound.',
        options: ['Having undergone', 'Underwent', 'After undergone', 'Was undergoing'],
        correctAnswer: 'Having undergone',
        explanation: 'Perfect participle clause "Having undergone" expresses a prior completed milestone justifying the main conclusion.'
      }
    ]
  }
];
