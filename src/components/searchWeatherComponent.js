import { CITY_NAME_INPUT_ID, SEARCH_WEATHER_BUTTON_ID } from "../constants.js";

export function createSearchWeather() {
  const headerElement = document.createElement("header");
  headerElement.className = "weather__header";
  headerElement.innerHTML = `
 <h1 class="weather__title"></h1> 
 <form class= "weather__search">
  <label for="city">Enter the city name:</label>
  <input type="text" id="${CITY_NAME_INPUT_ID}" name="city" placeholder="Enter the city name">
  <button type="submit" id=${SEARCH_WEATHER_BUTTON_ID}>Find</button>
</form>
  `;
  return headerElement;
}
