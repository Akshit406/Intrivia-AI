// Mock data for interviews
export const mockInterviews = [
  {
    id: 'int-001',
    title: 'Frontend Developer Interview',
    date: '2023-10-15',
    totalScore: 82,
    fluency: {
      fillerWords: 12,
      fillerPercentage: 4.2
    },
    pitch: {
      mean: 120,
      median: 118,
      deviation: 15,
      min: 95,
      max: 145,
      speechRate: 140
    },
    responses: [
      {
        question: "What is your experience with React?",
        answer: "I've been using React for about 3 years in various projects...",
        score: 85,
        suggestion: "Try to provide more specific examples of complex React components you've built."
      },
      {
        question: "How do you handle state management?",
        answer: "I usually use Context API for smaller apps and Redux for larger ones...",
        score: 78,
        suggestion: "Mention experience with state management libraries like Zustand or MobX."
      }
    ],
    overview: "Overall, this was a strong interview performance. You demonstrated solid technical knowledge but could improve on providing specific examples. Your communication was clear with only occasional filler words. The pitch analysis shows good vocal variety, though you could slow down slightly for emphasis on key points."
  },
  {
    id: 'int-002',
    title: 'Technical Leadership Interview',
    date: '2023-10-10',
    totalScore: 76,
    fluency: {
      fillerWords: 18,
      fillerPercentage: 6.1
    },
    pitch: {
      mean: 110,
      median: 108,
      deviation: 12,
      min: 90,
      max: 130,
      speechRate: 155
    },
    responses: [],
    overview: ""
  },
  {
    id: 'int-003',
    title: 'System Design Interview',
    date: '2023-10-05',
    totalScore: 91,
    fluency: {
      fillerWords: 8,
      fillerPercentage: 2.7
    },
    pitch: {
      mean: 125,
      median: 122,
      deviation: 18,
      min: 100,
      max: 150,
      speechRate: 130
    },
    responses: [],
    overview: ""
  }
];
