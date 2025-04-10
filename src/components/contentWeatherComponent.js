export function createWeatherContent() {
  const weatherContentElement = document.createElement("div");
  weatherContentElement.className = "weather__content";

  const container = document.createElement("div");
  container.className = "container";

  weatherContentElement.append(container);
  return weatherContentElement;
}
