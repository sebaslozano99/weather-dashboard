import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalstorage from "../hooks/useLocalstorage";



const ThemeContext = createContext();


function ThemeProvider({children}) { 

  const { value: isDarkMode, setValue: setIsDarkMode } = useLocalstorage("theme", false);

  function handleDarkMode(){
    setIsDarkMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      handleDarkMode
    }} >
      {children}
    </ThemeContext.Provider>
  )
}



export { ThemeProvider, useThemeContext };



function useThemeContext(){
    const context = useContext(ThemeContext);
    if(context === undefined) throw new Error("useThemeContext is being used outside of ThemeProvider!");
    return context;
}



ThemeProvider.propTypes = {
    children: PropTypes.node,
}