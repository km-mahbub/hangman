import React from "react";

interface LetterProps {
  letter: string;
  clickEvent: () => void;
}

export const Letter: React.FC<LetterProps> = ({ letter, clickEvent }) => {
  const getFontColor = () => {
    return "#000000";
  };

  return (
    <div
      className="letter"
      style={{ color: getFontColor() }}
      onClick={() => {
        clickEvent();
      }}
    >
      {letter}
    </div>
  );
};
