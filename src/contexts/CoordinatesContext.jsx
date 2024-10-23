import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalstorage from "../hooks/useLocalstorage";




const CoordinatesContext = createContext();



//I wanted to instead of useState, use useSearchParams so that the URL could be bookmarked, however, since after user changes to a different route or page that does not maintain the query parameters (i.e: moving to /Homepage without manually including the queryParameters "lat=...&lon=...") and then returning to the /Dashboard without those parameters in the URL, useSearchParams will lose access to them. I could've set default parameters but after user changes to a different page, and returns to Dashboard, it will display the default value, instead of the last user's search.



function CoordinatesProvider({children}) {

  const { value: city, setValue: setCity } = useLocalstorage("position",  {lat: 51.50709058166208, lon: -0.1274924921257337});

  return (
    <CoordinatesContext.Provider value={{
      city,
      setCity
    }} >
      {children}
    </CoordinatesContext.Provider>
  )
}



export { CoordinatesProvider, useCoordinates }


function useCoordinates(){
  const context = useContext(CoordinatesContext);
  if(context === undefined) throw new Error("useCoordinates is being used outside of Coordinates Provider!");
  return context;
}


CoordinatesProvider.propTypes = {
  children: PropTypes.node,
}