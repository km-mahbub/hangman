import React from "react";
import "./Loader.css";

export const Loader: React.FC = () => {
  return (
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
