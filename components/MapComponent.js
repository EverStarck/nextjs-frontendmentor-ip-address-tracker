import { Map, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { Icon } from "leaflet";

export default function MapComponent({ data }) {
  console.log(data);

  const myIcon = new Icon({
    iconUrl: "/../assets/images/icon-location.svg",
    iconSize: [40, 50],
  });
  return (
    <Map
      center={[data.location.lat, data.location.lng]}
      zoom={12}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomleft" />
      <Marker position={[data.location.lat, data.location.lng]} icon={myIcon} />
    </Map>
  );
}
