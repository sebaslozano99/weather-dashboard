import { useTempScaleContext } from "../../../../contexts/TempScaleContext";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types";



export default function TempDetails({data}) {

  const { isCelcius } = useTempScaleContext();
  const mainTemperature = isCelcius ? data.main.temp : (data.main.temp * 9/5) + 32;
  const feelsLike = isCelcius ? data.main.feels_like : (data.main.feels_like * 9/5) + 32;
  const maxTemperature = isCelcius ? data.main.temp_max : (data.main.temp_max * 9/5) + 32;
  const minTemperature = isCelcius ? data.main.temp_min : (data.main.temp_min * 9/5) + 32;

  console.log(feelsLike);

  return (

    <div className="flex flex-col min-[400px]:flex-row sm:flex-col items-center justify-around gap-8 min-[400px]:gap-2">

        <div className="flex flex-col items-center gap-4 sm:gap-2  text-center" >

            <h2 className="text-4xl font-semibold" >{mainTemperature.toFixed(0)}°{isCelcius ? "C" : "F"}</h2>

            <p><span className="font-semibold" >Feels like:</span> {feelsLike.toFixed(0)}°{isCelcius ? "C" : "F"}</p>

        </div>


        <div className="flex flex-col items-center gap-4" >

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowUp size={30}  />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold" >Max Temp</h3>
                    <p>{(maxTemperature).toFixed(0)}°{isCelcius ? "C" : "F"}</p>
                </div>

            </div>

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowDown size={30} />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold" >Min Temp</h3>
                    <p>{(minTemperature).toFixed(0)}°{isCelcius ? "C" : "F"}</p>
                </div>

            </div>

        </div>
        

    </div>

  )
}


TempDetails.propTypes = {
    data: PropTypes.object,
}