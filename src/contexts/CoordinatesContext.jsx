import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";




const CoordinatesContext = createContext();


function CoordinatesProvider({children}) {

  const [city, setCity] = useState({
    lat: 51.50,
    lon: 0.12,
  });

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