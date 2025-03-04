<script>
import {store} from "./store.js"
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
  // watch: {
  //   // Usiamo un watcher per chiamare getWeatherData quando cambiano latitudine e longitudine
  //   'store.latitude'(newVal) {
  //     if (newVal !== null && store.longitude !== null) {
  //       this.getWeatherData();
  //     }
  //   },
  //   'store.longitude'(newVal) {
  //     if (newVal !== null && store.latitude !== null) {
  //       this.getWeatherData();
  //     }
  //   }
  // },
  methods: {
    getGeolocation() {
      if ("geolocation" in navigator) {
        store.loading = true;
        const datetime = new Date();
        console.log(datetime);

        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Coordinate ricevute:", position.coords);
            store.latitude = position.coords.latitude;
            store.longitude = position.coords.longitude;
            store.loading = false;

            this.getCity();
            this.getWeatherData();
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
    getWeatherData() {
      if (store.latitude && store.longitude) {
        console.log("getWeatherData chiamata!"); // Per vedere se la funzione parte
        const apiLocation = `forecast?latitude=${store.latitude}&longitude=${store.longitude}&timezone=auto`;
        const weatherValue = `${store.apiUrl}${apiLocation}${store.currentApi}`;
  
        axios.get(weatherValue).then((result) => {
          console.log("Risultato API:", result); // Per vedere cosa riceviamo
          if (result.data) {
            store.valueArray = result.data.current;
            store.unitsArray = result.data.current_units;
            console.log("Dati salvati in store.valueArray:", store.valueArray);
            console.log("Dati salvati in store.unitsArray:", store.unitsArray);
          } else {
            console.warn("Dati non trovati in result.data:", result.data);
          }
        }).catch((error) => {
          console.error("Errore nella richiesta API: ", error);
        });

      }
    }
  },
  data() {
    return {
      store,
      errorMessage: null,
    }
  }
}
</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main>
    <!-- Loader -->
    <div>
      <h1>Geolocation example</h1>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <p v-if="store.latitude && store.longitude">Latitude: {{ store.latitude }}, Longitude: {{ store.longitude }}</p>
      <p v-if="store.loading">Loading location...</p>
    </div>
    <AppMain />
  </main>

</template>

<style>
  @import "./styles/generals.scss"
</style>
