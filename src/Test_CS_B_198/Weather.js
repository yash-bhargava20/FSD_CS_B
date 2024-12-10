const api_key = "9c2679771a652376af848440809a7df9";

async function getWeatherReport() {
  const city = document.getElementById("cityInput").value;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    if (data.cod == 200) {
      displayWeatherData(data);
    } else {
      document.getElementById("weatherDetails").innerHTML = "City not Found";
    }
  } catch (error) {
    console.log("error");
    document.getElementById("weatherDetails").innerHTML =
      "Error in fetching data";
  }
}
getWeatherReport();
const displayWeatherData = (data) => {
  const weatherDetails = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;

  document.getElementById("weatherDetails").innerHTML = weatherDetails;
};
