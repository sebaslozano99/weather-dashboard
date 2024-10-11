import { useQuery } from "@tanstack/react-query";
import { useCoordinates } from "../../contexts/CoordinatesContext";
import { getWeatherData } from "../../services/openWeather";
import generateImageAccordingWeather from "../../helpers/imageWeather";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";




// border-2 border-red-500



export default function MainWeatherCard() {

    const { city } = useCoordinates();

    const [searchParams, setSearchParams] = useSearchParams();

    const { data, isPending, error, isError } = useQuery({
        queryKey: ["mainWeather", city],
        queryFn: ({signal}) => getWeatherData(city, signal),
        retry: 2,
    });
    const { name, sys, main } = data ?? {};



    useEffect(() => {
        setSearchParams(city);
        // console.log(searchParams);
    }, [city, setSearchParams])


    
    if(isPending) return(
        <div className="flex justify-center items-center gap-1 w-full h-full shadow-xl bg-white/20 rounded-2xl" >
            <Spinner size={8} />
        </div>
    )


    if(isError) return <div className="flex justify-center items-center gap-1 w-full h-full shadow-xl bg-white/20 rounded-2xl" >{error.message}</div>




  return (
    <div className="flex flex-col gap-4 md:gap-2 py-4 px-2 md:py-10 md:px-4 w-full h-full md:h-full shadow-xl bg-white/20 rounded-2xl" >

        <div className="flex flex-col items-center justify-around h-[80%]" >

            <h2 className="font-light text-2xl md:text-4xl text-center tracking-wider" >{name}-{sys.country}</h2> 

            <img 
                src={generateImageAccordingWeather(data.weather[0].icon)} alt={data.weather[0].description} 
                className="w-1/4 md:w-2/6"
            />

            <p className="font-normal text-center text-3xl md:text-6xl" >{main.temp}°C</p>

        </div>


        <div className="flex items-center justify-around text-center h-[20%]" >

            <div >
                <p className="text-xs md:text-lg font-light" >{data.weather[0].description}</p>
                <h3 className="text-sm md:text-xl font-bold" >Description</h3>
            </div>

            <div >
                <p className="text-xs md:text-lg font-light" >{main.humidity}%</p>
                <h3 className="text-sm md:text-xl font-bold" >Humidity</h3>
            </div>

            <div >
                <p className="text-xs md:text-lg font-light" >{main.feels_like}°C</p>
                <h3 className="text-sm md:text-xl font-bold" >Feels Like</h3>
            </div>

        </div>

    </div>
  )
}
