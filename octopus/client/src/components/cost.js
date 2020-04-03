import React from "react";

const Cost = ({ price }) => {
  const cost = price / 100;
  const [pounds, pense] = cost.toString().split(".");
  return (
    <h2>
      {pounds}
      <span style={{ fontSize: "14px" }}>.{pense}</span>
    </h2>
  );
};

export default Cost;
