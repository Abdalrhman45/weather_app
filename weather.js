const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric', // or 'imperial' for Fahrenheit
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Unable to fetch weather data');
    }
}

module.exports = { getWeather };

