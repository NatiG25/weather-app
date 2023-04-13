import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { TbSunset2 } from "react-icons/tb";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex justify-center items-center py-6">
        <p className="text-cyan-300 font-medium text-xl">Cloudy</p>
      </div>

      <div className="flex justify-between items-center py-3 text-white">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Temperature color"
          className="w-20"
        />
        <p className="font-medium text-5xl">34°</p>
        <div className="flex flex-col space-x-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh size={20} />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={20} />
            Humidity:
            <span className="font-medium ml-1">88%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <RiWindyFill size={20} />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-white text-sm justify-center items-center py-3 space-x-2">
        <BiSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <TbSunset2 />
        <p className="font-light">
          Set: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <BiSun />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>

        <BiSun />
        <p className="font-light">
          Low: <span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
