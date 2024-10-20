import { MdWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { FaEye } from "react-icons/fa";
import PropTypes from "prop-types";
import { useThemeContext } from "../../../../contexts/ThemeContext";


export default function MoreWeatherInfo({data}) {

  const { isDarkMode } = useThemeContext();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2" >
        
        <div className="flex flex-col items-center justify-center gap-1" >
            <MdWaves size={30} color={isDarkMode ? "white" : "black"} />
            <p className="dark:text-white" >{data?.main?.humidity}%</p>
            <h4 className="font-semibold dark:text-white" >Humidity</h4>
        </div>


        <div className="flex flex-col items-center justify-center gap-1" >
            <FaWind size={30} color={isDarkMode ? "white" : "black"} />
            <p className="dark:text-white" >{data?.wind?.speed} m/s</p>
            <h4 className="font-semibold dark:text-white" >Wind</h4>
        </div>
            

        <div className="flex flex-col items-center justify-center gap-1" >
            <WiBarometer size={40} color={isDarkMode ? "white" : "black"} />
            <p className="dark:text-white" >{data?.main?.pressure} hPa</p>
            <h4 className="font-semibold dark:text-white" >Pressure</h4>
        </div>

        <div className="flex flex-col items-center justify-center gap-1" >
            <FaEye size={30} color={isDarkMode ? "white" : "black"} />
            <p className="dark:text-white" >{data?.main?.pressure} m</p>
            <h4 className="font-semibold dark:text-white" >Visibility</h4>
        </div>

    </div>
  )
}


MoreWeatherInfo.propTypes = {
    data: PropTypes.object,
}