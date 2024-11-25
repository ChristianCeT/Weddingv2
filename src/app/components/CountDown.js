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
      return <span>El evento inició</span>;
    } else {
      return (
        <div className="flex items-center justify-center lg:flex-row flex-col">
          <h2 className="text-2xl text-[#645d34] font-nametitle italic font-semibold lg:mt-0 mt-2 animate-fade-left animate-duration-[3000ms]">
            Falta:{" "}
          </h2>

          <div className="flex lg:flex-row flex-col lg:text-2xl text-[1.32rem] font-dancingScript font-extrabold animate-fade animate-duration-[4000ms]">
            <span>
              {days} días {hours} horas {minutes} minutos
            </span>
            <span> {seconds} segundos</span>
          </div>
        </div>
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
