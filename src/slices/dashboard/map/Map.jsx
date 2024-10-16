import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCoordinates } from "../../../contexts/CoordinatesContext";
import { FaLocationCrosshairs } from "react-icons/fa6";
import PropTypes from "prop-types";
import useGeolocation from "../../../hooks/useGeolocation";
import toast from "react-hot-toast";
import { useEffect } from "react";






export default function Map() {

  const { city, setCity } = useCoordinates();
  const { getGeoLocation, position: geoLocationPosition, isLoading, error } = useGeolocation();



  useEffect(() => {
    if(error) toast.error(error.message);
  }, [error])


  return (
      <div className={`relative w-full md:w-6/12 h-1/2 md:h-full`} >

        { !geoLocationPosition && 
          <button 
            onClick={() => getGeoLocation(setCity)}
            className="absolute bottom-2 left-2 z-50 flex justify-center gap-2 px-2 py-1.5 text-white min-w-16 bg-[#21295C] rounded-2xl" 
          >
           { isLoading ? "Loading..." : <FaLocationCrosshairs size={22} /> }
          </button>
        }

        <MapContainer center={[city.lat, city.lon]} zoom={6} scrollWheelZoom={true} className="z-10 h-full" >

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