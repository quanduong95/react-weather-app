import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "d31816b3b8fc5855dbcf5b41e5ddd60f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const BASE_URL2 = "https://api.openweathermap.org/data/2.5/onecall?";

function App() {
  //states
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [city, setCity] = useState("Paris");






  //fetch API
  const fetchData = async (location) => {

    try {
      const res = await axios.get(
        `${BASE_URL}${location}&appid=${API_KEY}&units=metric`
      );
      const lon = res.data.coord.lon;
      const lat = res.data.coord.lat;
      setHigh(res.data.main.temp_max);
      setLow(res.data.main.temp_min);
      setCity(location);

      const res2 = await axios.get(
        `${BASE_URL2}lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}&units=metric`
      );
      setDescription(res2.data.current.weather[0].description);
      setTemp(res2.data.current.temp.toFixed(0));
      setHumidity(res2.data.current.humidity);
      setWind(res2.data.current.wind_speed);
      setFeelsLike(res2.data.current.feels_like);
    } catch (err) {
      alert("Invalid city name");
    }
  };

  //useEffect hook
  useEffect(() => {
    fetchData(city);
  }, [city]);
  return (
    <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-40">
      <TopButtons city={city} setCity={setCity} />
      <Inputs setCity={setCity} />
      <TimeAndLocation city={city} />
      <TemperatureAndDetails
        description={description}
        feelsLike={feelsLike}
        humidity={humidity}
        windSpeed={wind}
        temp={temp}
        high={high}
        low={low}
      />
      <Forecast title="hourly forecast" />
    </div>
  );
}

export default App;
