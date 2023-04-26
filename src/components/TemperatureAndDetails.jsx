import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { TbSunset2 } from "react-icons/tb";
import { formatLocalTime, iconUrlFromCode } from "../weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    speed,
    timezone,
    sunrise,
    sunset,
  },
}) {
  return (
    <div>
      <div className="flex justify-center items-center py-6">
        <p className="text-cyan-300 font-medium text-xl">{details}</p>
      </div>

      <div className="flex justify-between items-center py-3 text-white">
        <img
          src={iconUrlFromCode(icon)}
          alt="Temperature color"
          className="w-20"
        />
        <p className="font-medium text-5xl">{temp.toFixed()}°</p>
        <div className="flex flex-col space-x-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={20} />
            Real fell:
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={20} />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <RiWindyFill size={20} />
            Wind:
            <span className="font-medium ml-1">{speed} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-white text-sm justify-center items-center py-3 space-x-2">
        <BiSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{formatLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <TbSunset2 />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{formatLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        <BiSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">{temp_max}°</span>
        </p>
        <p className="font-light">|</p>

        <BiSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">{temp_min}°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
