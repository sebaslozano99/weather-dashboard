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
    <div className={`grid grid-cols-10 grid-rows-8 gap-4 p-4 w-full h-[90vh]`} >

      <DateAndTime data={data} />

      <div className="grid grid-cols-3 col-span-6 row-span-4 p-4 bg-white/20 shadow-2xl rounded-lg" >
          <TempDetails data={data} />

          <div className="border-2 border-red-500 flex flex-col justify-center items-center" >
              <WeatherImage data={data} className="w-40"  />
              <p className="font-semibold text-2xl text-center" >{capitalize(data?.weather[0]?.description)}</p>
          </div>

          <MoreWeatherInfo data={data} />
      </div>

      <div className="bg-black text-white col-span-3 row-span-4 rounded-lg" >
        Maybe hourly forecast
      </div>

      <FiveDaysForecast city={city} />
        
    </div>
  )
}
