import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/Count1day.css";

const Count1Day = () => {
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const startTimer = useCallback(() => {
    let oneDay = 86400000;
    const CountDown = new Date().getTime() + oneDay;

    let interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = CountDown - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      setTimerHours();
      setTimerMinutes();
      setTimerSeconds();
    };
  }, [startTimer]);

  return (
    <section className="count1day">
      <div className="clock1">
        <span>{parseInt(timerHours) < 10 ? "0" + timerHours : timerHours}</span>
        :
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

export default Count1Day;
