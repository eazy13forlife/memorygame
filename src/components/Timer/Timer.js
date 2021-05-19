import React, { useState, useEffect } from "react";

/*
our component re-rendered but the useEffect just gets called once after it mounts, so it will keep the initial currentTime value even if setTimer is called and currentTime updated because that useEffect uses the inital value of currentTime before any updating occured and it continues to use that because it is only rendered one time. This is why i put a time variable outside everything because when that changes, we all know
*/

let intervalId;

const Timer = ({
  startingTime,
  onTimerEnd,
  resetTimer,
  setResetTimer,
  stopTimer,
}) => {
  const [currentTime, setCurrentTime] = useState(startingTime);

  //at initial load, start our timer countdown
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
  }, []);

  //when resetTimer is set to true, reset our timer countdown
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

  //when stopTimer is set to true, we want to stop the timer by clearing IntervalId
  useEffect(() => {
    if (stopTimer) {
      clearInterval(intervalId);
    }
  }, [stopTimer]);

  //when currentTime hits 0, call onTimerEnd property passed from App comp
  useEffect(() => {
    if (currentTime === 0) {
      onTimerEnd();
    }
  }, [currentTime]);

  return <p className="Timer">{currentTime}</p>;
};
export default Timer;
