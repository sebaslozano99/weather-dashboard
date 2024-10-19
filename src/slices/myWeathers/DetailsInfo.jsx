import { FaHotTubPerson } from "react-icons/fa6";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

import PropTypes from "prop-types";
import WeatherDetail from "./WeatherDetail";


export default function DetailsInfo({data, timeData}) {
  return (
    <div className="grid grid-cols-2 min-[960px]:grid-cols-3 gap-3 p-2 w-full md:w-7/12 min-[960px]:w-6/12"  >
        
        <WeatherDetail label="Max Temp" data={`${(data.main.temp_max).toFixed(1)}°C`} >
            <FaTemperatureArrowUp />
        </WeatherDetail>

        <WeatherDetail label="Min Temp" data={`${(data.main.temp_min).toFixed(1)}°C`} >
            <FaTemperatureArrowDown />
        </WeatherDetail>

        <WeatherDetail label="Feels Like" data={`${(data.main.temp).toFixed(1)}°C`} >
            <FaHotTubPerson />    
        </WeatherDetail>

        <WeatherDetail label="Wind Speen" data={`${data.wind.speed} m/s`} >
            <FaWind />    
        </WeatherDetail>

        <WeatherDetail label="Sunrise" data={`${new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US" ,{timeZone: timeData?.timeZone})}`} >
            <FiSunrise />
        </WeatherDetail>

        <WeatherDetail label="Sunset" data={`${new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US" ,{timeZone: timeData?.timeZone})}`} >
            <FiSunset />   
        </WeatherDetail>

    </div>
  )
}


DetailsInfo.propTypes = {
    data: PropTypes.object,
    timeData: PropTypes.object,
}