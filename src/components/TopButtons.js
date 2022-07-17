import React from "react";

//shortkey rfce
function TopButtons({  setCity }) {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Toronto",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  const handleClick = (cityName) => {
    setCity(cityName);
  };

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => handleClick(city.name)}
          key={city.id}
          className="text-white text-lg font-medium"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
