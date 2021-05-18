import React, { useEffect, useState } from "react";

import "./Score.scss";

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="Score">
      <div className="Score__container">
        <p className="Score__text">Current Score</p>
        <p className="Score__value">{currentScore}</p>
      </div>
      <div className="Score__container">
        <p className="Score__text">Best Score</p>
        <p className="Score__value Score__value--best">
          {bestScore === -Infinity ? 0 : bestScore}
        </p>
      </div>
    </div>
  );
};

export default Score;
