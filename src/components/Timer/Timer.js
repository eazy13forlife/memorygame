import React, { useState, useEffect } from "react";

let intervalId;

const Timer = ({
  startingTime,
  onTimerEnd,
  resetTimer,
  setResetTimer,
  stopTimer,
}) => {
  console.log("timer");
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
