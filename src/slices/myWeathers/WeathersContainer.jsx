import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../contexts/AuthContext";
import { fetchUsersWeatherList } from "../../services/supabase";
import { useEffect } from "react";




export default function WeathersContainer() {

  const { user } = useAuthContext();
  const { data } = useQuery({
    queryKey: ["usersWeather"],
    queryFn: () => fetchUsersWeatherList(user.id),
    refetchOnWindowFocus: false,
  })


  useEffect(() => {
    console.log(data);
    console.log("user id", user?.id);
  }, [data, user?.id])

  return (
    <div className={`w-full h-full`} >
      { !data || data.length === 0 && "Start adding weather information of cities!" }
    </div>
  )
}
