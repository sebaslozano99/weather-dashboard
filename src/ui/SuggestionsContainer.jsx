import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";



export default function SuggestionsContainer({locations, setObtainedCities}) {


  return (
    <div className="absolute w-full mt-1 bg-white rounded-lg" >  
        {
            locations?.map((location) => <SuggestionItem key={`${location.lat}-${location.lon}`} location={location} setObtainedCities={setObtainedCities} />  )
        }
    </div>
  )
}


SuggestionsContainer.propTypes = {
    setObtainedCities: PropTypes.func,
    locations: PropTypes.array
}