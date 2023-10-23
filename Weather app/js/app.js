/*=================Preloder animation=================*/
const loader = document.querySelector('.preloader')

setTimeout(() => {
  loader.style.display ="none";
}, 6600);


/*=================Weather Api=================*/
const apiKey = "cb2bd477437124c7809f58cda001044c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   let data = await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = Math.floor(data.main.humidity) + "%";
   document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/hr";

   if (data.weather[0].main =="Clouds") {
      weatherIcon.src = "images/clouds.png";
   }
   else if (data.weather[0].main =="Clear") {
      weatherIcon.src = "images/clear.png";
   }
   else if (data.weather[0].main =="Rain") {
      weatherIcon.src = "images/rain.png";
   }
   else if (data.weather[0].main =="Drizzle") {
      weatherIcon.src = "images/drizzle.png";
   }
   else if (data.weather[0].main =="Mist") {
      weatherIcon.src = "images/mist.png";
   }
   else if (data.weather[0].main =="Snow") {
      weatherIcon.src = "images/snow.png";
   }
}
   searchBtn.addEventListener("click", () => {
      getWeather(search.value);
   });
   
   search.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
         getWeather(search.value);
      }
   });

