import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../types";
import { arrayFindTarget } from "../../utils/array";

interface LetterProps {
  letter: string;
  clickEvent: () => void;
}

export const Letter: React.FC<LetterProps> = ({ letter, clickEvent }) => {
  const gameState = useSelector((state: IStore) => state.game);
  const question: string[] = gameState.game.word.split("");
  const correctAns: string[] = gameState.game.correctLetters.split("");
  const wrongAns: string[] = gameState.game.wrongLetters.split("");

  const isAnswer = () => arrayFindTarget(correctAns, letter);

  const getFontColor = () => {
    if (isAnswer()) return "#00FF00";
    if (arrayFindTarget(wrongAns, letter)) return "#FF0000";
    return "#000000";
  };

  return (
    <div
      className="letter"
      style={{ color: getFontColor() }}
      onClick={() => {
        if (
          arrayFindTarget(correctAns, letter) ||
          arrayFindTarget(wrongAns, letter)
        )
          return;
        clickEvent();
      }}
    >
      {letter}
    </div>
  );
};
