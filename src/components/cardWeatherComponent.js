import {
  WEATHER_LOCATION_ID,
  WEATHER_TEMP_ID,
  WEATHER_CONDITION_TEXT_ID,
  WEATHER_CONDITION_PIC_ID,
  WEATHER_CARD_ID,
} from "../constants.js";

export function createCardSWeather(weatherData) {
  const cardElement = document.createElement("div");
  cardElement.id = `${WEATHER_CARD_ID}`;
  cardElement.innerHTML = `
  <div class="weather__card-date"> 
  </div>
 <span>${weatherData.day}</span>
 <span>${weatherData.date}</span>
 </div>
<div class="weather__card-body">

 <div class="weather__card-content"> 
 <div id="${WEATHER_LOCATION_ID}">${weatherData.location.name}</div>
 <div id ="${WEATHER_TEMP_ID}">${weatherData.current.temp_c}°</div>
 <div id ="${WEATHER_CONDITION_TEXT_ID}">${weatherData.current.condition.text}</div>
 </div>

<div class="weather__card-pic">
<img id="${WEATHER_CONDITION_PIC_ID}" src='${weatherData.current.condition.icon}'>
 </div>
 </div>
 `;
  return cardElement;
}
