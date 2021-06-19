import React from "react";

export const Person: React.FC = () => {
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

    return `
      hiddenBorder
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
