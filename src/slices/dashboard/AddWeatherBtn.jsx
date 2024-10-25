import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { addToWeatherList } from "../../services/supabase";
import { useAuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import PropTypes from "prop-types";
import useGetUsersLocation from "../useGetUsersWeatherList";






export default function AddWeatherBtn({city, city_name, country_code}) {

  const navigate = useNavigate();
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const { usersLocations } = useGetUsersLocation(user);


  const { mutate: addWeather, isPending: isAddingWeather  } = useMutation({
    mutationFn: () => addToWeatherList(city_name, country_code, city.lat, city.lon, user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usersWeather", user] });
      toast.success("Added successfully!", {
        duration: 1000
      });
    },
    onError: (err) => toast.error(err.message || err.description || "Something went wrong adding this weather!"),
    refetchOnWindowFocus: false,
  });
  

  const isThisCityAlreadyIncluded = usersLocations?.find((item) => item.city_name === city_name && item.country_code === country_code ); //There might be cases in which there is a city with the same name as another within the same Country but in a different state, in that case, user should be able to add it to their list, but since neither the weather api nor the map proportionates the state name, so far I don't a way to differenciate.




  if(isThisCityAlreadyIncluded) return null;

  return (
    <button 
      className="absolute z-10 top-2 right-2 flex justify-center items-center gap-2 px-2 py-1.5 text-white w-8 h-8 bg-[#21295C]/30 dark:bg-white/20 hover:bg-[#21295C]/60 dark:hover:bg-white/40  transition-all duration-300 ease-in-out rounded-full" 
      onClick={ user ? () => addWeather(city_name, country_code, city.lat, city.lon, user.id) : () => navigate("/account")}
    >
      { isAddingWeather ? <Spinner size={1} type="secondary" /> : "+" }
    </button>
    
  )
}


AddWeatherBtn.propTypes = {
  city: PropTypes.object,
  city_name: PropTypes.string,
  country_code: PropTypes.string,
}