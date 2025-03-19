import {reactive} from 'vue';

export const storeCurrent = reactive({
    currentApi: '&current=temperature_2m,relative_humidity_2m,cloud_cover,wind_speed_10m,weather_code,is_day',
    valueArray: [],
    unitsArray: [],
})