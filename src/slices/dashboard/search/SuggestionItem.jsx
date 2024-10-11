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
        className="py-2 px-3 bg-white border-b-2 cursor-pointer rounded-lg" 
        onClick={() => setNewPosition(location)} 
    >
        <p>{`${location?.name} - ${location?.country}`}</p>
    </div>
  )
}


SuggestionItem.propTypes = {
    location: PropTypes.object,
}