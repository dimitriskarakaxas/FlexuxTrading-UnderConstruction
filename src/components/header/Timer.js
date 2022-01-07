import React, { useState, useEffect } from "react";

import TimerItem from "./TimerItem";
import "./Timer.css";

const calculateTimeLeft = () => {
  const siteLaunchingDate = "01/20/2022";

  const difference = +new Date(siteLaunchingDate) - +new Date();

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push({ timeLeft: timeLeft[interval], label: interval });
  });

  return (
    <div className="timer">
      {timerComponents &&
        timerComponents.map((timer, index) => {
          return (
            <TimerItem
              timeLeft={timer.timeLeft}
              label={timer.label}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default Timer;
