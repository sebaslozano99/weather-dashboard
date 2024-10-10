import PropTypes from "prop-types";
import { useCoordinates } from "../contexts/CoordinatesContext";


export default function SuggestionItem({location}) {

  const { setCity } = useCoordinates();

  function setNewPosition(newPosition){
    setCity({
        lat: newPosition?.lat,
        lon: newPosition?.lon,
    })
  }

  return (
    <div className="py-2 px-1 bg-white border-b-2 cursor-pointer" onClick={() => setNewPosition(location)} >
        <p>{`${location?.name} - ${location?.country}`}</p>
    </div>
  )
}


SuggestionItem.propTypes = {
    location: PropTypes.object,
}