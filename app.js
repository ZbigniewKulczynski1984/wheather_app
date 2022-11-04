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

const getWeather = () => {
	const city = input.value || "Krakow";
	const URL = API_URL + city + API_KEY + API_UNITS;

    axios
    .get(URL)
    .then((res) => {
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather);

        cityName.textContent = res.data.name;
        temperature.textContent = Math.floor(temp) + "°C";
        humidity.textContent = Math.floor(hum) + "%";
        weather.textContent = status.main;

        warning.textContent = "";
        input.value = "";

        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute("src", "./img/thunder.jpg");
        } else if (status.id >= 300 && status.id < 400) {
            photo.setAttribute("src", "./img/drizzle.jpg");
        } else if (status.id >= 500 && status.id < 600) {
            photo.setAttribute("src", "./img/rain.jpg");
        } else if (status.id >= 600 && status.id < 700) {
            photo.setAttribute("src", "./img/ice.jpg");
        } else if (status.id >= 701 && status.id < 800) {
            photo.setAttribute("src", "./img/fog.jpg");
        } else if (status.id === 800) {
            photo.setAttribute("src", "./img/sun.jpg");
        } else if (status.id >= 801 && status.id < 900) {
            photo.setAttribute("src", "./img/cloud.jpg");
        } else {
            photo.setAttribute("src", "./img/error.jpg");
        }
    })
    .catch(() => (warning.textContent = "Write correct city name..."));
};

const enterCheck = (e) => {
	if (e.key === "Enter") {
		getWeather();
	}
};

input.addEventListener('keyup', enterCheck)
button.addEventListener("click", getWeather);
