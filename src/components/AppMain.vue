<script>
import {store} from "../store.js"
import {storeCurrent} from "../storeCurrent.js"
import { storeDaily } from "../storeDaily.js";

export default {
  data() {
    return {
      store,
      storeCurrent,
      storeDaily,
    }
  },
  mounted() {
  },
  methods: {
    getWeatherDescription(code) {

      const weatherMap = {
        0: "Sereno",
        1: "Prevalentemente sereno",
        2: "Parzialmente nuvoloso",
        3: "Nuvoloso",
        45: "Nebbia",
        48: "Nebbia con brina",
        51: "Pioviggine leggera",
        53: "Pioviggine moderata",
        55: "Pioviggine intensa",
        61: "Pioggia leggera",
        63: "Pioggia moderata",
        65: "Pioggia intensa",
        71: "Neve leggera",
        73: "Neve moderata",
        75: "Neve intensa",
        80: "Rovesci leggeri",
        81: "Rovesci moderati",
        82: "Rovesci intensi",
        95: "Temporali",
        96: "Temporali con grandine leggera",
        99: "Temporali con grandine forte"
      };

      return weatherMap[code] || "Dati non disponibili";
    },
    getWeatherIcons(code) {
      const weatherIcons = {
        0: "☀️", // Sereno
        1: "🌤️", // Prevalentemente sereno
        2: "⛅", // Parzialmente nuvoloso
        3: "☁️", // Nuvoloso
        45: "🌫️", // Nebbia
        48: "🌫️", // Nebbia con brina
        51: "🌦️", // Pioviggine leggera
        53: "🌦️", // Pioviggine moderata
        55: "🌧️", // Pioviggine intensa
        61: "🌧️", // Pioggia leggera
        63: "🌧️", // Pioggia moderata
        65: "⛈️", // Pioggia intensa
        71: "❄️", // Neve leggera
        73: "❄️", // Neve moderata
        75: "❄️", // Neve intensa
        80: "🌦️", // Rovesci leggeri
        81: "🌧️", // Rovesci moderati
        82: "⛈️", // Rovesci intensi
        95: "⛈️", // Temporali
        96: "⛈️", // Temporali con grandine leggera
        99: "⛈️", // Temporali con grandine forte
      };

      return weatherIcons[code] || "❓";
    }
  },
  computed: {
    formattedDates() {
    if (!storeDaily.valueArray || !storeDaily.valueArray.time) return [];
    
    return storeDaily.valueArray.time.map(dateStr => {
      const dateObj = new Date(dateStr);
      return isNaN(dateObj) ? dateStr : dateObj.toLocaleDateString("it-IT", {
        month: "2-digit",
        day: "2-digit"
      });
    });
  }
  }
}
</script>

<template>

  <div class="container mt-3">
    <div class="row p-2">

      <div class="jumbo_bg mb-3 rounded-4 text-white">
        <div class="col-12 jumbo_col">
          <div class="d-flex flex-column justify-content-between">
            <h1 class="fw-bolder mt-2 mb-0">{{ store.city }}</h1>
            <p class="fs-smallest">{{ store.dateOnly.slice(0,5) }}</p>
          </div>
        </div>

        <div class="glass-effect">
          <h4 class="m-0">{{ getWeatherIcons(storeCurrent.valueArray.weather_code) }}</h4>
          <p class="mb-2">{{ getWeatherDescription(storeCurrent.valueArray.weather_code) }}</p>
          <div class="col-12 d-flex justify-content-between">
            <div class="glass_effect border border-2 border-warning rounded-4 mb-3">
                <div class="d-flex p-0 py-2 text-center ms-3">
                  <div class="d-flex flex-column p-1 fs_small fs-md-3">
                    <p class="m-0">Wind Speed</p>
                    <p class="m-0">{{ storeCurrent.valueArray.wind_speed_10m }} {{ storeCurrent.unitsArray.wind_speed_10m }}</p>
                  </div>
                  <div class="d-flex flex-column p-1 fs_small fs-md-3 mx-2">
                    <p class="m-0">Humidity</p>
                    <p class="m-0">{{ storeCurrent.valueArray.relative_humidity_2m }}{{ storeCurrent.unitsArray.relative_humidity_2m }}</p>
                  </div>
                  <div class="d-flex flex-column p-1 fs_small fs-md-3 me-3">
                    <p class="m-0">Nuvole</p>
                    <p class="m-0">{{ storeCurrent.valueArray.cloud_cover }}{{ storeCurrent.unitsArray.cloud_cover }}</p>
                  </div>
                </div>
            </div>
            <div class="glass_effect border border-2 border-warning rounded-4 mb-3 d-flex flex-column justify-content-center mx-2">
              <p class="m-0 fs-1 fw-bolder px-3">{{ Math.ceil(storeCurrent.valueArray.temperature_2m) }}°</p>
            </div>
          </div>
        </div>
      </div>

      <div v-for="date, index in formattedDates.slice(1)" class="col-4 p-1">
        <div class="card">
            <div class="card-body d-flex flex-column align-items-center p-0 py-2 text-center">
              <p class="m-0">{{ date }}</p>
              <p class="m-0">{{ getWeatherIcons(storeDaily.valueArray.weather_code[index + 1]) }}</p>
            </div>
          </div>
      </div>

    </div>
  </div>
  
</template>

<style>

.glass_effect {
  backdrop-filter: blur(30px);
  box-shadow: -5px 0px 10px rgb(245, 213, 6);
}

.jumbo_bg {
  background-image: url("../assets/hot-cloud-cover-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.jumbo_col {
  position: relative;
  height: 170px;

  .jumbo_box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.fs_small {
  font-size: 10px;
}

.img_box {
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>
