// script.js

const cities = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { name: "Toronto", lat: 43.65107, lng: -79.347015 },
    { name: "Mumbai", lat: 19.076, lng: 72.8777 },
    { name: "Dubai", lat: 25.276987, lng: 55.296249 },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Berlin", lat: 52.52, lng: 13.405 },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018 }
  ];
  
  const citySelect = document.getElementById("city-select");
  const todayCard = document.getElementById("today-card");
  const tomorrowCard = document.getElementById("tomorrow-card");
  
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });
  
  citySelect.addEventListener("change", () => {
    const selected = cities.find(c => c.name === citySelect.value);
    fetchSunData(selected.lat, selected.lng);
  });
  
  function useGeolocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      fetchSunData(latitude, longitude);
    });
  }
  
  function fetchSunData(lat, lng) {
    const todayUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`;
    const tomorrowUrl = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`;
  
    Promise.all([fetch(todayUrl), fetch(tomorrowUrl)])
      .then(async ([res1, res2]) => {
        const todayData = await res1.json();
        const tomorrowData = await res2.json();
  
        renderCard(todayCard, "Today", todayData.results);
        renderCard(tomorrowCard, "Tomorrow", tomorrowData.results);
      })
      .catch(err => {
        console.error("API error:", err);
      });
  }
  
  function renderCard(container, title, data) {
    container.innerHTML = `
      <h3>${title}</h3>
      <p><span>🌅</span> Sunrise: ${data.sunrise}</p>
      <p><span>🌇</span> Sunset: ${data.sunset}</p>
      <p><span>🌤️</span> Dawn: ${data.dawn}</p>
      <p><span>🌘</span> Dusk: ${data.dusk}</p>
      <p><span>🕛</span> Solar Noon: ${data.solar_noon}</p>
      <p><span>📏</span> Day Length: ${data.day_length}</p>
      <p><span>🕒</span> Timezone: ${data.timezone}</p>
    `;
  }
  
  // Initial load
  fetchSunData(cities[0].lat, cities[0].lng);
  
