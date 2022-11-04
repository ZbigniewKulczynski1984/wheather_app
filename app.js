const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=52d2be5f0d491740497f4366e9a06006";
const API_UNITS = "&units=metric";
