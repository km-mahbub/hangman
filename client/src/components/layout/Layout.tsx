import React from "react";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="main">
      <div className="content">{children}</div>
    </div>
  );
};
