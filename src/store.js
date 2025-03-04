import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.open-meteo.com/v1/',
    currentApi: '&current=temperature_2m,relative_humidity_2m,cloud_cover,wind_speed_10m',
    valueArray: [],
    unitsArray: [],
    loading: false,
    latitude: null,
    longitude: null,
})