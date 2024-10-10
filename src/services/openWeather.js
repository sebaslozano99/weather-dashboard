

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;


async function getLatAndLng(city){
    try {
        //get lat and lng from cityName
        // const firstResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

        const firstResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`);

        // if(firstResponse.statusText === "Not Found") throw new Error(`The city ${cityName.toUpperCase()} could not found!`);

        const firstData = await firstResponse.json();

        return firstData;
    }
    catch(err){
        throw new Error(err);
    }
}




async function convertTextToPosition(cityName, signal){

    if(cityName.length < 3) return [];

    try {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`, { signal } );

        const data = await res.json();

        return data;
    }
    catch(err){
        // Handle specific fetch error or abort error
        if (err.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', err);
            throw new Error(err.message); // Rethrow with the original message
        }
    }
}




export { getLatAndLng, convertTextToPosition };