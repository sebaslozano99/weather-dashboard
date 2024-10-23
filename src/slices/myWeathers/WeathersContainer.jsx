import { useQuery } from "@tanstack/react-query";
import { fetchUsersWeatherList } from "../../services/supabase";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
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
    // <div className={`flex flex-col gap-6 w-full h-full mx-auto border-4`} >
    // </div>
    <>
      { !user && 
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-medium text-xl dark:text-white text-center h-[20%]">Create your account and enjoy the most accurate Weather forecast!</h2>

          <div className="flex justify-center">
            <img src="../../../public/signUp.svg" alt="empty" className="w-[30em] h-[20em] object-contain" />
          </div>

          <button className="bg-[#21295C] text-white w-40" >
            <Link to="/signup"  className="block py-2 px-5" >Sign up</Link>
          </button>
        </div>

      }


      { !data && user !== null || data?.length === 0 &&  user !== null &&
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-medium text-xl dark:text-white text-center h-[20%]">Start adding the locations You want to know its weather information</h2>

          <div className="flex justify-center">
            <img src="../../../public/empty.svg" alt="empty" className="w-[30em] h-[20em] object-contain" />
          </div>

          <button className="bg-[#21295C] text-white w-40" >
            <Link to="/dashboard"  className="block py-2 px-5" >Search</Link>
          </button>
        </div>
      }


      { data && user !== null && data.map((item) =>  <WeatherItem key={item.id} id={item.id} position={{lat: item.latitude, lon: item.longitude}} /> ) }
    </>

  )
}
