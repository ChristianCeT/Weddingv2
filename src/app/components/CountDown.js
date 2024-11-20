"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountDownComponent = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  const date = new Date(2024, 11, 7, 8, 30);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Event Started</span>;
    } else {
      return (
        <span className="text-2xl ">
          {days} días {hours} horas {minutes} minutos {seconds} segundos
        </span>
      );
    }
  };

  return (
    load && (
      <div>
        <Countdown date={date} renderer={renderer}></Countdown>
      </div>
    )
  );
};

export default CountDownComponent;
