const generateLetters = (): string[] => (
  new Array(26).fill(undefined).map((v, i) => String.fromCharCode(i + 65))
);

const letters: string[] = generateLetters();

export default letters;