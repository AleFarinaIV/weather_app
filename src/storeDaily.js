import {reactive} from 'vue';

export const storeDaily = reactive({
    dailyApi: '&daily=temperature_2m_min,temperature_2m_max,sunshine_duration,precipitation_probability_max,wind_speed_10m_max,sunset,daylight_duration,sunrise&current=temperature_2m',
    valueArray: [],
    unitsArray: [],
})