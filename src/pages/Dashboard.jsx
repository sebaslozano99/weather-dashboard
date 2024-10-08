import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getLatAndLng from "../services/openWeather";
import MainWeatherContainer from "../slices/dashboard/MainWeatherContainer";
import MapContainer from "../slices/dashboard/MapContainer";



export default function Dashboard() {


  const [cityName, setCityName] = useState("medellin");


  const { data, isPending, error, isError } = useQuery({
    queryKey: ["mainWeather", cityName],
    queryFn: () => getLatAndLng(cityName),
  })



  if(isError) return <span>{error.message}</span>

  return (
    <div className={`flex gap-4 w-full h-[90vh] p-8`} >
      <MainWeatherContainer data={data} isPending={isPending} error={error} onChangeCity={setCityName} />
      <MapContainer />
    </div>
  )
}
