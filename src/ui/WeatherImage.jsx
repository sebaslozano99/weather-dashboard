import generateImageAccordingWeather from "../utilities/imageWeather"
import PropTypes from "prop-types";


export default function WeatherImage({data, className}) {
  return (
    <img 
        src={generateImageAccordingWeather(data?.weather[0]?.icon)} alt={data?.weather[0]?.description} 
        className={className}
    />
  )
}


WeatherImage.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
}