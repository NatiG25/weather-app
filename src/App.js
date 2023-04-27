import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

function App() {
  const [query, setQuery] = useState({ q: "tokyo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const messgae = query.q ? query.q : "current location.";

      toast.info("Fetching data for " + messgae);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`Successfully featched ${data.name}'s weather.`);

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  console.log(weather);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";

    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) {
      return "from-cyan-700 to-blue-700";
    } else {
      return "from-yellow-700 to-orange-700";
    }
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title={"Hourly Forecast"} key={v4()} items={weather.hourly} />
          <Forecast title={"Daily Forecast"} key={v4()} items={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
