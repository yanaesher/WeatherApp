import { initWeatherContainer } from "./containers/weatherContainer.js";

function loadApp() {
  initWeatherContainer();
}

window.addEventListener("DOMContentLoaded", loadApp);
