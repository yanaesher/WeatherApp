import { createSearchWeather } from "../components/searchWeatherComponent.js";
import { USER_INTERFACE_ID } from "../constants.js";

export function initWeatherContainer() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const searchElement = createSearchWeather();
  userInterface.append(searchElement);
}
