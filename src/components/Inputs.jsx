import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search for a city..."
          className="text-xl w-3/4 font-light p-2 shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearchAlt
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <FaLocationArrow
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-white text-xl font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-white text-xl font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
