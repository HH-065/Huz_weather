let apiKey = "b0fcff3e0c4de5af0d5d4694adfac114"; 

function getWeather() {
  let city = document.getElementById("cityInput").value;
  let weatherResult = document.getElementById("weatherResult");

  if (city === "") {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      } else {
        weatherResult.innerHTML = "City not found.";
      }
    })
    .catch(error => {
      weatherResult.innerHTML = "Error fetching data.";
      console.error(error);
    });
}
