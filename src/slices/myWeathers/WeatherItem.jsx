import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import useGetPositionsTime from "../useGetPositionsTime";
import PropTypes from "prop-types";
import Spinner from "../../ui/Spinner";
import WeatherImage from "../../ui/WeatherImage";
import useGetWeatherInfoOfPosition from "../useGetWeatherInfoOfPosition";
import DeleteWeatherBtn from "./DeleteWeatherBtn";


const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  

export default function WeatherItem({position, id}) {

  const [dateOfCity, setDateOfCity] = useState(null);
  const { data: timeData, isPending: isPendingTime } = useGetPositionsTime(position.lat, position.lon, position); //fetch time of specific position
  const { data, isPending } = useGetWeatherInfoOfPosition(position); //fetch current weather data of specific position
  const formattedDate = new Date(dateOfCity).toLocaleDateString("en-US", options);


  useEffect(() => {
    if(timeData) setDateOfCity(timeData.date);
  }, [timeData])


 

  if(isPending) return <div className="flex justify-center items-center p-8 bg-white/20 shadow-2xl rounded-md" >
    <Spinner size={10} />
  </div>

  return (
    <div className="relative flex justify-between p-8 bg-white/20 shadow-2xl rounded-md" >

       <DeleteWeatherBtn id={id} /> 

        <div className="flex flex-col justify-between md:w-[50%] lg:w-[40%] h-full" >

            <div className="flex gap-2" >

                <span 
                    className="flex items-center  gap-3 text-white text-xs py-1.5 px-2 max-w-max bg-[#21295C] rounded-2xl"
                > 
                    <FaLocationDot color="#ffffff" /> {data?.name} - {data?.sys?.country}
                </span>

                <Link 
                    className="flex items-center  gap-3 text-white text-xs py-1.5 px-2 max-w-max bg-[#21295C] rounded-2xl" 
                    to={`/dashboard/${position.lat} ${position.lon}`} >
                    Details
                </Link>

            </div>


            <div>
                {
                    isPendingTime ? 

                    <Spinner size={1} /> :

                    <>
                        <span className="font-bold text-4xl" >{formattedDate.slice(0, formattedDate.indexOf(",") )}</span><br/>
                        <p className="text-sm">{formattedDate.slice(formattedDate.indexOf(" "))}</p>
                    </>
                }
            </div>


            <div className="flex flex-col gap-2" >
                <p className="font-bold text-5xl" >{data?.main?.temp}°C</p>
                <p className="text-sm" ><b>max:</b> {data?.main?.temp_max}°C - <b>min:</b> {data?.main?.temp_min}°C</p>
            </div>

        </div>

        <div className="flex  flex-col items-center justify-between w-[45%] h-full" >
            <WeatherImage data={data} className="w-10/12 "  />

            <div>
                <p className="font-semibold text-2xl" >{data.weather[0].main}</p>
                <p><b>Feels like:</b> {data?.main?.feels_like}°C</p>
            </div>
        </div>

    </div>
  )
}




WeatherItem.propTypes = {
    position: PropTypes.object,
    id: PropTypes.number,
}