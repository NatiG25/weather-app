import React from "react";
import { formatLocalTime } from "../weatherService";

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <p className="text-white font-extralight text-xl">
          {formatLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex justify-center items-center my-3">
        <p className="text-white font-medirm text-3xl">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
