import { useState } from "react";
import MainWeatherCard from "./MainWeatherCard";
import PropTypes from "prop-types";


export default function MainWeatherContainer({data, isPending, error, onChangeCity}) {

  const [search, setSearch] = useState("");

  function onSubmit(e){
    e.preventDefault();
    
    if(!search) return;

    onChangeCity(search);
    setSearch("");
  }

  // border-4 border-orange-500
  return (
    <div className={`flex flex-col gap-4 px-6 w-6/12 h-full`} >

      <form 
        onSubmit={onSubmit}
        className="" 
      >
        <input 
          type="text" 
          placeholder="search by name..." 
          className="py-1 px-3 w-full outline-none rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </form>
      
      <MainWeatherCard data={data} isPending={isPending} error={error} />

    </div>
  )
}


MainWeatherContainer.propTypes = {
  data: PropTypes.object,
  isPending: PropTypes.bool,
  onChangeCity: PropTypes.func,
  error: PropTypes.string,
}