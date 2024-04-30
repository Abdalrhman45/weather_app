const { getWeather } = require('./weather');

async function main() {
    const city = process.argv[2];
    if (!city) {
        console.log('Please provide a city name.');
        return;
    }

    try {
        const weatherData = await getWeather(city);
        console.log(`Weather in ${city}:`);
        console.log(`- Temperature: ${weatherData.main.temp}°C`);
        console.log(`- Description: ${weatherData.weather[0].description}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
