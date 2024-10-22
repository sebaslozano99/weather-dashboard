import MainWeatherContainer from "../slices/dashboard/MainWeatherContainer";
import Map from "../slices/dashboard/map/Map";



// border-4 border-red-500


export default function Dashboard() {

  return (
    <div className={`
      flex flex-col md:flex-row gap-4 md:gap-4 
      w-full h-[90vh] 
      p-2 md:p-6`} 
    >
      <MainWeatherContainer  />
      <Map />
    </div>
  )
}
