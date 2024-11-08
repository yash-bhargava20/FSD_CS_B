const api_key = "9c2679771a652376af848440809a7df9";
let city = "Delhi";
async function getWeatherReport() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}
getWeatherReport();
