<script>
import {store} from "./stores/store.js"
import {storeCurrent} from "./stores/storeCurrent.js"
import { storeDaily } from "./stores/storeDaily.js";
import { storeHourly } from "./stores/storeHourly.js";
import axios from 'axios'
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    this.getGeolocation();
  },
  mounted() {
    this.fetchWeatherData();
    setInterval(this.fetchWeatherData, 1800000)
  },
  // watch: {
  //   // Usiamo un watcher per chiamare getCurrentWeather quando cambiano latitudine e longitudine
  //   'store.latitude'(newVal) {
  //     if (newVal !== null && store.longitude !== null) {
  //       this.getCurrentWeather();
  //     }
  //   },
  //   'store.longitude'(newVal) {
  //     if (newVal !== null && store.latitude !== null) {
  //       this.getCurrentWeather();
  //     }
  //   }
  // },
  methods: {
    // function fetch
    fetchWeatherData() {
      this.getCurrentWeather();
      this.getDailyWeather()
      this.getHourlyWeather();
    },
    // function to get user geolocation
    getGeolocation() {
      if ("geolocation" in navigator) {
        store.loading = true;
        const datetime = new Date();
        store.dateOnly = datetime.toLocaleDateString();
        console.log(datetime);

        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Coordinate ricevute:", position.coords);
            store.latitude = position.coords.latitude;
            store.longitude = position.coords.longitude;
            store.loading = false;

            this.getCity();
            this.fetchWeatherData()
          },
          (error) => {
            store.loading = false;
            this.errorMessage = `Errore nella geolocalizzazione: ${error.message}`;
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        this.errorMessage = "Geolocation is not supported by your browser.";
      }
    },
    // function to get city
    getCity() {
      if (store.latitude && store.longitude) {
        // Nominatim API
        let apiCity = `reverse?lat=${store.latitude}&lon=${store.longitude}&zoom=10&addressdetails=1`
        let cityData = `${store.apiCityUrl}${apiCity}&format=json`;
  
        axios.get(cityData).then((result) => {
          if (result.data && result.data.address) {
            const address = result.data.address;
            const city = address.city || address.town || address.village || address.county;
            const country = result.data.address.country;

            console.log(`Città: ${city}, Paese: ${country}`);
            store.city = city;
            store.country = country;
          } else {
            console.warn("Dati non trovati nella risposta di reverse geocoding:", response.data);
          }
        }).catch(error => {
          console.error("Errore nella richiesta di reverse geocoding:", error);
        })
      } else {
        console.warn("Latitudine e longitudine non disponibili.");
      }
    },
    // current weather function
    getCurrentWeather() {
      if (store.latitude && store.longitude) {
        console.log("getCurrentWeather chiamata!"); // Per vedere se la funzione parte
        const apiLocation = `forecast?latitude=${store.latitude}&longitude=${store.longitude}`;
        const weatherValue = `${store.apiUrl}${apiLocation}${storeCurrent.currentApi}&timezone=auto`;
        console.log(weatherValue);
        
        //API call
        axios.get(weatherValue).then((result) => {
          console.log("Risultato API:", result); // Per vedere cosa riceviamo
          if (result.data) {
            storeCurrent.valueArray = result.data.current;
            storeCurrent.unitsArray = result.data.current_units;
            console.log("Dati salvati in storeCurrent.valueArray:", storeCurrent.valueArray);
            console.log("Dati salvati in storeCurrent.unitsArray:", storeCurrent.unitsArray);
          } else {
            console.warn("Dati non trovati in result.data:", result.data);
          }
        }).catch((error) => {
          console.error("Errore nella richiesta API: ", error);
        });

      }
    },
    // daily weather function
    getDailyWeather() {
      if (store.latitude && store.longitude) {
        console.log("getDailyWeather chiamata!"); // Per vedere se la funzione parte
        const apiLocation = `forecast?latitude=${store.latitude}&longitude=${store.longitude}`;
        const weatherValue = `${store.apiUrl}${apiLocation}${storeDaily.dailyApi}&timezone=auto`;
        console.log(weatherValue);

        // API call
        axios.get(weatherValue).then((result) => {
          console.log("Risultato API:", result);
          if (result.data) {
            storeDaily.valueArray = result.data.daily;
            storeDaily.unitsArray = result.data.daily_units;
            console.log("Dati salvati in storeDaily.valueArray:", storeDaily.valueArray);
            console.log("Dati salvati in storeDaily.unitsArray:", storeDaily.unitsArray);
          } else {
            console.warn("Dati non trovati in result.data:", result.data);
          }
        }).catch((error) => {
          console.error("Errore nella richiesta API: ", error);
        });
      }
    },
    // hourly weather function
    getHourlyWeather() {
      if (store.latitude && store.longitude) {
        console.log("getHourlyWeather chiamata!"); // Per vedere se la funzione parte
        const apiLocation = `forecast?latitude=${store.latitude}&longitude=${store.longitude}`;
        const weatherValue = `${store.apiUrl}${apiLocation}${storeHourly.hourlyApi}`;
        console.log(weatherValue);

        // API call
        axios.get(weatherValue).then((result) => {
          console.log("Risultato API:", result);
          if (result.data) {
            storeHourly.valueArray = result.data.hourly;
            storeHourly.unitsArray = result.data.hourly_units;
            console.log("Dati salvati in storeHourly.valueArray:", storeHourly.valueArray);
            console.log("Dati salvati in storeHourly.unitsArray:", storeHourly.unitsArray);
          } else {
            console.warn("Dati non trovati in result.data:", result.data);
          }
        }).catch((error) => {
          console.error("Errore nella richiesta API: ", error);
        });
      }
    },
    isDay() {
      const isDay = storeCurrent.valueArray.is_day;
      return isDay
    }
  },
  data() {
    return {
      store,
      storeCurrent,
      storeDaily,
      storeHourly,
      errorMessage: null,
    }
  }
}
</script>

<template>

  <div :class="isDay() ? 'bg_day' : 'bg_night'">
    <header>
      <AppHeader />
    </header>
  
    <main>
      <AppMain />
    </main>
  </div>

</template>

<style>
  @import "./styles/generals.scss";

  .bg_day {
    background-image: url("./assets/sunny_wallpaper.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media screen and (min-width: 768px) {
      background-position: center;
    }
  }

  .bg_night {
    background-image: url("./assets/night_wallpaper.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    @media screen and (min-width: 768px) {
      background-position: center;
    }
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  main {
    padding-top: 60px;
  }
</style>
