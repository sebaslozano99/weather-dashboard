import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";



const SearchContext = createContext();


function SearchProvider({children}) {

  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{
        search, 
        setSearch,
    }} >
      { children }
    </SearchContext.Provider>
  )
}


export { SearchProvider, useSearch }


function useSearch(){
    const context = useContext(SearchContext);
    if(context === undefined) throw new Error("useSearch is being used outside of SearchProvider!");
    return context;
}



SearchProvider.propTypes = {
    children: PropTypes.node
}