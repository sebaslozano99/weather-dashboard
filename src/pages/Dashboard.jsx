import MainWeatherContainer from "../slices/dashboard/MainWeatherContainer";
import Map from "../slices/dashboard/map/Map";



export default function Dashboard() {

  return (
    <div className={`flex gap-4 w-full h-[90vh] p-8`} >
      <MainWeatherContainer  />
      <Map />
    </div>
  )
}
