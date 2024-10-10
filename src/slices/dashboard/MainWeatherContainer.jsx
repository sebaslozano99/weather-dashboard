import { useEffect, useState } from "react";
import MainWeatherCard from "./MainWeatherCard";
import { convertTextToPosition } from "../../services/openWeather";
import { useQuery } from "@tanstack/react-query";
import SuggestionsContainer from "../../ui/SuggestionsContainer";





export default function MainWeatherContainer() {

  const [obtainedCities, setObtainedCities] = useState([]);
  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: [search],
    queryFn: ({signal}) => convertTextToPosition(search, signal)
  })




  useEffect(() => {
    if(!data?.length) return;
    setObtainedCities(data);
    console.log(obtainedCities);
  },[data, obtainedCities])


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

        <SuggestionsContainer locations={obtainedCities} />

      </form>
      
      <MainWeatherCard />

    </div>
  )
}
