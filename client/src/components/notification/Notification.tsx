import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../types";

export const Notification: React.FC = () => {
  const gameState = useSelector((state: IStore) => state.game);
  return (
    <div
      className={`notification-container ${
        gameState.notification ? "show" : ""
      }`}
    >
      <p>{gameState.err}</p>
    </div>
  );
};
