import React from "react";

import "./PictureCard.scss";

const PictureCard = ({ name, image }) => {
  return (
    <div className={`PictureCard PictureCard--${name}`}>
      <img src={image} alt={`${name} logo`} className="PictureCard__image" />
    </div>
  );
};

export default PictureCard;
