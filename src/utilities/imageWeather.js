

const imagePath = "../../public/"

const weatherCodes = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n", "09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n", "50d", "50n"];

const weatherImagesAccordingCode = [`${imagePath}clearDay.png`, `${imagePath}clearNight.png`, `${imagePath}fewCloudsDay.png`, `${imagePath}fewCloudsNight.png`, `${imagePath}scatteredClouds.png`, `${imagePath}scatteredClouds.png`, `${imagePath}cloudyDay.png`, `${imagePath}cloudyNight.png`, `${imagePath}rainDay.png`, `${imagePath}rainNight.png`, `${imagePath}rainDay.png`, `${imagePath}rainNight.png`, `${imagePath}thunderstorm.png`, `${imagePath}thunderstorm.png`, `${imagePath}snowy.png`, `${imagePath}snowy.png`, `${imagePath}fog.png`, `${imagePath}fog.png`];




export default function generateImageAccordingWeather(weatherCode){
    let correctWeatherImage;
    for(let i = 0; i < weatherCodes.length; i++){
        if(weatherCode === weatherCodes[i]){
            correctWeatherImage = weatherImagesAccordingCode[i];
        }
    }



    return correctWeatherImage;
}