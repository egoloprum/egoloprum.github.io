const apiKey = '25521905355c2e4c24e41a1874565b95';

// Mapping of weather condition codes to icon class names (Depending on Openweather Api Response)
const weatherIconMap = {
   '01d': 'sun',
   '01n': 'moon',
   '02d': 'sun',
   '02n': 'moon',
   '03d': 'cloud',
   '03n': 'cloud',
   '04d': 'cloud',
   '04n': 'cloud',
   '09d': 'cloud-rain',
   '09n': 'cloud-rain',
   '10d': 'cloud-rain',
   '10n': 'cloud-rain',
   '11d': 'cloud-lightning',
   '11n': 'cloud-lightning',
   '13d': 'cloud-snow',
   '13n': 'cloud-snow',
   '50d': 'water',
   '50n': 'water'
};

function fetchWeatherData(location) {
   // Construct the API url with the location and api key
   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=moscow&appid=${apiKey}&units=metric`;

   // Fetch weather data from api
   fetch(apiUrl).then(response => response.json()).then(data => {
      // Update todays info
      const todayWeather = data.list[0].weather[0].description;
      const todayTemperature = `${Math.round(data.list[0].main.temp)}°C`;
      const todayWeatherIconCode = data.list[0].weather[0].icon;

      document.querySelector(".weather-icon").children[0].className = `bx bx-${weatherIconMap[todayWeatherIconCode]}`;
      document.querySelector(".weather-temp").innerHTML = todayTemperature;
      document.querySelector(".weather-type").innerHTML = todayWeather;

      // Update next 5 days weather
      const today = new Date();
      const nextDaysData = data.list.slice(1);

      const uniqueDays = new Set();
      let count = 0;
      document.querySelector(".days-list").innerHTML = '';
      for (const dayData of nextDaysData) {
         const forecastDate = new Date(dayData.dt_txt);
         const dayAbbreviation = forecastDate.toLocaleDateString('en', { weekday: 'short' });
         const dayTemp = `${Math.round(dayData.main.temp)}°C`;
         const iconCode = dayData.weather[0].icon;

         // Ensure the day isn't duplicate and today
         if (!uniqueDays.has(dayAbbreviation) && forecastDate.getDate() !== today.getDate()) {
               uniqueDays.add(dayAbbreviation);
               document.querySelector(".days-list").innerHTML += `
               
                  <li>
                     <span>${dayAbbreviation}</span>
                     <i class='bx bx-${weatherIconMap[iconCode]}'></i>
                     <span class="day-temp">${dayTemp}</span>
                  </li>

               `;
               count++;
         }

         // Stop after getting 4 distinct days
         if (count === 5) break;
      }
   }).catch(error => {
      alert(`Error fetching weather data: ${error} (Api Error)`);
   });
}

// Fetch weather data on document load for default location (Germany)
document.addEventListener('DOMContentLoaded', () => {
   const defaultLocation = 'Moscow';
   fetchWeatherData(defaultLocation);
});
