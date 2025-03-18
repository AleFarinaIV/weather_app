import {reactive} from 'vue';

export const storeDaily = reactive({
    dailyApi: '&daily=temperature_2m,relative_humidity_2m,cloud_cover,wind_speed_10m',
    valueArray: [],
    unitsArray: [],
})