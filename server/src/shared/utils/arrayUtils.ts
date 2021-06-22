const links: string[] = [
  "https://random-word-form.herokuapp.com/random/animal",
  "https://random-word-form.herokuapp.com/random/noun",
  "https://random-word-form.herokuapp.com/random/adjective"
]

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

export const getWordApiLink = (): string => {
  const random = Math.floor(Math.random() * links.length);
  //console.log(links[random]);
  return links[random];
}

export default {
  isWin,
  isLose,
  getWordApiLink,
  wrongAnsweredCount,
  arrayFindTarget,
};