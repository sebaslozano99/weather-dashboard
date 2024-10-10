import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";



export default function SuggestionsContainer({locations}) {


  return (
    <div className="absolute w-full" >  
        {
            locations.map((location) => <SuggestionItem key={`${location.lat}-${location.lon}`} location={location} />  )
        }
    </div>
  )
}


SuggestionsContainer.propTypes = {
    locations: PropTypes.array
}