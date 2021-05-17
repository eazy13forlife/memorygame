import React from "react";

import PictureCard from "../PictureCard/PictureCard.js";
import "./PicturesContainer.scss";

const PicturesContainer = ({ pictures }) => {
  const renderedPictures = pictures.map((picture, index) => {
    console.log(picture.img);
    return <PictureCard name={picture.name} image={picture.img} key={index} />;
  });
  return <div className="PicturesContainer">{renderedPictures}</div>;
};
export default PicturesContainer;
