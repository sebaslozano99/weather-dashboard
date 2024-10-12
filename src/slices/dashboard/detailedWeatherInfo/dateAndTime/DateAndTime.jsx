import PropTypes from "prop-types";
import { useEffect, useState } from "react";


export default function DateAndTime({data}) {

  const { coord } = data;
  const [currentPositionsTime, setCurrentPositionsTime] = useState(null);
  const [positionTime, setPositionTime] = useState(null); 

  const currentPositionsDate = positionTime?.toDateString();



  // console.log(positionTime);


  //we fetch info of the current position's time information
  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(`https://timeapi.io/api/time/current/coordinate?latitude=${coord.lat}&longitude=${coord.lon}`);
        const data = await res.json();

        console.log(data);
        setPositionTime(new Date(data?.dateTime));
      }
      catch(err){
        throw new Error(err);
      }
    }

    fetchData();

  }, [coord.lat, coord.lon])



  useEffect(() => {
    if(positionTime) setCurrentPositionsTime(new Date(positionTime));
  }, [positionTime])



  useEffect(() => {
    if(!positionTime) return;

    const intervalId = setInterval(() => {
      setCurrentPositionsTime(prevTime => new Date(prevTime.getTime() + 1000));
      // console.log(currentPositionsTime);
    }, 1000);


    return () => {
      clearInterval(intervalId);
    }
  }, [currentPositionsTime, positionTime])


  return (
    <div className="bg-white/20 col-span-4 row-span-4 rounded-lg" >
        <h2>{data.name}-{data.sys.country}</h2>

        <p>{currentPositionsDate}</p>

        <p>{currentPositionsTime?.toLocaleTimeString()}</p>
    </div>
  )
}



DateAndTime.propTypes = {
    data: PropTypes.object,
}