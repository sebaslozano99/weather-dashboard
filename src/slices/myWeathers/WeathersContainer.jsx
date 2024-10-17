import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { fetchUsersWeatherList } from "../../services/supabase";
import WeatherItem from "./WeatherItem";




export default function WeathersContainer() {

  const { user } = useAuthContext();
  const { data } = useQuery({
    queryKey: ["usersWeather"],
    queryFn: () => fetchUsersWeatherList(user.id),
    refetchOnWindowFocus: false,
  })



  return (
    <div className={`grid md:grid-cols-2 grid-rows-[minmax(300px, 1fr] auto-rows-[minmax(300px, 1fr)] gap-6 w-full h-full`} >

      { !user && "Create an account and start saving yout important weather information!" }
      { !data || data.length === 0 && "Start adding weather information of cities!" }
      { data && data.map((item) =>  <WeatherItem key={item.id} position={{lat: item.latitude, lon: item.longitude}} /> ) }

    </div>
  )
}
