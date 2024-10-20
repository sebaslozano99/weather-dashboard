import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";



const ThemeContext = createContext();


function ThemeProvider({children}) {

  const [isDarkMode, setIsDarkMode] = useState(false);  

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