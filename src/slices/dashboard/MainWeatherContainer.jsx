import { useState } from "react";
import MainWeatherCard from "./MainWeatherCard";
import { useCoordinates } from "../../contexts/CoordinatesContext";




export default function MainWeatherContainer() {

  const [search, setSearch] = useState("");
  const { setCity } = useCoordinates();


  function onSubmit(e){
    e.preventDefault();

    if(!search) return;
    setCity(search);

    setSearch("");
  }

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
      
      <MainWeatherCard />

    </div>
  )
}
