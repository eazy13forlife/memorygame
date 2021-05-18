import React from "react";
import "./Modal.scss";

import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({
  currentScore,
  bestScore,
  onModalClick,
  name,
  image,
  isTimerUp,
}) => {
  if (bestScore === -Infinity) {
    bestScore = 0;
  }

  const renderUserLost = () => {
    return (
      <>
        <h1 className="primary-heading primary-heading--red">Game Over!</h1>
        <p className="Modal__text">You've already selected:</p>
        <div className={`PictureCard PictureCard--${name}`}>
          <img
            src={image}
            alt={`${name} logo`}
            className="PictureCard__image"
          />
        </div>
        <div className="Modal__results">
          <p className="Modal__text">{`  Your final score: ${currentScore} `}</p>
          <p className="Modal__text">{`  Your best score: ${bestScore} `}</p>
        </div>
      </>
    );
  };

  const renderTimeUp = () => {
    return (
      <>
        <h1 className="primary-heading primary-heading--red">Time is up!</h1>
        <div className="Modal__results">
          <p className="Modal__text">{`  Your final score: ${currentScore} `}</p>
          <p className="Modal__text">{`  Your best score: ${bestScore} `}</p>
        </div>
      </>
    );
  };

  return (
    <div className="Modal">
      <div className="Modal__content">
        <RiCloseCircleFill className="Modal__icon" onClick={onModalClick} />
        {isTimerUp ? renderTimeUp() : renderUserLost()}
      </div>
    </div>
  );
};

export default Modal;
