import { useQuery } from "@tanstack/react-query";
import { useCoordinates } from "../../contexts/CoordinatesContext";
import { getWeatherData } from "../../services/openWeather";
import generateImageAccordingWeather from "../../helpers/imageWeather";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";




export default function MainWeatherCard() {

    const { city } = useCoordinates();

    const [setSearchParams] = useSearchParams();

    const { data, isPending, error, isError } = useQuery({
        queryKey: ["mainWeather", city],
        queryFn: ({signal}) => getWeatherData(city, signal),
        retry: 2,
    });
    const { name, sys, main } = data ?? {};



    useEffect(() => {
        setSearchParams(city);
    }, [city, setSearchParams])


    
    if(isPending) return(
        <div className="flex justify-center items-center gap-1 w-full h-full shadow-xl bg-white/20 rounded-2xl" >
            <Spinner size={8} />
        </div>
    )



    if(isError) return <div className="flex justify-center items-center gap-1 w-full h-full shadow-xl bg-white/20 rounded-2xl" >{error.message}</div>



  return (
    <div className="flex flex-col gap-1 py-10 px-4 w-full h-full shadow-xl bg-white/20 rounded-2xl" >

        <div className="flex flex-col items-center justify-around h-[80%]" >

            <h2 className="font-thin text-4xl text-center tracking-wider" >{name}-{sys.country}</h2> 

            <img 
                src={generateImageAccordingWeather(data.weather[0].icon)} alt={data.weather[0].description} 
                className="w-2/6"
            />

            <p className="font-bold text-center text-5xl" >{main.temp}°C</p>

        </div>


        <div className="flex items-center justify-around text-center h-[20%]" >

            <div>
                <p>{data.weather[0].description}</p>
                <h3 className="font-bold" >Description</h3>
            </div>

            <div>
                <p>{main.humidity}%</p>
                <h3 className="font-bold" >Humidity</h3>
            </div>

            <div>
                <p>{main.feels_like}°C</p>
                <h3 className="font-bold" >Feels Like</h3>
            </div>

        </div>

    </div>
  )
}
