import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,

} from "@iconscout/react-unicons";

function TemperatureAndDetails({
  description,
  temp,
  feelsLike,
  humidity,
  windSpeed,
  high,
  low,
  icon,
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
        <p className="capitalize">{description}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={require(`../assets/icons/${icon}.jpg`)}
          alt="weather-icon"
          className="w-10 h-10 rounded-3xl "
        />
        <p className="text-5xl">{temp}°F</p>

        <div className="flex flex-col space-y-2 justify-end">
          <div className="flex font-light text-sm items-center justify-center">
          <UilTemperature size={18} className="mr-1" />
            <span className="capitalize">real feel</span>:
            <span className="font-medium ml-1">{feelsLike}°F</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{windSpeed}km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light ">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light ">
          Set: <span className="font-medium ml-1">07:35 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light ">
          High: <span className="font-medium ml-1">{high}°F</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light ">
          Low: <span className="font-medium ml-1">{low}°F</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
