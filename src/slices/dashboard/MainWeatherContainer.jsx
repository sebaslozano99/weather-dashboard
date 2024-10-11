import MainWeatherCard from "./MainWeatherCard";
import SearchBar from "./search/SearchBar";



// border-2 border-dashed border-purple-500


export default function MainWeatherContainer() {

  return (
    <div className={`
      flex flex-col gap-2
      w-full md:w-6/12 h-3/6 md:h-full
      `} 
    >
      <SearchBar />
      <MainWeatherCard />
    </div>
  )
}
