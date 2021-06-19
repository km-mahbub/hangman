import React from "react";
import { Person } from "./person/Person";
import { Stand } from "./stand/Stand";

export const Figure: React.FC = () => {
  return (
    <div className="figure">
      <div className="figureRoom">
        <Stand />
        <Person />
      </div>
    </div>
  );
};
