import { useState } from "react";
import { convertTextToPosition } from "../../services/openWeather";
import { useQuery } from "@tanstack/react-query";
import MainWeatherCard from "./MainWeatherCard";
import SuggestionsContainer from "./SuggestionsContainer";





export default function MainWeatherContainer() {

  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: [search],
    queryFn: async ({signal}) => convertTextToPosition(search, signal),
  })



  return (
    <div className={`flex flex-col gap-4 px-6 w-6/12 h-full`} >

      <form 
        onSubmit={(e) => e.preventDefault()}
        className="relative" 
      >
        <input 
          type="text" 
          placeholder="search by name..." 
          className="py-1 px-3 w-full outline-none rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />

        <SuggestionsContainer locations={data} setSearch={setSearch}  />

      </form> 

      <MainWeatherCard />

    </div>
  )
}
