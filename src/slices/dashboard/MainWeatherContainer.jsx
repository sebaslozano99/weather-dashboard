import { useState } from "react";
import MainWeatherCard from "./MainWeatherCard";
// import { convertTextToPosition } from "../../services/openWeather";
import { useQuery } from "@tanstack/react-query";
import SuggestionsContainer from "../../ui/SuggestionsContainer";





export default function MainWeatherContainer() {

  const [obtainedCities, setObtainedCities] = useState([]);
  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: [search],

    queryFn: async ({signal}) => {
      if(search.length < 3) return [];

      try {
          const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`, { signal } );

          const data = await res.json();

          setObtainedCities(data);

          return data;
      }
      catch(err){
          // Handle specific fetch error or abort error
          if (err.name === 'AbortError') {
              console.log('Fetch aborted');
          } else {
              console.error('Fetch error:', err);
              throw new Error(err.message); // Rethrow with the original message
          }
      }
    }
  })



  function onSubmit(e){
    e.preventDefault();

    if(!search) return;
    // setCity(search);

    setSearch("");
  }


  return (
    <div className={`flex flex-col gap-4 px-6 w-6/12 h-full`} >

      <form 
        onSubmit={onSubmit}
        className="relative" 
      >
        <input 
          type="text" 
          placeholder="search by name..." 
          className="py-1 px-3 w-full outline-none rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />

        <SuggestionsContainer locations={obtainedCities} setObtainedCities={setObtainedCities} />

      </form>
      

      <MainWeatherCard />

    </div>
  )
}
