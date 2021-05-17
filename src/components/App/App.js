import React, { useState } from "react";

import images from "../../images/";
import returnRandomizedArray from "../../cardfunctions.js";

import Header from "../Header/Header.js";
import Score from "../Score/Score.js";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import Modal from "../Modal/Modal.js";

const picturesArray = [
  {
    name: "nuggets",
    img: images.nuggets,
  },
  {
    name: "magic",
    img: images.magic,
  },
  {
    name: "nets",
    img: images.nets,
  },
  {
    name: "mavericks",
    img: images.mavericks,
  },
  {
    name: "bulls",
    img: images.bulls,
  },
  {
    name: "cavaliers",
    img: images.cavaliers,
  },
  {
    name: "pacers",
    img: images.pacers,
  },
  {
    name: "rockets",
    img: images.rockets,
  },
  {
    name: "warriors",
    img: images.warriors,
  },
  {
    name: "lakers",
    img: images.lakers,
  },
  {
    name: "clippers",
    img: images.clippers,
  },
  {
    name: "heat",
    img: images.heat,
  },
  {
    name: "thunder",
    img: images.thunder,
  },
  {
    name: "hornets",
    img: images.hornets,
  },
  {
    name: "spurs",
    img: images.spurs,
  },
  {
    name: "trailblazers",
    img: images.trailblazers,
  },
];

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(-Infinity);
  const [pictures, setPictures] = useState(picturesArray);
  const [picks, setPicks] = useState([]); //the cards the user has selected
  const [winStatus, setWinStatus] = useState(null); //if false(user loses) a modal pops up saying the user has lost,

  const onPictureClick = (name, image) => {
    //if picks array includes the name of team user clicked
    if (picks.includes(name)) {
      setWinStatus({ status: false, chosen: name, image: image }); //set win status to false, so modal pops up saying user has lost
    } else {
      setPicks([...picks, name]); //include this pick in the picks array so we know not to click it again
      const incrementedScore = currentScore + 1;
      setCurrentScore(incrementedScore); //increase current Score
      setBestScore(Math.max(incrementedScore, bestScore)); //recalculate new best score
      setPictures(returnRandomizedArray(pictures));
    }
  };

  const onModalClick = () => {
    setCurrentScore(0); //reset current score to 0
    setPicks([]); //clear out our picks array
    //we need to setWinStatus to null when game resets after user clicks out of modal
    setWinStatus(null);
    setPictures(returnRandomizedArray(pictures));
  };

  return (
    <div className="App">
      <Header />
      <Score currentScore={currentScore} bestScore={bestScore} />
      <PicturesContainer pictures={pictures} onPictureClick={onPictureClick} />
      {winStatus && winStatus.status === false && (
        <Modal
          currentScore={currentScore}
          bestScore={bestScore}
          onModalClick={onModalClick}
          name={winStatus.chosen}
          image={winStatus.image}
        />
      )}
    </div>
  );
};

export default App;
