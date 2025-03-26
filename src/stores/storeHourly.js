import {reactive} from 'vue';

export const storeHourly = reactive({
    hourlyApi: '&hourly=weather_code,temperature_2m&timezone=auto&forecast_days=3',
    valueArray: [],
    unitsArray: [],
})