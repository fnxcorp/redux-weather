import axios from 'axios';
const API_KEY = 'e662749623c72d397cf689f757d80717';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city = null) {
    const url = `${ROOT_URL}&q=${city},mx`;
    const request = axios.get(url);

    return {type: FETCH_WEATHER, payload: request}
}
