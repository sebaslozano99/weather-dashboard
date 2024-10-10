import MainWeatherCard from "./MainWeatherCard";
import SearchBar from "./search/SearchBar";



export default function MainWeatherContainer() {

  return (
    <div className={`flex flex-col gap-4 px-6 w-6/12 h-full`} >
      <SearchBar />
      <MainWeatherCard />
    </div>
  )
}
