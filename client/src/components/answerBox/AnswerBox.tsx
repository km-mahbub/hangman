import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../types";
import { arrayFindTarget } from "../../utils/array";
import styles from "./AnswerBox.module.css";

export const Answerbox: React.FC = () => {
  const gameState = useSelector((state: IStore) => state.game);
  const question: string[] = gameState.game.word.split("");
  const answered: string[] = gameState.game.correctLetters.split("");

  return (
    <div className={styles.answerBox}>
      {question.map((letter: string, index: number) => {
        const key = `${letter}-${index}`;
        return (
          <div key={key} className={styles.answer}>
            {arrayFindTarget(answered, letter) ? letter : ""}
          </div>
        );
      })}
    </div>
  );
};
