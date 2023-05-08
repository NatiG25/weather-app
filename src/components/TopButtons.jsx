import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Riyadh",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  const handleClick = (city) => setQuery({ q: city });

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            onClick={() => handleClick(city.title)}
            className="text-white text-lg font-medium"
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
