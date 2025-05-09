export interface Question {
  question: {
    question: string;
  };
  correct_answer: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
}
