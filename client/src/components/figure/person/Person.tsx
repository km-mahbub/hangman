import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../types";

export const Person: React.FC = () => {
  const gameState = useSelector((state: IStore) => state.game);

  const getDisplayOfParts = (partType: string) => {
    const displaySortOfPart = [
      "initial",
      "head",
      "body",
      "leftHand",
      "rightHand",
      "leftFoot",
      "rightFoot",
    ];

    const isHiddenBorder = () =>
      gameState.game.wrongLetters.length <
      displaySortOfPart.findIndex((part) => part === partType);

    return `
      ${isHiddenBorder() && "hiddenBorder"}
    `;
  };

  return (
    <div className="person">
      <div className={`head ${getDisplayOfParts("head")}`} />
      <div className={`body ${getDisplayOfParts("body")}`} />
      <div className={`leftHand ${getDisplayOfParts("leftHand")}`} />
      <div className={`rightHand ${getDisplayOfParts("rightHand")}`} />
      <div className={`leftFoot ${getDisplayOfParts("leftFoot")}`} />
      <div className={`rightFoot ${getDisplayOfParts("rightFoot")}`} />
    </div>
  );
};
