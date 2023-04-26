import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnits = e.target.name;
    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center space-x-2">
        <input
          value={city}
          onChange={handleChange}
          type="text"
          placeholder="Search for a city..."
          className="text-xl w-3/4 font-light p-2 shadow-xl capitalize focus:outline-none placeholder:lowercase"
        />
        <BiSearchAlt
          onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <FaLocationArrow
          onClick={handleLocationClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-white text-xl font-light transition ease-out hover:scale-125"
          onClick={handleUnitChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-white text-xl font-light transition ease-out hover:scale-125"
          onClick={handleUnitChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
