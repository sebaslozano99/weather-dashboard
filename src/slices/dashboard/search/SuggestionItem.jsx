import { useCoordinates } from "../../../contexts/CoordinatesContext";
import { useSearch } from "../../../contexts/SearchContext";
import PropTypes from "prop-types";




export default function SuggestionItem({location}) {

  const { setCity } = useCoordinates();
  const { setSearch } = useSearch();

  
  function setNewPosition(newPosition){
    setCity({lat: newPosition?.lat, lon: newPosition?.lon});
    setSearch("");
  }

  return (
    <div 
      className="py-2 px-3 bg-white hover:bg-[#eee] dark:bg-[#252525]/60 dark:hover:bg-[#343434] border-b-[1px] dark:border-b-[#3a3a3a] cursor-pointer rounded-lg" 
      onClick={() => setNewPosition(location)} 
    >
      <p className="dark:text-white text-sm" >
        {`${location?.name} ${location?.state ? "-" : ""} ${location?.state || ""}`} 
        <span className={`fi fi-${location?.country.toLowerCase()} ml-2 text-xl`} ></span>
      </p>
    </div>
  )
}


SuggestionItem.propTypes = {
    location: PropTypes.object,
}