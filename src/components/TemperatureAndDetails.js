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
  low
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
        <p className="capitalize">{description}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
          alt=""
          className="w-20 "
        />
        <p className="text-5xl">{temp}°C</p>

        <div className="flex flex-col space-y-2 justify-end">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1 " />
            <span className="capitalize">real feel</span>:
            <span className="font-medium ml-1">{feelsLike}°C</span>
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
          High: <span className="font-medium ml-1">{high}°C</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light ">
          Low: <span className="font-medium ml-1">{low}°C</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
