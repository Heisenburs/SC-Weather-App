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
console.log(days[4]);

console.log(now.getMinutes());

let day = days[now.getDay()];
console.log(day);

let month = now.getMonth();
console.log(month);

let date = now.getDate();
console.log(date);

let year = now.getFullYear();
console.log(year);

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
console.log(hour);

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
console.log(minutes);

let currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = `${day}`;

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${month}/${date}/${year}`;

let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `${hour}:${minutes}`;

// Feature 2
function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#searchbar");
  let newCity = document.querySelector("h2");
  if (currentCity.value) {
    newCity.innerHTML = `${currentCity.value}`;
  } else {
    newCity.innerHTML = null;
  }
}

let form = document.querySelector("form.search");
form.addEventListener("submit", searchCity);

// Fahrenheit to Celsius
/*function changeDegree(event) {
  event.preventDefault();
  let h3 = document.querySelector("a.change");
  h3.innerHTML = `20°C`;
}
let change = document.querySelector("a.change");
change.addEventListener("click", changeDegree);*/

//API

function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function searchUpCity(city) {
  let apiKey = "9de1c9542ae6e003bf1ad4ffc2d52045";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchbar").value;
  searchUpCity(city);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);
