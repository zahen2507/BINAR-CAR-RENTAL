import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/Count10Minute.css";

const Count10Minute = () => {
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = useCallback(() => {
    let tenMinute = 600000;
    const CountDown = new Date().getTime() + tenMinute;

    let interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = CountDown - now;

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      setTimerMinutes();
      setTimerSeconds();
    };
  }, [startTimer]);

  return (
    <section className="count10minute">
      <div className="clock2">
        <span>
          {parseInt(timerMinutes) < 10 ? "0" + timerMinutes : timerMinutes}
        </span>
        :
        <span>
          {parseInt(timerSeconds) < 10 ? "0" + timerSeconds : timerSeconds}
        </span>
      </div>
    </section>
  );
};

export default Count10Minute;
