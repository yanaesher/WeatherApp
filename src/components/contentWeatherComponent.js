export function createWeatherContent(weatherCard) {
  const weatherContentElement = document.createElement("div");
  weatherContentElement.className = "weather__content";
  weatherContentElement.append(weatherCard);
  return weatherContentElement;
}
