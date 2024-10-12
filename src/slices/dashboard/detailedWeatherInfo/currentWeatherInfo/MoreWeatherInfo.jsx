import { MdWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { WiBarometer } from "react-icons/wi";
import { FaEye } from "react-icons/fa";
import PropTypes from "prop-types";


export default function MoreWeatherInfo({data}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 border-2 border-green-800" >
        
        <div className="border-2 border-red-500 flex flex-col items-center justify-center gap-1" >
            <MdWaves size={30} />
            <p>{data?.main?.humidity}%</p>
            <h4 className="font-semibold" >Humidity</h4>
        </div>


        <div className="border-2 border-red-500 flex flex-col items-center justify-center gap-1" >
            <FaWind size={30} />
            <p>{data?.wind?.speed} m/s</p>
            <h4 className="font-semibold" >Wind</h4>
        </div>
            

        <div className="border-2 border-red-500 flex flex-col items-center justify-center gap-1" >
            <WiBarometer size={50} />
            <p>{data?.main?.pressure} hPa</p>
            <h4 className="font-semibold" >Pressure</h4>
        </div>

        <div className="border-2 border-red-500 flex flex-col items-center justify-center gap-1" >
            <FaEye size={30} />
            <p>{data?.main?.pressure} meters</p>
            <h4 className="font-semibold" >Visibility</h4>
        </div>

    </div>
  )
}


MoreWeatherInfo.propTypes = {
    data: PropTypes.object,
}