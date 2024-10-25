import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useCoordinates } from "../../../contexts/CoordinatesContext";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useEffect } from "react";
import useGetWeatherInfoOfPosition from "../../useGetWeatherInfoOfPosition";
import useGetUsersLocation from "../../useGetUsersWeatherList";
import PropTypes from "prop-types";
import GetMyLocationBtn from "./GetMyLocationBtn";
import L from "leaflet";
import toast from "react-hot-toast";


const iconPerson = new L.Icon({
  iconUrl: '/marker.svg',
  iconSize: [30, 30], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32],
  shadowUrl: '/marker-shadow.png',
  shadowSize:   [47, 47],
  shadowAnchor: [12, 48],
});




export default function Map() {

  const { city, setCity } = useCoordinates();
  const { user } = useAuthContext();
  const { data } = useGetWeatherInfoOfPosition(city);
  const { usersLocations, isError } = useGetUsersLocation(user);


  useEffect(() => {
    if(isError) toast.error("Something went wrong displaying your saved locations markers in the map!", {
      duration: 4000
    });
  }, [isError])



  return (
    <div className={`relative w-full md:w-6/12 h-1/2 md:h-full`} >

      <GetMyLocationBtn setCity={setCity} />

      <MapContainer center={[city.lat, city.lon]} zoom={6} scrollWheelZoom={true} className="z-10 h-full" >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        { usersLocations !== undefined  && usersLocations.map((location) => (
          <Marker key={location.id} position={[+location?.latitude, +location?.longitude]} icon={iconPerson}  >
            <div className="bg-[#f9f9f9] text-[#333] rounded-lg" >
              <Popup>
                { location?.city_name }
              </Popup>
            </div>
          </Marker>
        ))
        }

        <Marker position={[city.lat, city.lon]} >
          <Popup >
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