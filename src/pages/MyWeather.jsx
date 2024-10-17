import WeathersContainer from "../slices/myWeathers/WeathersContainer";



export default function MyWeather() {

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full h-[90vh] p-2 md:p-4 lg:p-8 " >
      <WeathersContainer />
    </div>
  )
}
