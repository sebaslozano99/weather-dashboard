import { useQuery } from "@tanstack/react-query";
import { useCoordinates } from "../../contexts/CoordinatesContext";
import { getLatAndLng } from "../../services/openWeather";

export default function MainWeatherCard() {

    const { city } = useCoordinates();


    const { data, isPending, error, isError } = useQuery({
        queryKey: ["mainWeather", city],
        queryFn: () => getLatAndLng(city),
    });

    const { name, sys, main } = data ?? {};

    if(isPending) return(
        <div>
            Loading...
        </div>
    )


    if(isError) return <div>{error.message}</div>

  return (
    <div className="py-20 px-4 w-full h-full shadow-xl bg-white/20 rounded-2xl" >

        <div className="flex flex-col items-center gap-4" >

            <h2 className="font-thin text-4xl text-center tracking-wider" >{name}-{sys.country}</h2> 

            <img 
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} 
                className=""
            />

            <p className="font-bold text-center text-5xl" >{main.temp}°C</p>

        </div>

    </div>
  )
}
