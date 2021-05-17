import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <h1 className="primary-heading">test my memory</h1>
        <h4 className="primary-sub-heading">NBA teams</h4>
      </header>
      <div className="Header__rules">
        <p className="Header__rule1">1. You get a point for choosing a card.</p>
        <p className="Header__rule2">
          2.If you click the same card more than once, you lose.
        </p>
      </div>
    </div>
  );
};

export default Header;
