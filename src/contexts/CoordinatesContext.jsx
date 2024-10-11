import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";




const CoordinatesContext = createContext();



//I wanted to instead of useState, use useSearchParams so that the URL could be bookmarked, however, since after user changes to a different route or page that does not maintain the query parameters (i.e: moving to /Homepage without manually including the queryParameters "lat=...&lon=...") and then returning to the /Dashboard without those parameters in the URL, useSearchParams will lose access to them. I could've set default parameters but after user changes to a different page, and returns to Dashboard, it will display the default value, instead of the last user's search.



function CoordinatesProvider({children}) {

  const [city, setCityOne] = useState(() => {
    const position = localStorage.getItem("position");
    return JSON.parse(position) || {lat: 51.50, lon: 0.12};
  });

  // const [city, setCity] = useState({
  //   lat: 51.50,
  //   lon: 0.12,
  // });


  function setCity(newPositionObject){
    setCityOne(newPositionObject);
    localStorage.setItem("position", JSON.stringify(newPositionObject));
  }


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