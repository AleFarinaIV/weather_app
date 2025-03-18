import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.open-meteo.com/v1/',
    apiCityUrl: 'https://nominatim.openstreetmap.org/',
    loading: false,
    latitude: null,
    longitude: null,
    city: null,
    country: null,
    dateOnly: null,
})