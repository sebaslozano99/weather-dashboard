import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types";



export default function TempDetails({data}) {
  return (

    <div className="flex flex-col min-[400px]:flex-row sm:flex-col items-center justify-around gap-8 min-[400px]:gap-2">

        <div className="flex flex-col items-center gap-4 sm:gap-2  text-center" >

            <h2 className="text-4xl font-semibold" >{data?.main.temp}°C</h2>
            <p><span className="font-semibold" >Feels like:</span> {data?.main.feels_like}°C</p>

        </div>


        <div className="flex flex-col items-center gap-4" >

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowUp size={30}  />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold" >Max Temp</h3>
                    <p>{data?.main.temp_max}°C</p>
                </div>

            </div>

            <div className="flex items-start gap-1" >

                <div className="flex items-center justify-center flex-1" >
                    <FaTemperatureArrowDown size={30} />
                </div>

                <div className="text-center" >
                    <h3 className="font-semibold" >Min Temp</h3>
                    <p>{data?.main.temp_min}°C</p>
                </div>

            </div>

        </div>
        

    </div>

  )
}


TempDetails.propTypes = {
    data: PropTypes.object,
}