import { useQuery } from "@tanstack/react-query";
import { fetchUsersWeatherList } from "../../services/supabase";
import { useAuthContext } from "../../contexts/AuthContext";
import WeatherItem from "./WeatherItem";




export default function WeathersContainer() {

  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["usersWeather"],
    queryFn: () => fetchUsersWeatherList(user.id),
    refetchOnWindowFocus: false,
    enabled: user !== null
  });


  return (
    <div className={`flex flex-col gap-6 w-full h-full mx-auto`} >

      { !user && "Create an account and start saving yout important weather information!" }
      { !data || data.length === 0 && "Start adding weather information of cities!" }
      { data && user !== null && data.map((item) =>  <WeatherItem key={item.id} id={item.id} position={{lat: item.latitude, lon: item.longitude}} /> ) }

    </div>
  )
}
