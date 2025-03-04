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
            this.getWeatherData();
          },
          (error) => {
            store.loading = false;
            this.errorMessage = `Errore nella geolocalizzazione: ${error.message}`;
          }
        );
      } else {
        this.errorMessage = "Geolocation is not supported by your browser.";
      }
    },
    getWeatherData() {
      console.log("getWeatherData chiamata!"); // Per vedere se la funzione parte
      let apiLocation = `forecast?latitude=${store.latitude}&longitude=${store.longitude}&timezone=auto`;
      let weatherValue = `${store.apiUrl}${apiLocation}${store.currentApi}`;

      axios.get(weatherValue).then((result) => {
        console.log("Risultato API:", result); // Per vedere cosa riceviamo
        if (result.data) {
          store.valueArray = result.data.current;
          console.log("Dati salvati in store.valueArray:", store.valueArray);
        } else {
          console.warn("Dati non trovati in result.data:", result.data);
        }
      }).catch((error) => {
        console.error("Errore nella richiesta API: ", error);
      });

      axios.get(weatherValue).then((result) => {
        console.log("Risultato API:", result); // Per vedere cosa riceviamo
        if (result.data) {
          store.unitsArray = result.data.current_units;
          console.log("Dati salvati in store.unitsArray:", store.unitsArray);
        } else {
          console.warn("Dati non trovati in result.data:", result.data);
        }
      }).catch((error) => {
        console.error("Errore nella richiesta API: ", error);
      })
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
