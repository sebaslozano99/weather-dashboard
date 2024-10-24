import { useThemeContext } from "../../../contexts/ThemeContext";
import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";
import Spinner from "../../../ui/Spinner";


export default function SuggestionsContainer({locations, isPending}) {

  const { isDarkMode } = useThemeContext();


  if(isPending) return (
    <div className="absolute z-50 flex justify-center items-center p-2 w-full mt-1 bg-white dark:bg-[#3f3f3f] rounded-lg" >
      <Spinner type={isDarkMode ? "secondary" : "primary"} />
    </div>
  )


  return (
    <div className="absolute z-50 w-full mt-1 bg-white dark:bg-[#252525] rounded-lg" >  
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