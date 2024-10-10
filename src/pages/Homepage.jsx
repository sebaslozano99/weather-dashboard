import { useCoordinates } from "../contexts/CoordinatesContext"



export default function Homepage() {

  const { city } = useCoordinates();

  console.log(city);

  return (
    <div>
      Homepage...
      Applications
    </div>
  )
}
