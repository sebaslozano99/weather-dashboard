import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTempScaleContext } from "../../contexts/TempScaleContext";
import useGetWeatherInfoOfPosition from "../useGetWeatherInfoOfPosition";
import useGetPositionsTime from "../useGetPositionsTime";
import PropTypes from "prop-types";
import Spinner from "../../ui/Spinner";
import WeatherImage from "../../ui/WeatherImage";
import DeleteWeatherBtn from "./DeleteWeatherBtn";
import DetailsInfo from "./DetailsInfo";



const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };


export default function WeatherItem({position, id}) {

  const { isCelcius } = useTempScaleContext();
  const [dateOfCity, setDateOfCity] = useState(null);
  const { data: timeData, isPending: isPendingTime } = useGetPositionsTime(position.lat, position.lon, position); //fetch time of specific position
  const { data, isPending } = useGetWeatherInfoOfPosition(position); //fetch current weather data of specific position
  const formattedDate = new Date(dateOfCity).toLocaleDateString("en-US", options);
  const temperature = isCelcius ? data?.main.temp : (data?.main.temp * 9/5) + 32;



  useEffect(() => {
    if(timeData) setDateOfCity(timeData.date);
  }, [timeData])


 

  if(isPending) return <div className="flex justify-center items-center p-8 bg-white/20 shadow-2xl rounded-md" >
    <Spinner size={10} />
  </div>




  return (
    <div className="relative flex flex-col md:flex-row gap-2 p-6 min-h-[380px] bg-white/20 shadow-2xl rounded-md" >

      <DeleteWeatherBtn id={id} /> 

      <div className="flex flex-col gap-4 pr-4 mr-2 w-full md:w-5/12 min-[960px]:w-6/12 md:border-r-[1px] border-black/20" >

        <div className="flex flex-col gap-1" >

          <Link to={`/dashboard/${position.lat} ${position.lon}`} 
              className="font-bold text-3xl min-[550px]:text-4xl"
          > 
              {data?.name}, {data?.sys?.country}
          </Link>

          <p className="font-light text-lg min-[550px]:text-xl">{ isPendingTime ? "Loading..." :  formattedDate}</p>
            
        </div>


        <div className="flex md:justify-between md:flex-col min-[960px]:flex-row h-full" >

          <div className="p-2 w-6/12 md:w-9/12 min-[960px]:w-6/12" >
              <WeatherImage data={data} className="w-12/12 md:w-full"  />   
          </div>
          
          <div className="flex flex-col justify-center gap-2 min-[960px]:w-6/12" >
              <p className="text-3xl min-[550px]:text-7xl text-center" >{temperature.toFixed(0)}°{isCelcius ? "C" : "F"}</p>
              <p className="text-lg min-[550px]:text-2xl font-medium text-center" >{data?.weather[0]?.description}</p>
          </div>

        </div>

      </div>

      <DetailsInfo data={data} timeData={timeData} />

    </div>
  )
}




WeatherItem.propTypes = {
    position: PropTypes.object,
    id: PropTypes.number,
}



// border-4 border-purple-800