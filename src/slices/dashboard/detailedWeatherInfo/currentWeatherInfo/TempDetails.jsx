import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import PropTypes from "prop-types";



export default function TempDetails({data}) {
  return (

    <div className="flex flex-col items-center justify-around border-2 border-black">

        <div className="flex flex-col items-center border-2" >

            <h2 className="text-4xl font-semibold" >{data?.main.temp}°C</h2>
            <p>Feels like: {data?.main.feels_like}°C</p>

        </div>


        <div className="border-2" >

            <div className="flex gap-1 border-2 border-red-500" >

                <div className="border-2 border-purple-500 flex items-center justify-center" >
                    <FaTemperatureArrowUp size={30} />
                </div>

                <div className="border-2 border-green-800 text-center" >
                    <h3>Max Temperature</h3>
                    <p>{data?.main.temp_max}°C</p>
                </div>

            </div>

            <div className="flex gap-1 border-2 border-red-500" >

                <div className="border-2 border-purple-500 flex items-center justify-center" >
                    <FaTemperatureArrowDown size={30} />
                </div>

                <div className="border-2 border-green-800 text-center" >
                    <h3>Min Temperature</h3>
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