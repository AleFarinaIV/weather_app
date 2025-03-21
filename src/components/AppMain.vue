<script>
import {store} from "../store.js"
import {storeCurrent} from "../storeCurrent.js"
import { storeDaily } from "../storeDaily.js";
import { storeHourly } from "../storeHourly.js";

export default {
  data() {
    return {
      store,
      storeCurrent,
      storeDaily,
      storeHourly
    }
  },
  mounted() {
  },
  methods: {
    isDay() {
      const isDay = storeCurrent.valueArray.is_day;
      return isDay
    },
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
    // getWeatherIcons(code) {
    //   const weatherIcons = {
    //     0: "☀️", // Sereno
    //     1: "🌤️", // Prevalentemente sereno
    //     2: "⛅", // Parzialmente nuvoloso
    //     3: "☁️", // Nuvoloso
    //     45: "🌫️", // Nebbia
    //     48: "🌫️", // Nebbia con brina
    //     51: "🌦️", // Pioviggine leggera
    //     53: "🌦️", // Pioviggine moderata
    //     55: "🌧️", // Pioviggine intensa
    //     61: "🌧️", // Pioggia leggera
    //     63: "🌧️", // Pioggia moderata
    //     65: "⛈️", // Pioggia intensa
    //     71: "❄️", // Neve leggera
    //     73: "❄️", // Neve moderata
    //     75: "❄️", // Neve intensa
    //     80: "🌦️", // Rovesci leggeri
    //     81: "🌧️", // Rovesci moderati
    //     82: "⛈️", // Rovesci intensi
    //     95: "⛈️", // Temporali
    //     96: "⛈️", // Temporali con grandine leggera
    //     99: "⛈️", // Temporali con grandine forte
    //   };

    //   return weatherIcons[code] || "❓";
    // },
    getWeatherIcons(code, isDay) {
      const moonIcons = {
        0: isDay ? 'bi bi-sun-fill text-warning' : "bi bi-moon-stars-fill",
        1: isDay ? 'bi bi-brightness-low-fill text-warning' : "bi bi-moon-fill",
        2: isDay ? 'bi bi-cloud-sun-fill' : "bi bi-cloud-moon-fill",
        3: 'bi bi-clouds-fill',
        45: 'bi bi-cloud-fog2-fill',
        48: 'bi bi-cloud-fog2-fill',
        51: 'bi bi-cloud-drizzle-fill',
        53: 'bi bi-cloud-rain-fill',
        55: 'bi bi-cloud-rain-heavy-fill',
        61: 'bi bi-cloud-drizzle-fill',
        63: 'bi bi-cloud-rain-fill',
        65: 'bi bi-cloud-rain-heavy-fill',
        71: 'bi bi-cloud-snow-fill',
        73: 'bi bi-snow',
        75: 'bi bi-snow2',
        80: 'bi bi-cloud-drizzle-fill',
        81: 'bi bi-cloud-rain-fill',
        82: 'bi bi-cloud-rain-heavy-fill',
        95: 'bi bi-cloud-lightning-rain-fill',
        96: 'bi bi-cloud-lightning-rain-fill',
        99: 'bi bi-cloud-lightning-rain-fill'
      };

      return moonIcons[code] || "";
    },
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
    },
    getHours() {
      if (!storeHourly.valueArray || !storeHourly.valueArray.time) return [];

      return storeHourly.valueArray.time.map(hour => hour.slice(11,13));
    }
  }
}
</script>

<template>

  <div class="container">
    <div class="row p-2">

      <div class="col-12 text-center">
        <div class="mb-3 rounded-4 text-white">
          <div class="d-flex flex-column justify-content-between">
            <!-- <p class="fs-smallest mb-0">{{ store.dateOnly.slice(0,5) }}</p> -->
            <p class="fs_34 fw-light mb-0">{{ store.city }}</p>
            <div class="mb-3 mx-2">
              <p class="m-0 fw-lighter fs_80 px-3">{{ Math.ceil(storeCurrent.valueArray.temperature_2m) }}&#xb0;</p>
              <!-- Giorno -->
              <!-- <h4 v-if="isDay()" class="m-0">
                <span class="mb-2">{{ getWeatherDescription(storeCurrent.valueArray.weather_code) }}</span>
                {{ getWeatherIcons(storeCurrent.valueArray.weather_code) }}
              </h4> -->
              <!-- Notte -->
              <h4 class="m-0">
                <span class="mb-2">{{ getWeatherDescription(storeCurrent.valueArray.weather_code) }} </span>
                <i class="ms-2 fs-6" :class="getWeatherIcons(storeCurrent.valueArray.weather_code, storeCurrent.valueArray.is_day)"></i>
              </h4>

              <div v-if="storeDaily.valueArray.temperature_2m_max && storeDaily.valueArray.temperature_2m_max.length > 0">
                <span>MAX: {{ Math.ceil(storeDaily.valueArray.temperature_2m_max[0]) }}&#xb0; </span><span>MIN: {{ Math.ceil(storeDaily.valueArray.temperature_2m_min[0]) }}&#xb0;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 py-2 glass_effect rounded-4 text-white mb-3">
        <div class="border-bottom fs_10">
          <p class="mb-1">Previsioni della giornata</p>
        </div>
        <!-- carosello ora per ora -->
        <div class="my_carousel d-flex">
          <div v-if="storeHourly.valueArray.weather_code && storeHourly.valueArray.weather_code.length > 0" 
            v-for="hour, index in getHours" :key="index" class="me-2">
            <div class="d-flex flex-column align-items-center me-2">
              {{ hour }}
              <i :class="getWeatherIcons(storeHourly.valueArray.weather_code[index])"></i>
              <p class="m-0">{{ Math.ceil(storeHourly.valueArray.temperature_2m[index]) }}&#xb0;</p>
            </div>
          </div>
          <div v-else>
            NOPE
          </div>
        </div>
      </div>

      <div class="col-12 py-2 glass_effect rounded-4 text-white">
        <div class="border-bottom fs_10">
          <p class="mb-1"><i class="bi bi-calendar3"></i> Previsioni per la settimana</p>
        </div>
        <div class="row">
          <div v-for="date, index in formattedDates.slice(1)" :key="index" class="col-4 p-1">
            <div class="glass_effect rounded-4">
                <div class="border-bottom d-flex flex-column align-items-center p-0 py-2 text-center">
                  <p class="m-0">{{ date }}</p>
                  <i :class="getWeatherIcons(storeDaily.valueArray.weather_code[index + 1])"></i>
                  <p class="m-0"><i class="bi bi-arrow-up"></i> {{ Math.ceil(storeDaily.valueArray.temperature_2m_max[index + 1]) }} <i class="bi bi-arrow-down"></i> {{ Math.ceil(storeDaily.valueArray.temperature_2m_min[index + 1]) }}°</p>
                </div>
              </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  
</template>

<style scoped>

.fs_10 {
  font-size: 10px;
}
.fs_34 {
  font-size: 34px;
}

.fs_80 {
  font-size: 80px;
}

.glass_effect {
  backdrop-filter: blur(80px);
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

.my_carousel {
  max-width: 100%;
  overflow-x: auto;
  margin-top: 7px;
}

</style>
