import {
  CITY_NAME_INPUT_ID,
  SEARCH_WEATHER_BUTTON_ID,
  WEATHER_SEARCH_FORM_ID,
} from "../constants.js";

export function createSearchWeather() {
  const headerElement = document.createElement("header");
  headerElement.className = "weather__header";
  headerElement.innerHTML = `
  <div class="container">
 <h1 class="weather__title">Weather App</h1> 
 <form id= ${WEATHER_SEARCH_FORM_ID}>
  <input type="text" id=${CITY_NAME_INPUT_ID} name="city" placeholder="Enter the city name">
  <button type="submit" id=${SEARCH_WEATHER_BUTTON_ID}>Find</button>
</form>
</div>
  `;
  return headerElement;
}
