import React from "react";

interface RestartbuttonProps {
  text: string;
}

export const Restartbutton: React.FC<RestartbuttonProps> = ({ text }) => {
  return (
    <button type="button" className="restartBtn">
      {text}
    </button>
  );
};
