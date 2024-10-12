import { useQuery } from "@tanstack/react-query"
import { getFiveDaysForecast } from "../../../../services/openWeather"
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import Spinner from "../../../../ui/Spinner";



export default function FiveDaysForecast({city}) {


  const { data, error, isError, isPending } = useQuery({
    queryKey: ["fiveDaysForecast"],
    queryFn: () => getFiveDaysForecast(city),
    refetchOnWindowFocus: false,
  })

  const fiveDaysToDisplay = data?.filter((item, i) => i === 6 || i === 14 || i === 22 || i === 30 || i === 38 ? item : null);
  console.log(fiveDaysToDisplay);

  if(isPending) return <div className="flex justify-center items-center col-span-7 row-span-4 rounded-lg bg-white/20" >
    <Spinner size={7} />
  </div>

  return (
    <div className="grid grid-cols-5 col-span-7 row-span-4 gap-1 p-4 rounded-lg bg-white/20" >

        { isError && error?.error || error?.message || error?.description }

        {
          !isPending && !isError &&
          fiveDaysToDisplay.map((item) => <ForecastItem key={item.dt_txt} info={item} />)
        }
    </div>
  )
}


FiveDaysForecast.propTypes = {
    city: PropTypes.object,
}