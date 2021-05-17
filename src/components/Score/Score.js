import React from "react";

import "./Score.scss";

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="Score">
      <div className="Score__container">
        <p className="Score__text">Current Score</p>
        <p className="Score__value">23</p>
      </div>
      <div className="Score__container">
        <p className="Score__text">Current Score</p>
        <p className="Score__value">43</p>
      </div>
    </div>
  );
};

export default Score;
