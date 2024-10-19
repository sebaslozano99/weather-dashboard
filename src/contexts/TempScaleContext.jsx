import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";




const TempScaleContext = createContext();


function TempScaleProvider({children}) {

  const [isCelcius, setIsCelcius] = useState(false);


  function handleChangeTempScale(){
    setIsCelcius((prev) => !prev);
  }

  return (
    <TempScaleContext.Provider value={{
        isCelcius,
        handleChangeTempScale
    }} >
      {children}
    </TempScaleContext.Provider>
  )
}

export { TempScaleProvider, useTempScaleContext }

function useTempScaleContext(){
    const context = useContext(TempScaleContext);
    if(context === undefined) throw new Error("useTempScaleContext is being used outside of TempScaleProvider!");
    return context;
}


TempScaleProvider.propTypes = {
    children: PropTypes.node,
}