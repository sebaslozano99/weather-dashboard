import PropTypes from "prop-types";



export default function MainWeatherCard({data, isPending, error}) {

    const { name, sys, main } = data ?? {};


    if(isPending) return(
        <div>
            Loading...
        </div>
    )

    // if()

  return (
    <div className="p-4 w-full h-full shadow-xl bg-white/20 rounded-2xl" >

        <h2 className="font-bold text-3xl" >{name}-{sys.country}</h2>

        <div>
            <img 
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} 
                className="w-32"
            />
            <p className="font-semibold text-xl" >{main.temp}°C</p>
        </div>
    </div>
  )
}


MainWeatherCard.propTypes = {
    data: PropTypes.object,
    isPending: PropTypes.bool,
    error: PropTypes.string,
  }