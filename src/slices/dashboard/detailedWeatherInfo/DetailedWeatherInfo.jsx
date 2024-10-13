import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getWeatherData } from "../../../services/openWeather";

import TempDetails from "./currentWeatherInfo/TempDetails";
import WeatherImage from "../../../ui/WeatherImage";
import capitalize from "../../../utilities/Capitalize";
import MoreWeatherInfo from "./currentWeatherInfo/MoreWeatherInfo";
import DateAndTime from "./dateAndTime/DateAndTime";
import FiveDaysForecast from "./fiveDaysForecast/FiveDaysForecast";



export default function DetailedWeatherInfo() {

  const { moreInfo } = useParams();

  const city = { 
    lat: +moreInfo.slice(0, moreInfo.indexOf(" ")),
    lon: +moreInfo.slice(moreInfo.indexOf(" ")),
  }


  const { data,  isPending, error,  isError } = useQuery({
    queryKey: ["mainWeather"],
    queryFn: ({signal}) => getWeatherData(city, signal),
    retry: 2,
  });



  if(isPending) return <p>Loading...</p>
  if(isError) return <p>{error.error || error.description || error.message}</p>

  return (
    <div className={`flex flex-col md:grid md:grid-cols-10 md:grid-rows-8 gap-4 p-4 w-full md:min-h-[90vh]`} >

      <DateAndTime data={data} />

      <div className="flex flex-col gap-5 sm:gap-1 sm:grid sm:grid-cols-3 sm:col-span-7 sm:row-span-4 p-4 bg-white/20 shadow-2xl rounded-lg" >
        <TempDetails data={data} />

        <div className="flex flex-col justify-center items-center" >
          <WeatherImage data={data} className="w-6/12 sm:w-8/12"  />
          <p className="font-semibold text-xl min-[924px]:text-2xl text-center" >{capitalize(data?.weather[0]?.description)}</p>
        </div>

        <MoreWeatherInfo data={data} />
      </div>

      <FiveDaysForecast city={city} />
        
    </div>
  )
}
