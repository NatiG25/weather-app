import { DateTime } from "luxon";

const API_KEY = "1314a941cd82ca684a43da5b8c5b171f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getCurrentWeather = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
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

const formatForcastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((h) => {
    return {
      title: formatLocalTime(h.dt, timezone, "hh:mm a"),
      temp: h.temp.day,
      icon: h.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getCurrentWeather(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForcastWeather = await getCurrentWeather("onecall", {
    lat,
    lon,
    exclude: "current, minutely, alerts",
    units: searchParams.units,
  }).then(formatForcastWeather);

  return { ...formattedCurrentWeather, ...formattedForcastWeather };
};

const formatLocalTime = (
  secs,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs).setZone(timezone).toFormat(format);
};

const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatLocalTime, iconUrlFromCode };
