import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getWeatherData } from "../../../services/openWeather";

import TempDetails from "./currentWeatherInfo/TempDetails";
import WeatherImage from "../../../ui/WeatherImage";
import capitalize from "../../../utilities/Capitalize";
import MoreWeatherInfo from "./currentWeatherInfo/MoreWeatherInfo";
import DateAndTime from "./dateAndTime/DateAndTime";
import FiveDaysForecast from "./fiveDaysForecast/FiveDaysForecast";
import Spinner from "../../../ui/Spinner";



export default function DetailedWeatherInfo() {

  const { moreInfo } = useParams();

  const position = { 
    lat: +moreInfo.slice(0, moreInfo.indexOf(" ")),
    lon: +moreInfo.slice(moreInfo.indexOf(" ")),
  }


  const { data,  isPending, error,  isError } = useQuery({
    queryKey: ["mainWeather"],
    queryFn: ({signal}) => getWeatherData(position, signal),
    retry: 2,
  });



  if(isPending) return <div className={`flex flex-col items-center w-full h-[90vh]`} >
    <Spinner size={15} />
  </div>


  if(isError) return <div className={`flex flex-col items-center w-full h-[90vh]`}>{error.error || error.description || error.message}</div>

  

  return (
    <div className={`flex flex-col md:grid md:grid-cols-10 md:grid-rows-12 gap-4 p-4 w-full md:h-[160vh]`} >

      <DateAndTime data={data} />

      <div className="flex flex-col gap-5 sm:gap-1 sm:grid sm:grid-cols-3 sm:col-span-7 sm:row-span-4 p-4 bg-white/20 shadow-2xl rounded-lg" >
        <TempDetails data={data} />

        <div className="flex flex-col justify-center items-center" >
          <WeatherImage data={data} className="w-6/12 sm:w-8/12"  />
          <p className="font-semibold text-xl min-[924px]:text-2xl text-center" >{capitalize(data?.weather[0]?.description)}</p>
        </div>

        <MoreWeatherInfo data={data} />
      </div>

      <FiveDaysForecast position={position} />
        
    </div>
  )
}
