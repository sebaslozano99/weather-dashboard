import { useQuery } from "@tanstack/react-query"
import { getFiveDaysForecast } from "../../../../services/openWeather"
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import Spinner from "../../../../ui/Spinner";
import Chart from "./chart";




export default function FiveDaysForecast({position}) {


  const { data, error, isError, isPending } = useQuery({
    queryKey: ["fiveDaysForecast"],
    queryFn: () => getFiveDaysForecast(position),
    refetchOnWindowFocus: false,
  })

  const fiveDaysToDisplay = data?.filter((item, i) => i === 6 || i === 14 || i === 22 || i === 30 || i === 38 ? item : null);







  if(isPending) return <div className="flex justify-center items-center col-span-8 row-span-4 rounded-lg bg-white/20 shadow-2xl" >
    <Spinner size={7} />
  </div>



  return (
    <div className="col-span-10 row-span-8 flex flex-col gap-4 p-4 bg-white/20 rounded-lg shadow-2xl" >

      <h3 className="text-center font-bold text-2xl" >5 days weather forecast</h3>

      <div className="flex gap-3 md:grid md:grid-cols-5 h-[45%] overflow-auto" >

        { isError && error?.error || error?.message || error?.description }

        {
          !isPending && !isError &&
          fiveDaysToDisplay.map((item) => <ForecastItem key={item.dt_txt} info={item} />)
        }
      </div>

      <div className="flex justify-center items-center w-full h-[45%]" >
        <Chart data={fiveDaysToDisplay} />
      </div>
      
    </div>
  )
}

FiveDaysForecast.propTypes = {
  position: PropTypes.object,
}
