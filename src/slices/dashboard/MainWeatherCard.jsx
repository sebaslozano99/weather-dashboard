import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTempScaleContext } from "../../contexts/TempScaleContext";
import { useCoordinates } from "../../contexts/CoordinatesContext";
import useGetWeatherInfoOfPosition from "../useGetWeatherInfoOfPosition";
import capitalize from "../../utilities/Capitalize";
import Spinner from "../../ui/Spinner";
import WeatherImage from "../../ui/WeatherImage";
import AddWeatherBtn from "./AddWeatherBtn";




export default function MainWeatherCard() {

    const { isCelcius } = useTempScaleContext();
    const { city } = useCoordinates();
    const [, setSearchParams] = useSearchParams();
    const { data, isPending, error, isError } = useGetWeatherInfoOfPosition(city)
    const { name, sys, main } = data ?? {};
    const temperature = isCelcius ? main?.temp : (main?.temp * 9/5) + 32;
    const feelsLike = isCelcius ? main?.feels_like : (main?.feels_like * 9/5) + 32;

    useEffect(() => {
        setSearchParams(city);
    }, [city, setSearchParams])


    
    if(isPending) return(
        <div className="flex justify-center items-center gap-1 w-full h-full shadow-xl bg-white/20 rounded-2xl" >
            <Spinner size={8} />
        </div>
    )


    if(isError) return <div className="flex justify-center items-center gap-1 dark:text-white w-full h-full shadow-xl bg-white/20 rounded-2xl" >{error.message}</div>




  return (
    <div className="relative flex flex-col gap-4 md:gap-2 py-4 px-2 md:py-10 md:px-4 w-full h-[90%] shadow-xl bg-white/20 dark:bg-[#252525]/60 rounded-2xl" >

        <AddWeatherBtn city={city} city_name={name} country_code={sys.country} />

        <div className="flex flex-col items-center justify-around h-[80%]" >

            <h2 className="font-bold text-2xl md:text-4xl text-center tracking-wider dark:text-white" >
                <Link to={`${city.lat} ${city.lon}`} >{name},{sys.country}</Link>
            </h2> 

            <div className="flex flex-col items-center justify-around w-auto" >
                <WeatherImage data={data} className="w-1/4 md:w-5/12" />
                <p className="font-normal text-center text-3xl md:text-6xl dark:text-white" >{temperature.toFixed(0)}°{isCelcius ? "C" : "F"}</p>
            </div>


        </div>


        <div className="flex items-center justify-around text-center h-[20%]" >

            <div >
                <p className="text-xs md:text-lg font-light dark:text-white" >{capitalize(data.weather[0].description)}</p>
                <h3 className="text-sm md:text-xl font-bold dark:text-white" >Description</h3>
            </div>

            <div >
                <p className="text-xs md:text-lg font-light dark:text-white" >{main.humidity}%</p>
                <h3 className="text-sm md:text-xl font-bold dark:text-white" >Humidity</h3>
            </div>

            <div >
                <p className="text-xs md:text-lg font-light dark:text-white" >{feelsLike.toFixed(0)}°{isCelcius ? "C" : "F"}</p>
                <h3 className="text-sm md:text-xl font-bold dark:text-white" >Feels Like</h3>
            </div>

        </div>

    </div>
  )
}
