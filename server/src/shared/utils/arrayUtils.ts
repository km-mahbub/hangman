export const arrayFindTarget = (array: string[], target: string): boolean => (
  array.indexOf(target) !== -1
);

export const wrongAnsweredCount = (question: string[], answered: string[]): number => {
  let wrongAnswered = [...answered];
  question.forEach((word: string) => {
    wrongAnswered = wrongAnswered.filter(
      (answeredWord: string) => answeredWord !== word,
    );
  });
  return wrongAnswered.length;
};

export const isWin = (question: string[], answered: string[]): boolean => (
  question.every(questionWord => answered.indexOf(questionWord) !== -1)
);

export const isLose = (question: string[], answered: string[]): boolean => (
  wrongAnsweredCount(question, answered) === 6
);

export const isPlaying = (question: string[], answered: string[]): boolean => (
  !isWin(question, answered) && !isLose(question, answered)
);

export default {
  isWin,
  isLose,
  wrongAnsweredCount,
  arrayFindTarget,
};