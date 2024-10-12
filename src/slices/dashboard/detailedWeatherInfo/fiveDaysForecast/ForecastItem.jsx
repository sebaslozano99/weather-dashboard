import PropTypes from "prop-types";
import WeatherImage from "../../../../ui/WeatherImage";
import capitalize from "../../../../utilities/Capitalize";


export default function ForecastItem({info}) {

  const forecastDate = new Date(info.dt_txt).toDateString();

//   console.log(forecastDate.toDateString());

  return (
    <div className="flex flex-col items-center justify-around flex-shrink-0 p-2 md:p-1 w-full border-[1px] border-black/30" >
      <p className="font-bold text-xl" >{ info.main.temp }°C</p>

      <div className="flex flex-col items-center gap-2 w-full" > 
        <WeatherImage data={info} className="w-4/12 md:w-6/12" />
        <p className="text-sm font-semibold" >{capitalize(info.weather[0]?.description)}</p>
      </div>

      <small>{forecastDate}</small>
    </div>
  )
}


ForecastItem.propTypes = {
    info: PropTypes.object,
}