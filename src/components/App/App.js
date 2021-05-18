import React, { useState } from "react";

import images from "../../images/";
import returnRandomizedArray from "../../cardfunctions.js";

import Header from "../Header/Header.js";
import Score from "../Score/Score.js";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import Modal from "../Modal/Modal.js";
import Timer from "../Timer/Timer.js";

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
let timer = 5;

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(-Infinity);
  const [pictures, setPictures] = useState(picturesArray);
  const [picks, setPicks] = useState([]); //the cards the user has selected
  const [winStatus, setWinStatus] = useState(null); //if false(user loses) a modal pops up saying the user has lost,
  const [isTimerUp, setIsTimerUp] = useState(false); //lets us know if timer is up so we know what to render
  const [resetTimer, setResetTimer] = useState(false); //function to reset the timer

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
      setResetTimer(true); //we want to reset the timer, so we can pass resetTime to timer component and it will know to reset
    }
  };

  const onModalClick = () => {
    setResetTimer(true); //we want to reset the timer, so we can pass resetTime to timer component and it will know to reset
    setIsTimerUp(false); //Since we get time again on our timer, we set isTimerUp to false so we wont render the Modal again
    setCurrentScore(0); //reset current score to 0
    setPicks([]); //clear out our picks array
    //we need to setWinStatus to null when game resets after user clicks out of modal
    setWinStatus(null);
    setPictures(returnRandomizedArray(pictures));
  };

  const onTimerEnd = () => {
    //when timer ends in Timer component
    setIsTimerUp(true); //set isTimer up to true, so we know to render the Modal
    setWinStatus({
      // we need to setWinStatus to an object again because the modal requres the chosen and image property even if time has run up and user hasn't chosen anything.
      chosen: null,
      image: null,
    });
  };

  return (
    <div className="App">
      <Header />
      <Score currentScore={currentScore} bestScore={bestScore} />
      <PicturesContainer pictures={pictures} onPictureClick={onPictureClick} />
      {(winStatus && winStatus.status === false) || isTimerUp ? (
        <Modal
          currentScore={currentScore}
          bestScore={bestScore}
          onModalClick={onModalClick}
          name={winStatus.chosen}
          image={winStatus.image}
          isTimerUp={isTimerUp}
        />
      ) : null}
      <Timer
        time={timer}
        onTimerEnd={onTimerEnd}
        resetTimer={resetTimer}
        setResetTimer={setResetTimer}
      />
    </div>
  );
};

export default App;
