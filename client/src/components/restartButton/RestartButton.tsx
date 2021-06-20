import React from "react";
import { useDispatch } from "react-redux";
import * as gameActions from "../../redux/actions/game/actions";

interface RestartButtonProps {
  text: string;
}

export const RestartButton: React.FC<RestartButtonProps> = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="restartBtn"
      onClick={() => dispatch(gameActions.newGame())}
    >
      {text}
    </button>
  );
};
