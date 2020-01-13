import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-03-27") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24) / 7),
        days: Math.floor(difference / (1000 * 60 * 60 * 24) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60)
        // Event.value = Math.floor((diff/oneDay)/7) + " weeks, " + ((diff/oneDay)%7) + " days"
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  const startDate = +new Date("2020-01-04");
  const finishDate = +new Date("2020-03-27");
  const todayDate = +new Date();
  const percentageDone = 100 * (todayDate - startDate) / (finishDate - startDate) ;

  return (
    <div>
      <h1>Countdown to See NICK heart </h1>
      {timerComponents.length ? timerComponents : <span>Time To See NICK</span>}
      <h2>You're {percentageDone} % of the way there!</h2>
    </div>
  );
}



export default CountdownTimer;

