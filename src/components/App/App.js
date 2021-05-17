import React, { useState } from "react";
import images from "../../images/";

import Header from "../Header/Header.js";
import Score from "../Score/Score.js";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";

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

console.log(picturesArray);
const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(Infinity);
  return (
    <div className="App">
      <Header />
      <Score />
      <PicturesContainer pictures={picturesArray} />
    </div>
  );
};

export default App;
