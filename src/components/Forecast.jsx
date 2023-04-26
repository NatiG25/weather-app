import React from "react";
import { iconUrlFromCode } from "../weatherService";

function Forecast({ title, weather: { hourly, daily } }) {
  return (
    <div>
      <div className="flex justify-start items-center mt-6">
        <p className="text-white uppercase font-medium">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex justify-between items-center text-white">
        {title === "Hourly Forecast" &&
          hourly.map((hour) => {
            return (
              <>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-light text-sm">{hour.title}</p>
                  <img src={iconUrlFromCode(hour.icon)} className="my-2 w-12" />
                  <p className="font-medium">{hour.temp}</p>
                </div>
              </>
            );
          })}

        {title === "Daily Forecast" &&
          daily.map((day) => {
            return (
              <>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-light text-sm">{day.title}</p>
                  <img src={iconUrlFromCode(day.icon)} className="my-2 w-12" />
                  <p className="font-medium">{day.temp}</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Forecast;
