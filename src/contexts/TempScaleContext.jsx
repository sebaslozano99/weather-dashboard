import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalstorage from "../hooks/useLocalstorage";




const TempScaleContext = createContext();


function TempScaleProvider({children}) {

  const { value: isCelcius, setValue: setIsCelcius } = useLocalstorage("temp_scale", true);
  // const [isCelcius, setIsCelcius] = useState(true);


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