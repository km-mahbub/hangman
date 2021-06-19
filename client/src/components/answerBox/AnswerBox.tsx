import React from "react";
import { arrayFindTarget } from "../../utils/array";
import styles from "./AnswerBox.module.css";

const question: string[] = ["C", "A", "T"];
const answered: string[] = ["C", "A", "T", "W", "M", "O", "R", "D", "I", "N"];

export const Answerbox: React.FC = () => {
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
