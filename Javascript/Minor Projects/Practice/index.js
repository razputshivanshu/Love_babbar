
console.log("I can control only two things!! attitude and the effort. From now I am going to focus to master these two things only");

async function fetchWeather() {
  const apiKey = '16ec80a3769a04cd7ab72520b0686cb6';  // Replace with your OpenWeatherMap API key
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayWeather(data) {
  const weatherResult = document.getElementById('weatherResult');
  weatherResult.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

async function getCustomWeather() {
  try {
    let place = prompt("Enter the place:");
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bfd13a4ab1b74ae7986130317242405&q=${place}&aqi=no`);
    const data = await response.json();

    console.log("Whole data is", data);
    console.log("Current Weather is", `${data?.current?.temp_c}`);
  } catch (err) {
    console.log("error!!!!");
  }
}

getCustomWeather();
