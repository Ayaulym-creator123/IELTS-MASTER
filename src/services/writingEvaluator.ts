export interface CriteriaScore {
  criterion: string;
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

export interface WritingEvaluationResult {
  overallBand: number;
  wordCount: number;
  characterCount: number;
  criteria: CriteriaScore[];
  generalFeedback: string;
  vocabularySuggestions: { original: string; suggested: string; context: string }[];
  structuralAdvice: string[];
}

export const evaluateIeltsWriting = (
  text: string,
  taskType: 'academic-task-1' | 'gt-task-1' | 'task-2',
  minWordCount: number
): WritingEvaluationResult => {
  const trimmed = text.trim();
  const words = trimmed.length > 0 ? trimmed.split(/\s+/).filter(w => w.length > 0) : [];
  const wordCount = words.length;
  const characterCount = trimmed.length;

  // Empty or extremely short submission
  if (wordCount < 30) {
    return {
      overallBand: 3.5,
      wordCount,
      characterCount,
      criteria: [
        {
          criterion: taskType === 'task-2' ? 'Task Response' : 'Task Achievement',
          score: 3.5,
          feedback: 'The submission is significantly under-length and does not adequately address the prompt requirements.',
          strengths: [],
          improvements: [`Write at least ${minWordCount} words to satisfy minimum length requirements.`]
        },
        {
          criterion: 'Coherence and Cohesion',
          score: 3.5,
          feedback: 'Insufficient text to evaluate paragraph organization or logical discourse flow.',
          strengths: [],
          improvements: ['Structure your writing into a clear introduction, 2-3 body paragraphs, and a conclusion.']
        },
        {
          criterion: 'Lexical Resource',
          score: 3.5,
          feedback: 'Extremely limited vocabulary sample provided.',
          strengths: [],
          improvements: ['Incorporate topic-specific academic collocations.']
        },
        {
          criterion: 'Grammatical Range and Accuracy',
          score: 3.5,
          feedback: 'Too few sentences to assess sentence complexity or grammatical control.',
          strengths: [],
          improvements: ['Use a mixture of complex and compound sentence structures.']
        }
      ],
      generalFeedback: `Your response contains only ${wordCount} words. In the actual IELTS exam, responses under ${minWordCount} words suffer severe band penalties on Task Achievement / Task Response.`,
      vocabularySuggestions: [],
      structuralAdvice: [
        `Ensure you write a minimum of ${minWordCount} words.`,
        'Plan your essay with an introductory statement, supporting body paragraphs, and a clear overview or concluding paragraph.'
      ]
    };
  }

  // 1. Task Achievement / Task Response Assessment
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  let trScore = 6.0;
  const trStrengths: string[] = [];
  const trImprovements: string[] = [];

  if (wordCount >= minWordCount) {
    trStrengths.push(`Satisfies the minimum word count requirement (${wordCount} / ${minWordCount} words).`);
    trScore += 0.5;
  } else {
    const deficit = minWordCount - wordCount;
    trImprovements.push(`Under length by ${deficit} words. This will directly penalize your score.`);
    trScore -= 1.0;
  }

  if (taskType === 'academic-task-1') {
    const hasOverview = /overall|in general|to summarize|notable trend|predominant/i.test(text);
    if (hasOverview) {
      trStrengths.push('Contains an identifiable overview summarizing key trends.');
      trScore += 0.5;
    } else {
      trImprovements.push('Missing a clear overview paragraph highlighting primary trends or contrasting features.');
      trScore -= 0.5;
    }
  } else if (taskType === 'task-2') {
    const hasThesis = /in my opinion|i believe|this essay contends|i would argue|in my view/i.test(text);
    if (hasThesis) {
      trStrengths.push('Clear position presented and maintained throughout.');
      trScore += 0.5;
    } else {
      trImprovements.push('Make your thesis statement and personal perspective more explicit in the introduction.');
    }
  }

  // 2. Coherence and Cohesion
  let ccScore = 6.0;
  const ccStrengths: string[] = [];
  const ccImprovements: string[] = [];

  if (paragraphs.length >= 3 && paragraphs.length <= 5) {
    ccStrengths.push(`Effective paragraph organization with ${paragraphs.length} distinct paragraphs.`);
    ccScore += 0.5;
  } else if (paragraphs.length < 3) {
    ccImprovements.push('Lacks clear paragraph separation. Divide into at least 3-4 structured paragraphs.');
    ccScore -= 0.5;
  }

  const cohesiveMarkers = [
    'furthermore', 'moreover', 'in addition', 'consequently', 'nevertheless',
    'however', 'in contrast', 'on the other hand', 'on the one hand', 'whereas',
    'while', 'subsequently', 'therefore', 'as a result', 'in particular'
  ];
  const foundCohesive = cohesiveMarkers.filter(m => new RegExp(`\\b${m}\\b`, 'i').test(text));

  if (foundCohesive.length >= 4) {
    ccStrengths.push(`Varied cohesive devices utilized effectively (${foundCohesive.slice(0, 4).join(', ')}).`);
    ccScore += 0.5;
  } else {
    ccImprovements.push('Rely more frequently on formal linking discourse markers to guide the reader.');
  }

  // 3. Lexical Resource
  let lrScore = 6.0;
  const lrStrengths: string[] = [];
  const lrImprovements: string[] = [];

  const academicKeywords = [
    'significant', 'substantial', 'predominant', 'precipitous', 'fluctuate',
    'plateau', 'outstrip', 'trajectory', 'demographic', 'sustainability',
    'infrastructure', 'mitigate', 'disparity', 'interconnected', 'correlation',
    'prevalent', 'consequently', 'exponential', 'inextricably', 'paradigm'
  ];
  const foundAcademic = academicKeywords.filter(k => new RegExp(`\\b${k}\\b`, 'i').test(text));

  if (foundAcademic.length >= 5) {
    lrStrengths.push(`Sophisticated academic vocabulary evident (${foundAcademic.slice(0, 5).join(', ')}).`);
    lrScore += 1.0;
  } else if (foundAcademic.length >= 2) {
    lrStrengths.push(`Good usage of formal vocabulary (${foundAcademic.join(', ')}).`);
    lrScore += 0.5;
  } else {
    lrImprovements.push('Vocabulary is somewhat basic. Incorporate more advanced Band 7-8 academic terms and collocations.');
  }

  // Check word repetition
  const lowerWords = words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''));
  const uniqueCount = new Set(lowerWords).size;
  const diversityRatio = wordCount > 0 ? uniqueCount / wordCount : 0;
  if (diversityRatio > 0.45) {
    lrStrengths.push('High lexical variety with minimal repetitive phrasing.');
  } else {
    lrImprovements.push('Some repetitive vocabulary noticed. Utilize synonyms and nominalizations to diversify word choice.');
  }

  // 4. Grammatical Range and Accuracy
  let graScore = 6.0;
  const graStrengths: string[] = [];
  const graImprovements: string[] = [];

  const complexPointers = [
    'although', 'even though', 'despite', 'in spite of', 'which',
    'who', 'whose', 'whereby', 'if', 'unless', 'provided that', 'having'
  ];
  const foundComplex = complexPointers.filter(p => new RegExp(`\\b${p}\\b`, 'i').test(text));

  if (foundComplex.length >= 3) {
    graStrengths.push('Demonstrates good grammatical range with complex subordinate and relative clauses.');
    graScore += 0.5;
  } else {
    graImprovements.push('Incorporate more complex sentence structures (e.g. conditional clauses, relative clauses).');
  }

  const passiveIndicators = ['is considered', 'are seen', 'was conducted', 'were analyzed', 'can be observed', 'has been established'];
  const hasPassive = passiveIndicators.some(p => text.toLowerCase().includes(p));
  if (hasPassive) {
    graStrengths.push('Appropriate academic passive voice constructions employed.');
    graScore += 0.5;
  }

  // Clamp criteria between 4.0 and 9.0 in 0.5 increments
  const clampScore = (s: number) => Math.min(9.0, Math.max(4.0, Math.round(s * 2) / 2));
  const finalTr = clampScore(trScore);
  const finalCc = clampScore(ccScore);
  const finalLr = clampScore(lrScore);
  const finalGra = clampScore(graScore);

  const overall = Math.round(((finalTr + finalCc + finalLr + finalGra) / 4) * 2) / 2;

  // Specific vocabulary upgrade recommendations
  const vocabularySuggestions: { original: string; suggested: string; context: string }[] = [];
  const vocabReplacements: Record<string, string> = {
    'big': 'substantial / significant / considerable',
    'good': 'beneficial / advantageous / commendable',
    'bad': 'detrimental / adverse / deleterious',
    'many': 'a myriad of / numerous / a multitude of',
    'get': 'acquire / attain / secure',
    'show': 'illustrate / delineate / elucidate',
    'make': 'facilitate / synthesize / cultivate',
    'help': 'ameliorate / assist / bolster'
  };

  for (const [simple, advanced] of Object.entries(vocabReplacements)) {
    if (new RegExp(`\\b${simple}\\b`, 'i').test(text)) {
      vocabularySuggestions.push({
        original: simple,
        suggested: advanced,
        context: `Consider replacing everyday informal "${simple}" with academic alternatives such as "${advanced}".`
      });
      if (vocabularySuggestions.length >= 4) break;
    }
  }

  const structuralAdvice: string[] = [];
  if (paragraphs.length < 4) {
    structuralAdvice.push('Adopt the classic 4-paragraph essay model: Introduction, Body Paragraph 1 (Main Point A), Body Paragraph 2 (Main Point B), and Conclusion.');
  }
  if (taskType === 'academic-task-1') {
    structuralAdvice.push('In Writing Task 1, ensure you avoid giving personal opinions. Confine your report strictly to factual descriptions of the visual data.');
    structuralAdvice.push('Always place an Overview paragraph either immediately after the introduction or at the end.');
  } else {
    structuralAdvice.push('In Writing Task 2, dedicate each body paragraph to one central controlling idea, supported by elaboration and a concrete real-world example.');
  }

  return {
    overallBand: overall,
    wordCount,
    characterCount,
    criteria: [
      {
        criterion: taskType === 'task-2' ? 'Task Response' : 'Task Achievement',
        score: finalTr,
        feedback: finalTr >= 7.0 
          ? 'Fully addresses all parts of the task with well-developed ideas.'
          : 'Addresses the task prompt, though some aspects require further elaboration or evidence.',
        strengths: trStrengths,
        improvements: trImprovements
      },
      {
        criterion: 'Coherence and Cohesion',
        score: finalCc,
        feedback: finalCc >= 7.0
          ? 'Information and ideas are logically sequenced with a clear progression throughout.'
          : 'Presents information with some organization, but cohesion between sentences could be smoother.',
        strengths: ccStrengths,
        improvements: ccImprovements
      },
      {
        criterion: 'Lexical Resource',
        score: finalLr,
        feedback: finalLr >= 7.0
          ? 'Uses a sufficient range of vocabulary with flexibility and precision, including less common lexical items.'
          : 'Uses an adequate range of vocabulary for the task, though relying on everyday wording in places.',
        strengths: lrStrengths,
        improvements: lrImprovements
      },
      {
        criterion: 'Grammatical Range and Accuracy',
        score: finalGra,
        feedback: finalGra >= 7.0
          ? 'Uses a variety of complex structures with frequent error-free sentences.'
          : 'Uses a mix of simple and complex sentence forms with reasonable grammatical control.',
        strengths: graStrengths,
        improvements: graImprovements
      }
    ],
    generalFeedback: `Estimated IELTS Band Score: ${overall.toFixed(1)}. Your essay demonstrates solid competence across the core criteria. Focus on incorporating higher-tier academic collocations and refining subordinate clause complexity to reach Band 8+.`,
    vocabularySuggestions,
    structuralAdvice
  };
};
