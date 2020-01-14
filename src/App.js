import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./CircularProgressbar.js";
import 'react-circular-progressbar/dist/styles.css';
import { getPercentageDone } from "./GetPercentageDone.js";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarf } from "./CircularProgressbar.js";

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
      <div class="times">
        <span class="timerComponents">
          {timeLeft[interval]} {interval}{" "}
        </span>
      </div>
    );
  });

  return (
    <div class="app">
      <h1>Countdown to See NICK 💘 </h1>
      {timerComponents.length ? timerComponents : <span>Time To See NICK</span>}
      <h2>You're {CircularProgressbar}
 of the way there!</h2>
    </div>
    );
  }

export default CountdownTimer;

