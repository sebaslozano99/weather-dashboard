import { useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import useGeolocation from "../../../hooks/useGeolocation";
import toast from "react-hot-toast";
import Spinner from "../../../ui/Spinner";
import PropTypes from "prop-types";



export default function GetMyLocationBtn({setCity}) {

  //So far the user's position is stored in localStorage. The only problem is that if another user logs in in the same device and the previous user had pressed this btn, then the current user won't see this button available.
  const { getGeoLocation, position: geoLocationPosition, isLoading, error } = useGeolocation();


    useEffect(() => {
      if(error) toast.error(error.message);
    }, [error])


  if(geoLocationPosition) return null;

  return (
    <button 
      onClick={() => getGeoLocation(setCity)}
      className="absolute bottom-2 left-2 z-20 flex justify-center gap-2 px-2 py-1.5 text-white min-w-16 bg-[#21295C]/50 hover:bg-[#21295C]/80 transition-all duration-300 ease-in-out rounded-2xl" 
    >
      { isLoading ? <Spinner size={1} type="secondary" /> : <FaLocationCrosshairs size={22} /> }
    </button>
  )
}


GetMyLocationBtn.propTypes = {
    setCity: PropTypes.func,
}