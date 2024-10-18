import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetPositionsTime from "../useGetPositionsTime";
import PropTypes from "prop-types";
import Spinner from "../../ui/Spinner";
import WeatherImage from "../../ui/WeatherImage";
import useGetWeatherInfoOfPosition from "../useGetWeatherInfoOfPosition";
import DeleteWeatherBtn from "./DeleteWeatherBtn";
import { FaHotTubPerson } from "react-icons/fa6";
import WeatherDetail from "./WeatherDetail";



const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  function formatTimestampToReadableTime(unix_timestamp){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(unix_timestamp * 1000);

    // const hour = date.getUTCHours().toString().padStart(2,0);
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2,0);
    // Hours part from the timestamp
    // const hours = date.getHours();

    // Minutes part from the timestamp
    // const minutes = "0" + date.getMinutes();

    // Seconds part from the timestamp
    // const seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    // const formattedTime = hours + ':' + minutes.substring(-2) + ':' + seconds.substring(-2);

    const formattedTime = `${hour}:${minutes}`;

    console.log(hour);

    // return formattedTime ;
  }




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


formatTimestampToReadableTime(data?.sys?.sunrise);


  return (
    <div className="relative flex gap-2 p-6 h-[380px] bg-white/20 shadow-2xl rounded-md" >

       <DeleteWeatherBtn id={id} /> 

       <div className=" flex flex-col gap-4 pr-4 mr-2  w-6/12 border-r-[1px] border-black/20" >

            <div className="flex flex-col gap-1" >

                <Link to={`/dashboard/${position.lat} ${position.lon}`} 
                    className="font-bold text-4xl"
                > 
                    {data?.name}, {data?.sys?.country}
                </Link>

                <p className="font-light text-xl">{ isPendingTime ? "Loading..." :  formattedDate}</p>
                
            </div>


            <div className="flex justify-between" >

                <div className="p-2 w-6/12" >
                    <WeatherImage data={data} className="w-11/12"  />   
                </div>
                
                <div className="flex flex-col justify-center items-center gap-2 w-6/12" >
                    <p className="text-7xl" >{(data.main.temp).toFixed(1)}°C</p>
                    <p className="text-2xl font-medium text-center" >{data?.weather[0]?.description}</p>
                </div>

            </div>
       </div>


       {/* border-2 border-red-800 */}

        <div className="grid grid-cols-3 gap-3 p-2 w-6/12 h-full" >


            <WeatherDetail label="Max Temp" data={`${(data.main.temp_max).toFixed(1)}°C`} >
                <FaHotTubPerson />    
            </WeatherDetail>

            <WeatherDetail label="Min Temp" data={`${(data.main.temp_min).toFixed(1)}°C`} >
                <FaHotTubPerson />    
            </WeatherDetail>

            <WeatherDetail label="Feels Like" data={`${(data.main.temp).toFixed(1)}°C`} >
                <FaHotTubPerson />    
            </WeatherDetail>

            <WeatherDetail label="Wind Speen" data={`${data.wind.speed} m/s`} >
                <FaHotTubPerson />    
            </WeatherDetail>

            <WeatherDetail label="Sunrise" data={`${new Date(data.sys.sunrise).toLocaleTimeString()}`} >
                <FaHotTubPerson />    
            </WeatherDetail>

            <WeatherDetail label="Sunset" data={`${new Date(data.sys.sunset).toLocaleTimeString()}`} >
                <FaHotTubPerson />    
            </WeatherDetail>


        </div>

    </div>
  )
}




WeatherItem.propTypes = {
    position: PropTypes.object,
    id: PropTypes.number,
}



// border-4 border-purple-800