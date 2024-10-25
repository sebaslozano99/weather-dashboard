

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;


async function getWeatherData(position, signal){
    try {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${API_KEY}&units=metric`, { signal } );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status} - ${res.statusText}`);

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
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`, { signal } );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();

        return data;
    }
    catch(err){
        // console.error('Fetch error:', err);
        throw new Error(err.message);   
    }
}




async function getFiveDaysForecast(city){
    try {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`);

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
        const data = await res.json();

        // console.log(data);

        return data.list;
    }
    catch(err){
        throw new Error(err);
    }
}




export { getWeatherData, cityNameToPosition, getFiveDaysForecast };