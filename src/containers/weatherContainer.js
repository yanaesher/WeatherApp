import { createSearchWeather } from "../components/searchWeatherComponent.js";
import { createCardSWeather } from "../components/cardWeatherComponent.js";
import { createWeatherContent } from "../components/contentWeatherComponent.js";
import {
  USER_INTERFACE_ID,
  CITY_NAME_INPUT_ID,
  WEATHER_SEARCH_FORM_ID,
  WEATHER_LOCATION_ID,
  WEATHER_TEMP_ID,
  WEATHER_CONDITION_TEXT_ID,
  WEATHER_CARD_ID,
  WEATHER_CONDITION_PIC_ID,
} from "../constants.js";
import { fetchCurrentWeather } from "../api/weather.js";

export async function initWeatherContainer() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  //Creating search for Weather app
  const searchElement = createSearchWeather();
  userInterface.append(searchElement);

  //Get city data and show current weather card
  const searchFormElement = document.getElementById(WEATHER_SEARCH_FORM_ID);
  searchFormElement.addEventListener("submit", handleWeatherSearchForm);

  const contentWeatherElement = createWeatherContent();
  userInterface.append(contentWeatherElement);

  const containerContentWeather = document.querySelector(
    ".weather__content .container"
  );
  const defaultFetchWeather = await fetchCurrentWeather("London");
  const cardElement = createCardSWeather(defaultFetchWeather);
  containerContentWeather.append(cardElement);
}

function getCityName() {
  const input = document.getElementById(CITY_NAME_INPUT_ID);

  if (input.value.trim().length > 0) {
    return input.value;
  }

  alert("City name cannot be empty");
  throw new Error("City name cannot be empty");
}

async function handleWeatherSearchForm(event) {
  event.preventDefault();

  const cityName = getCityName();

  try {
    //Get current weather data;
    const currentWeatherData = await fetchCurrentWeather(cityName);
    updateCard(currentWeatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to load weather data. Please try again.");
  }
}

function updateCard(weatherData) {
  const cardElement = document.getElementById(WEATHER_CARD_ID);

  cardElement.querySelector(`#${WEATHER_LOCATION_ID}`).textContent =
    weatherData.location.name;

  cardElement.querySelector(
    `#${WEATHER_TEMP_ID}`
  ).textContent = `${weatherData.current.temp_c}°`;

  cardElement.querySelector(`#${WEATHER_CONDITION_TEXT_ID}`).textContent =
    weatherData.current.condition.text;

  cardElement.querySelector(`#${WEATHER_CONDITION_PIC_ID}`).src =
    weatherData.current.condition.icon;
}
