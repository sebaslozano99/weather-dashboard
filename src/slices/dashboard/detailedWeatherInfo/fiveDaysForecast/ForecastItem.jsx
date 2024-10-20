import { useTempScaleContext } from "../../../../contexts/TempScaleContext";
import PropTypes from "prop-types";
import WeatherImage from "../../../../ui/WeatherImage";
import capitalize from "../../../../utilities/Capitalize";


export default function ForecastItem({info}) {

  const forecastDate = new Date(info.dt_txt).toDateString();
  const { isCelcius } = useTempScaleContext();
  const temperature = isCelcius ? info.main.temp : (info.main.temp * 9/5) + 32;


  return (
    <div className="flex flex-col items-center justify-around flex-shrink-0 p-3 md:p-2 w-full min-[550px]:w-6/12 md:w-auto bg-[#9EB3C2] dark:bg-[#fff]/10 rounded-xl" >
      <p className="font-bold text-4xl md:text-xl dark:text-white" >{ (temperature).toFixed(0) }°{isCelcius ? "C" : "F"}</p>

      <div className="flex flex-col items-center gap-2 w-full" > 
        <WeatherImage data={info} className="w-24 md:w-5/12" />
        <p className="text-xl md:text-base text-center font-semibold dark:text-white" >{capitalize(info.weather[0]?.description)}</p>
      </div>

      <small className="text-center dark:text-white" >{forecastDate}</small>
    </div>
  )
}


ForecastItem.propTypes = {
    info: PropTypes.object,
}