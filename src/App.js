import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedCurrentWeather from "./weatherService";

function App() {

  const experiment = async () => {
    const result = await getFormattedCurrentWeather({q: 'London'})
    // const result2 = await getCurrentWeather('weather', {q: 'London'})

    console.log(result);
  }

  experiment();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title={'Hourly Forecast'} />
      <Forecast title={'Monthly Forecast'} />
    </div>
  );
}

export default App;
