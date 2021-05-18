import React, { useState, useEffect } from "react";

/*
our component re-rendered but the useEffect just gets called once after it mounts, so it will keep the initial timer value even if setTimer is called and timer updated because that useEffect uses the inital value of timer before any updating occured and it continues to use that because it is only rendered one time. This is why i put a time variable outside everything because when that changes, we all know
*/

let initialTimer;

const Timer = ({ time, onTimerEnd, resetTimer, setResetTimer }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    if (resetTimer) {
      clearInterval(initialTimer);
      setTimer(5);
      setResetTimer(false);
    }

    initialTimer = setInterval(() => {
      if (time !== 0) {
        time -= 1;
        setTimer(time);
      } else {
        clearInterval(initialTimer);
      }
    }, 1000);
  }, [resetTimer]); //if resetTimer is true, we set current timer to 5 seconds again and then immediately set it to false after setting new timer, so our app knows.Then we create countdown interval again.
  /*
  useEffect(() => {
    if (resetTimer) {
      clearInterval(initialTimer);
      setTimer(5);
      setResetTimer(false);
      initialTimer = setInterval(() => {
        if (time !== 0) {
          time -= 1;
          setTimer(time);
        } else {
          clearInterval(initialTimer);
        }
      }, 1000);
    }
  }, [resetTimer]);
*/
  useEffect(() => {
    if (timer === 0) {
      onTimerEnd(); //when timer hits 0, call onTimerEnd property passed from App comp
    }
  }, [timer]);

  return <p>{timer}</p>;
};
export default Timer;
