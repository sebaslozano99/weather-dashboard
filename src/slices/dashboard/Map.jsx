import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCoordinates } from "../../contexts/CoordinatesContext";
import PropTypes from "prop-types";



export default function Map() {

  const { city } = useCoordinates();


  return (
    <div className="w-6/12 h-full " >

      <MapContainer center={[city.lat, city.lon]} zoom={6} scrollWheelZoom={true} className="h-full" >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[city.lat, city.lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <ChangePosition position={[city.lat, city.lon]} />
        <DetectClick />

      </MapContainer>

    </div>
  )
}





function DetectClick(){
  
  const { setCity } = useCoordinates();

  useMapEvents({
    click: (e) => {
      console.log(e);
      setCity({lat: e.latlng.lat, lon: e.latlng.lng})
    },
  })
}


function ChangePosition({position}){
  const map = useMap();
  map.setView(position);
  return null;
}


ChangePosition.propTypes = {
  position: PropTypes.array,
}