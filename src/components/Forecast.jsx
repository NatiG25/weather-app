import React from "react";
import { iconUrlFromCode } from "../weatherService";
import { v4 as uuid } from "uuid";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex justify-start items-center mt-6">
        <p className="text-white uppercase font-medium">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex justify-between items-center text-white">
        {items.map((item) => {
          return (
            <div
              key={uuid()}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                className="my-2 w-12"
                alt="Weather Icon"
              />
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
