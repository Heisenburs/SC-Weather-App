let now = new Date();
console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let day = days[now.getDay()];

let month = months[now.getMonth()];

let date = now.getDate();

let year = now.getFullYear();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = `${day}`;

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${month}/${date}/${year}`;

let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `${hour}:${minutes}`;

let form = document.querySelector("form.search");
form.addEventListener("submit", searchCity);

function displayWeatherCondition(response) {
  console.log(response);
  let location = document.querySelector(".location");
  location.innerHTML = response.data.name;
  celsiusTemperature = response.data.main.temp;

  document.querySelector(".tempy").innerHTML = `${Math.round(
    celsiusTemperature
  )}°`;
  console.log(response.data.main.humidity);
  console.log(response.data.weather[0].description);
  wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  let humidElement = document.querySelector("#humidity");
  humidElement.innerHTML = `${response.data.main.humidity}%`;
  let description = document.querySelector(".description");
  description.innerHTML = response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "9de1c9542ae6e003bf1ad4ffc2d52045";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchbar");
  searchCity(city.value);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".tempy");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°`;
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".tempy");
  temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}°`;
}
let celsiusTemperature = null;

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector(".fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector(".celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);
