import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./CircularProgressbar.js";
import 'react-circular-progressbar/dist/styles.css';
import { getPercentageDone } from "./GetPercentageDone.js";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

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
      <h2>You're <CircularProgressbar
  value={getPercentageDone}
  text={`${getPercentageDone}%`}


  styles={buildStyles({
  // Rotation of path and trail, in number of turns (0-1)
  rotation: 0.25,

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: 'butt',

  // Text size
  textSize: '16px',

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 0.5,

  // Can specify path transition in more detail, or remove it entirely
  pathTransition: 'none',

  // Colors
  pathColor: `rgba(62, 152, 199, ${getPercentageDone})`,
  textColor: 'red',
  trailColor: '#d6d6d6',
  backgroundColor: '#3e98c7',
  })}
  />

 of the way there!</h2>
    </div>
    );
  }

export default CountdownTimer;

