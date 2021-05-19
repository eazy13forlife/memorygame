import React, { useState, useEffect } from "react";

/*
our component re-rendered but the useEffect just gets called once after it mounts, so it will keep the initial currentTime value even if setTimer is called and currentTime updated because that useEffect uses the inital value of currentTime before any updating occured and it continues to use that because it is only rendered one time. This is why i put a time variable outside everything because when that changes, we all know
*/

let intervalId;

const Timer = ({ startingTime, onTimerEnd, resetTimer, setResetTimer }) => {
  const [currentTime, setCurrentTime] = useState(startingTime);

  useEffect(() => {
    let time1 = startingTime;
    intervalId = setInterval(() => {
      if (time1 !== 0) {
        time1 -= 1;
        setCurrentTime(time1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }, []); //if resetTimer is true, we set current currentTime to 5 seconds again and then immediately set it to false after setting new currentTime, so our app knows.Then we create countdown interval again.

  useEffect(() => {
    if (resetTimer) {
      let time1 = startingTime;
      clearInterval(intervalId);
      setCurrentTime(startingTime);
      setResetTimer(false);
      intervalId = setInterval(() => {
        if (time1 !== 0) {
          time1 -= 1;
          setCurrentTime(time1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (currentTime === 0) {
      onTimerEnd(); //when currentTime hits 0, call onTimerEnd property passed from App comp
    }
  }, [currentTime]);

  return <p>{currentTime}</p>;
};
export default Timer;
