import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import WeatherItem from "./WeatherItem";
import useGetUsersLocation from "../useGetUsersWeatherList";


export default function WeathersContainer() {

  const { user } = useAuthContext();
  const { usersLocations } = useGetUsersLocation(user);


  return (
    <>
      { !user && 
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-medium text-xl dark:text-white text-center h-[20%]">Create your account and enjoy the most accurate Weather forecast!</h2>

          <div className="flex justify-center">
            <img src="/signUp.svg" alt="empty" className="w-[30em] h-[20em] object-contain" />
          </div>

          <button className="bg-[#21295C] text-white w-40" >
            <Link to="/signup"  className="block py-2 px-5" >Sign up</Link>
          </button>
        </div>

      }


      { !usersLocations && user !== null || usersLocations?.length === 0 &&  user !== null &&
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-medium text-xl dark:text-white text-center h-[20%]">Start adding the locations You want to know its weather information</h2>

          <div className="flex justify-center">
            <img src="/empty.svg" alt="empty" className="w-[30em] h-[20em] object-contain" />
          </div>

          <button className="bg-[#21295C] text-white w-40" >
            <Link to="/dashboard"  className="block py-2 px-5" >Search</Link>
          </button>
        </div>
      }


      { usersLocations && user !== null && usersLocations.map((item) =>  <WeatherItem key={item.id} id={item.id} position={{lat: item.latitude, lon: item.longitude}} /> ) }
    </>

  )
}
