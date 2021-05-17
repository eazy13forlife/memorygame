import React from "react";

import PictureCard from "../PictureCard/PictureCard.js";
import "./PicturesContainer.scss";

const PicturesContainer = ({ pictures, onPictureClick }) => {
  const renderedPictures = pictures.map((picture, index) => {
    return (
      <PictureCard
        name={picture.name}
        image={picture.img}
        key={index}
        onPictureClick={onPictureClick}
      />
    );
  });
  return <div className="PicturesContainer">{renderedPictures}</div>;
};
export default PicturesContainer;
