import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <p className="text-white font-extralight text-xl">
          Tuesday, 31 May 2022 | Local time: 12:39 PM
        </p>
      </div>

      <div className="flex justify-center items-center my-3">
        <p className="text-white font-medirm text-3xl">
        Berlin, DE
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
