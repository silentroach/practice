const CoordinateMatch = /([a-h])([1-8])/;
const LetterOffset = "a".charCodeAt(0);

const getIndexByLetter = (letter: string): number =>
  letter.charCodeAt(0) - LetterOffset + 1;

export const squareIsWhite = (coordinates: string): boolean => {
  const match = CoordinateMatch.exec(coordinates);
  if (match === null) {
    throw new Error(`Unexpected coordinates ${coordinates}`);
  }

  const x = getIndexByLetter(match[1]);
  const y = Number(match[2]);

  return (x + y) % 2 !== 0;
};
