import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCoordinates } from "../../../contexts/CoordinatesContext";
import PropTypes from "prop-types";
import useGetWeatherInfoOfPosition from "../../useGetWeatherInfoOfPosition";
import GetMyLocationBtn from "./GetMyLocationBtn";






export default function Map() {

  const { city, setCity } = useCoordinates();
  const { data } = useGetWeatherInfoOfPosition(city);

  return (
    <div className={`relative w-full md:w-6/12 h-1/2 md:h-full`} >

      <GetMyLocationBtn setCity={setCity} />

      <MapContainer center={[city.lat, city.lon]} zoom={6} scrollWheelZoom={true} className="z-10 h-full" >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[city.lat, city.lon]}>
          <Popup>
            { data?.name }
          </Popup>
        </Marker>

        <ChangePosition position={[city.lat, city.lon]} />
        <DetectClick />

      </MapContainer>

    </div>
  )
}




//get position (lat and lon) from the map on click
function DetectClick(){
  
  const { setCity } = useCoordinates();
  useMapEvents({
    click: (e) => {
      // console.log(e);
      setCity({ lat: e.latlng.lat, lon: e.latlng.lng})
    },
  })
}

// re-render the map when new position received
function ChangePosition({position}){
  const map = useMap();
  map.setView(position);
  return null;
}


ChangePosition.propTypes = {
  position: PropTypes.array,
}