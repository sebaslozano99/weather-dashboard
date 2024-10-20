import PropTypes from "prop-types";
import { useCoordinates } from "../../../contexts/CoordinatesContext";
import { useSearch } from "../../../contexts/SearchContext";





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
        <p className="dark:text-white" >{`${location?.name} - ${location?.country}`}</p>
    </div>
  )
}


SuggestionItem.propTypes = {
    location: PropTypes.object,
}