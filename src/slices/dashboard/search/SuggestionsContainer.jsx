import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";
import Spinner from "../../../ui/Spinner";



export default function SuggestionsContainer({locations, isPending}) {


  if(isPending) return (
    <div className="absolute flex justify-center items-center p-2 w-full mt-1 bg-white rounded-lg" >
      <Spinner />
    </div>
  )


  return (
    <div className="absolute w-full mt-1 bg-white rounded-lg" >  
      {
        locations?.map((location) =>
          
        <SuggestionItem 
          key={`${location.lat} ${Math.random() * 50}`} 
          location={location}
        />  
        )
      }
    </div>
  )
}


SuggestionsContainer.propTypes = {
    locations: PropTypes.array,
    isPending: PropTypes.bool,
}