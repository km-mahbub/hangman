import React from "react";
import { Answerbox } from "../components/answerBox/AnswerBox";
import { Figure } from "../components/figure/Figure";
import { Letter } from "../components/letter/Letter";
import { Restartbutton } from "../components/restartButton/RestartButton";
import letters from "../utils/letters";

export const Game: React.FC = () => {
  console.log(letters);
  const handleLetterClick = (letter: string) => () => {
    //updateAnsweredProgress(word);
  };
  return (
    <>
      <div className="header">
        <div className="title">Hangman</div>
      </div>
      <div className="letters">
        <div className="letterRow">
          {letters.slice(0, 13).map((letter) => (
            <Letter
              key={letter}
              letter={letter}
              clickEvent={handleLetterClick(letter)}
            />
          ))}
        </div>
        <div className="letterRow">
          {letters.slice(13).map((letter) => (
            <Letter
              key={letter}
              letter={letter}
              clickEvent={handleLetterClick(letter)}
            />
          ))}
        </div>
      </div>
      <div className="gameBlock">
        <Figure />
        <div className="left">
          <Answerbox />
          <Restartbutton text="Restart" />
        </div>
      </div>
    </>
  );
};
