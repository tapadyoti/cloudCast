const input = document.querySelector(".input");
const search = document.querySelector(".searchbtn");

const wImg = document.querySelector(".wImg");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".cityName");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".windSpeed");

const apiKey = "9a51e8425cac3d5284cd5c1607cf25ee";

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);

    temp.innerText = Math.round(data.main.temp) + "°c";
    cityName.innerText = data.name;
    humidity.innerText = data.main.humidity + "%";
    windSpeed.innerText = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        wImg.src = "images/cloud.png";
    } else if (data.weather[0].main == "Clear") {
        wImg.src = "images/clear.png";
    } else if (data.weather[0].main == "Mist") {
        wImg.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
        wImg.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        wImg.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Haze") {
        wImg.src = "images/haze.png";
    } else if (data.weather[0].main == "Fog") {
        wImg.src = "images/fog.png";
    }
}

search.addEventListener("click", () => {
    const searchCity = input.value;
    if (searchCity) {
        getWeather(searchCity);
        input.value = "";
    } else {
        alert("Please enter a city name");
    }
});
