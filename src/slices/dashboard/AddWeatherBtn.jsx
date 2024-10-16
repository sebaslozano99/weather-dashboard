import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { addToWeatherList } from "../../services/supabase";
import { useAuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import PropTypes from "prop-types";




export default function AddWeatherBtn({city}) {

  const { mutate: addWeather, isPending: isAddingWeather,  } = useMutation({
    mutationFn: () => addToWeatherList(city.lat, city.lon, user.id),
    onError: (err) => toast.error(err.message || err.description || "Something went wrong adding this weather!"),
    onSuccess: () => toast.success("Added successfully!"),
    refetchOnWindowFocus: false
  });

  const navigate = useNavigate();
  const { user } = useAuthContext();


  return (
    <button 
        className="absolute top-2 right-2 z-50 flex justify-center items-center gap-2 px-2 py-1.5 text-white w-8 h-8 bg-[#21295C]/30 hover:bg-[#21295C]/60 transition-all duration-300 ease-in-out rounded-full" 
        onClick={ user ? () => addWeather(city.lat, city.lon, user.id) : () => navigate("/account")}
    >
           { isAddingWeather ? <Spinner size={1} /> : "+" }
    </button>
  )
}


AddWeatherBtn.propTypes = {
    city: PropTypes.object,
}