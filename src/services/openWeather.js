

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;


async function getWeatherData(city, signal){
    try {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`, { signal } );

        const data = await res.json();

        if(data.name === "") throw new Error("Select a different position in the map!");

        return data;
    }
    catch(err){
        throw new Error(err);
    }
}




async function cityNameToPosition(cityName, signal){

    if(cityName.length < 3) return [];

    try {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`, { signal } );

        const data = await res.json();

        return data;
    }
    catch(err){
        if (err.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', err);
            throw new Error(err.message); // Rethrow with the original message
        }
    }
}




export { getWeatherData, cityNameToPosition };