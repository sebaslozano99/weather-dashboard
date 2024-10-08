import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Map() {

  return (
    <div className="w-6/12 h-full " >

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="h-full" >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  )
}
