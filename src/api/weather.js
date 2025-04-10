import { formatDate } from "../helper/formateDate.js";

const API_KEY = "37a44f5cd51942b78ee141400250504";
const BASE_URL = "https://api.weatherapi.com/v1/";

export async function fetchCurrentWeather(cityName) {
  try {
    const response = await fetch(
      `${BASE_URL}current.json?key=${API_KEY}&q=${cityName}&aqi=no`
    );

    if (!response.ok) throw Error(`Response server error: ${response.status}`);
    const data = await response.json();
    // Using helper for formatting date
    const { day, date } = formatDate(data.location.localtime);
    return {
      ...data,
      day,
      date,
    };
  } catch (error) {
    throw error;
  }
}
