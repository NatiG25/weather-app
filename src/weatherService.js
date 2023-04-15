const API_KEY = "1314a941cd82ca684a43da5b8c5b171f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getCurrentWeather = (endpoint, searchParams) => {
  const url = new URL(BASE_URL + endpoint);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((data) => data.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: {lon,lat},
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    name,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    details,
    icon,
    temp,
    temp_max,
    temp_min,
    feels_like,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
  };
};

const getFormattedCurrentWeather = async (searchParams) => {
  const formattedCurrentWeather = await getCurrentWeather(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

export default getFormattedCurrentWeather;
