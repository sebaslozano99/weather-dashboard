import PropTypes from "prop-types";
import WeatherImage from "../../../../ui/WeatherImage";
import capitalize from "../../../../utilities/Capitalize";


export default function ForecastItem({info}) {

  const forecastDate = new Date(info.dt_txt).toDateString();


  return (
    <div className="flex flex-col items-center justify-around flex-shrink-0 p-3 md:p-2 w-full min-[550px]:w-6/12 md:w-auto bg-[#9EB3C2] rounded-xl" >
      <p className="font-bold text-4xl md:text-xl" >{ info.main.temp }°C</p>

      <div className="flex flex-col items-center gap-2 w-full" > 
        <WeatherImage data={info} className="w-24 md:w-5/12" />
        <p className="text-xl md:text-base text-center font-semibold" >{capitalize(info.weather[0]?.description)}</p>
      </div>

      <small className="text-center" >{forecastDate}</small>
    </div>
  )
}


ForecastItem.propTypes = {
    info: PropTypes.object,
}