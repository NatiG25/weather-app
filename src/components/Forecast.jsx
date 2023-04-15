import React from "react";
import { BsFillCloudSleetFill } from "react-icons/bs";

function Forecast({ title }) {
  return (
    <div>
      <div className="flex justify-start items-center mt-6">
        <p className="text-white uppercase font-medium">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <BsFillCloudSleetFill className="my-2 w-12" />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <BsFillCloudSleetFill className="my-2 w-12" />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <BsFillCloudSleetFill className="my-2 w-12" />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <BsFillCloudSleetFill className="my-2 w-12" />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30 PM</p>
          <BsFillCloudSleetFill className="my-2 w-12" />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
