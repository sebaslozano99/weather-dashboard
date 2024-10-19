import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteWeatherInfoFromList } from "../../services/supabase"
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";





export default function DeleteWeatherBtn({id}) {

 const queryClient = useQueryClient()

  const { mutate: deleteWeatherInfo, isPending } =useMutation({
    mutationFn: () => deleteWeatherInfoFromList(id),
    onSuccess: () => {
        queryClient.invalidateQueries(["mainWeather"]);
        toast.success("Deleted successfully!");
    },
    onError: (error) => toast.error(error.message || "Something went wrong deleting the item!"),
  })


  return (
    <button 
      className="absolute z-10 top-2 right-2 flex justify-center items-center text-white/60 hover:text-white/100 w-6 h-6 bg-[#21295C]/30 hover:bg-[#21295C]/60 transition-all duration-300 ease-in-out rounded-full" 
      onClick={() => deleteWeatherInfo(id)}
    >
        { isPending ? <Spinner type="secondary" size={0.9} /> : <FaTrashAlt size={15} /> }
    </button>
  )
}


DeleteWeatherBtn.propTypes = {
    id: PropTypes.number,
}