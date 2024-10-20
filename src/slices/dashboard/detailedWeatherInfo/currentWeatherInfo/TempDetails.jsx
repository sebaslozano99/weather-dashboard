import { useTempScaleContext } from "../../../../contexts/TempScaleContext";
import { useThemeContext } from "../../../../contexts/ThemeContext";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types";


export default function TempDetails({data}) {

  const { isCelcius } = useTempScaleContext();
  const { isDarkMode } = useThemeContext();
  const mainTemperature = isCelcius ? data.main.temp : (data.main.temp * 9/5) + 32;
  const feelsLike = isCelcius ? data.main.feels_like : (data.main.feels_like * 9/5) + 32;
  const maxTemperature = isCelcius ? data.main.temp_max : (data.main.temp_max * 9/5) + 32;
  const minTemperature = isCelcius ? data.main.temp_min : (data.main.temp_min * 9/5) + 32;


  return (

    <div className="flex flex-col min-[400px]:flex-row sm:flex-col items-center justify-around gap-8 min-[400px]:gap-2">

        <div className="flex flex-col items-center gap-4 sm:gap-2  text-center" >

            <h2 className="text-4xl font-semibold dark:text-white" >{mainTemperature.toFixed(0)}°{isCelcius ? "C" : "F"}</h2>

            <p className="dark:text-white" ><span className="font-semibold dark:text-white" >Feels like:</span> {feelsLike.toFixed(0)}°{isCelcius ? "C" : "F"}</p>

        </div>


        <div className="flex flex-col items-center gap-4" >

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowUp size={30} color={ isDarkMode ? "white" : "black" }   />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold dark:text-white" >Max Temp</h3>
                    <p className="dark:text-white" >{(maxTemperature).toFixed(0)}°{isCelcius ? "C" : "F"}</p>
                </div>

            </div>

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowDown size={30} color={ isDarkMode ? "white" : "black" } />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold dark:text-white" >Min Temp</h3>
                    <p className="dark:text-white" >{(minTemperature).toFixed(0)}°{isCelcius ? "C" : "F"}</p>
                </div>

            </div>

        </div>
        

    </div>

  )
}


TempDetails.propTypes = {
    data: PropTypes.object,
}