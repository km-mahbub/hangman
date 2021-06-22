import React from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

interface SpinnerProps {
  loading: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <HashLoader color="#fff" loading={loading} css={override} size={50} />
    </div>
  );
};
