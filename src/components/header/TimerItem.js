import React from "react";

import "./TimerItem.css";

const TimerItem = ({ timeLeft, label }) => {
  return (
    <div className="timerItem">
      <div className="timer_number">{timeLeft}</div>
      <div className="timer_label">{label}</div>
    </div>
  );
};

export default TimerItem;
