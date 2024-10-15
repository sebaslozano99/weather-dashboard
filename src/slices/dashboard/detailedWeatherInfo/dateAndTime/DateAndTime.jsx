import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getCurrentPositionsTime from "../../../../services/timeApi";
import Spinner from "../../../../ui/Spinner";




export default function DateAndTime({data}) {

  const { coord } = data;
  const [positionTime, setPositionTime] = useState(null); // this is the time's data from the current position fetched from timeApi 2024-10-13T03:18:28.3208866

  const [currentPositionsTime, setCurrentPositionsTime] = useState(null); // once we have positionTime, we create a new Date, based on the positionTime, and crate an interval to display current time of that position

  const currentPositionsDate = currentPositionsTime?.toDateString() ?? "";



  const { data: timeData, isPending } = useQuery({
    queryKey: [coord.lat, coord.lon],
    queryFn: () => getCurrentPositionsTime(coord.lat, coord.lon),
    refetchOnWindowFocus: false,
  })


  useEffect(() => {
    if(timeData) setPositionTime(timeData?.dateTime);
  }, [timeData]);



  useEffect(() => {
    if(positionTime) setCurrentPositionsTime(new Date(positionTime)); // we get something like this: Sun Oct 13 2024 03:21:27 GMT-0500 (Colombia Standard Time)

  }, [positionTime])



  useEffect(() => {
    if(!positionTime) return;

    const intervalId = setInterval(() => {
      setCurrentPositionsTime(prevTime => new Date(prevTime.getTime() + 1000)); //get prev timestamp and add it 1s, every second
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }

  }, [currentPositionsTime, positionTime])



  return (
    <div className="flex flex-col justify-center items-center gap-8 col-span-3 row-span-4 p-4 bg-white/20 shadow-2xl  rounded-lg" >
      {
        isPending ? <Spinner size={8} />  :
        <>
          <h2 className="font-semibold text-center text-2xl md:text-xl lg:text-2xl" >{data.name}-{data.sys.country}</h2>

          <div className="flex flex-col items-center gap-1" >

            <p className="font-bold text-5xl md:text-3xl lg:text-4xl">{currentPositionsTime?.toLocaleTimeString()}</p>

            <p className="font-normal" >{currentPositionsDate}</p>  

          </div>
        </>
      }
    </div>
  )
}



DateAndTime.propTypes = {
    data: PropTypes.object,
}