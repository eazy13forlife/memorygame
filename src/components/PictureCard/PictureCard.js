import React from "react";

import "./PictureCard.scss";

const PictureCard = ({ name, image, onPictureClick }) => {
  return (
    <div
      className={`PictureCard PictureCard--${name}`}
      onClick={() => {
        onPictureClick(name, image);
      }}
    >
      <img src={image} alt={`${name} logo`} className="PictureCard__image" />
    </div>
  );
};

export default PictureCard;
