import WeathersContainer from "../slices/myWeathers/WeathersContainer";



export default function MyWeather() {

  return (
    // <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full min-h-[90vh] p-2 md:p-6" > 
    /* </div>  */

      <div className="flex flex-col gap-6 p-2 md:p-6 w-full min-h-[90vh] mx-auto">
        <WeathersContainer />
      </div>
  )
}
