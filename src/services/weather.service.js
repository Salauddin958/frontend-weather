import axios from 'axios';

const API_URL = "http://localhost:9000/weather/";

const getDailyWeatherInfo = ({location}) => {
    console.log("service daily location "+{location}.location);
    return axios.get(API_URL+"daily/"+{location}.location);
}


const getHistoricWeatherInfo = ({location}) => {
    console.log("service historic location "+{location}.location);
    return axios.get(API_URL+"historic/"+{location}.location);
}

const getFutureWeatherInfo = ({location}) => {
    console.log("service future location "+{location}.location);
    return axios.get(API_URL+"future/"+{location}.location);
}


export default {
    getDailyWeatherInfo,
    getFutureWeatherInfo,
    getHistoricWeatherInfo
}