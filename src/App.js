import "./App.scss";
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
  const [city, setCity] = useState("Sacramento");
  const [icon, setIcon] = useState("01d");
  const [timezone, setTimezone] = useState("Europe/Paris");

  //fetch API
  const fetchData = async (location) => {
    const res = await axios.get(
      `${BASE_URL}${location}&appid=${API_KEY}&units=imperial`
    );
    const lon = res.data.coord.lon;
    const lat = res.data.coord.lat;
    setHigh(res.data.main.temp_max);
    setLow(res.data.main.temp_min);
    setCity(location);
    setIcon(res.data.weather[0].icon);

    const res2 = await axios.get(
      `${BASE_URL2}lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}&units=imperial`
    );
    setDescription(res2.data.current.weather[0].description);
    setTemp(res2.data.current.temp.toFixed(0));
    setHumidity(res2.data.current.humidity);
    setWind(res2.data.current.wind_speed);
    setFeelsLike(res2.data.current.feels_like);
    setTimezone(res2.data.timezone);
  };

  // useEffect hook
  useEffect(() => {
    fetchData(city);
  }, [city]);
  return (
    <div className='main-wrapper'>
      <div className="app-wrapper mx-auto max-w-screen-md  py-5 px-32">
        <TopButtons city={city} setCity={setCity} />
        <Inputs setCity={setCity} />
        <TimeAndLocation city={city}
          timezone= {timezone}
        />
        <TemperatureAndDetails
          description={description}
          feelsLike={feelsLike}
          humidity={humidity}
          windSpeed={wind}
          temp={temp}
          high={high}
          low={low}
          icon={icon}
        />
        <Forecast title="hourly forecast" icon={icon} temp={temp} />
      </div>
    </div>
  );
}

export default App;
