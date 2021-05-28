import React from "react";
import "./GameStartPage.scss";

const GameStartPage = ({ onStartGame, gameStart }) => {
  return (
    <div
      className="GameStartPage"
      style={
        gameStart
          ? { animation: "slideUp 1500ms forwards" }
          : { animation: "none" }
      }
    >
      <div className="GameStartPage__content">
        <h1 className="primary-heading u-mb-medium">
          Test my memory: NBA teams
        </h1>
        <ol className="GameStartPage__list">
          <h4 className="u-mb-small">Rules</h4>
          <li className="GameStartPage__item">
            {" "}
            1. You get a point for choosing a team card.
          </li>
          <li className="GameStartPage__item">
            2. If you click the same team more than once, you lose.
          </li>
          <li className="GameStartPage__item">
            3. You only have 5 seconds to choose a team.
          </li>
        </ol>

        <button className="button" onClick={onStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameStartPage;
