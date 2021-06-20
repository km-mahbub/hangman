import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Answerbox } from "../components/answerBox/AnswerBox";
import { Figure } from "../components/figure/Figure";
import { Letter } from "../components/letter/Letter";
import { RestartButton } from "../components/restartButton/RestartButton";
import { ResultWindow } from "../components/resultWindow/ResultWindow";
import { IStore, IUpdateGameState } from "../types";
import letters from "../utils/letters";
import * as gameActions from "../redux/actions/game/actions";

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: IStore) => state.game);

  const handleLetterClick = (letter: string) => () => {
    const updateObject: IUpdateGameState = {
      gameId: gameState.game.id,
      letter: letter,
    };
    dispatch(gameActions.updateGameState(updateObject));
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
          <RestartButton text="Restart" />
        </div>
      </div>
    </>
  );
};
