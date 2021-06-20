import React from "react";
import { RestartButton } from "../restartButton/RestartButton";

import styles from "./ResultWindow.module.css";

interface ResultWindowProps {
  isWin: boolean;
  word: string;
}

export const ResultWindow: React.FC<ResultWindowProps> = ({ isWin, word }) => {
  return (
    <div className={styles.resultWindow}>
      <div className={styles.resultContent}>
        <div style={{ color: isWin ? "#00FF00" : "#FF0000" }}>
          {`You ${isWin ? "win" : "lose"}!`}
        </div>
        <div>{`Word is ${word}`}</div>
        <RestartButton text={isWin ? "Again" : "Restart"} />
      </div>
    </div>
  );
};
