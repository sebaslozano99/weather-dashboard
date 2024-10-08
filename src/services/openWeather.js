

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






export default getLatAndLng;