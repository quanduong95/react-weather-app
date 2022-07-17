import React from "react";

function Forecast({title}) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2"></hr>
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30PM</p>
          <img
            className="w-12 my-1"
            src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
            alt=""
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30PM</p>
          <img
            className="w-12 my-1"
            src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
            alt=""
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30PM</p>
          <img
            className="w-12 my-1"
            src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
            alt=""
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30PM</p>
          <img
            className="w-12 my-1"
            src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
            alt=""
          />
          <p className="font-medium">22°C</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30PM</p>
          <img
            className="w-12 my-1"
            src="https://previews.123rf.com/images/get4net/get4net1902/get4net190204147/116220386-cloudy-weather-forecast.jpg"
            alt=""
          />
          <p className="font-medium">22°C</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
