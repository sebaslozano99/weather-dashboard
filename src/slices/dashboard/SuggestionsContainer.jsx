import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";



export default function SuggestionsContainer({locations, setSearch}) {


  return (
    <div className="absolute w-full mt-1 bg-white rounded-lg" >  
        {
          locations?.map((location) =>
            
          <SuggestionItem 
            key={`${location.lat} ${Math.random() * 50}`} 
            location={location} setSearch={setSearch} 
          />  
          )
        }
    </div>
  )
}


SuggestionsContainer.propTypes = {
    locations: PropTypes.array,
    setSearch: PropTypes.func,
}