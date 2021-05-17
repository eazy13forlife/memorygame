import React from "react";
import "./Modal.scss";

const Modal = ({ currentScore, bestScore, onModalClick }) => {
  return (
    <div className="Modal" onClick={onModalClick}>
      <div className="Modal__content">
        <h1 className="primary-heading primary-heading--red">Game Over!</h1>
        <p className="Modal__text">You've already selected this team. </p>
        <div className="Modal__results">
          <p className="Modal__text">{`  Your final score: ${currentScore} `}</p>
          <p className="Modal__text">{`  Your best score: ${bestScore} `}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
