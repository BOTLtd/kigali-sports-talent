import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { getPlayers } from "../api";

export default function MapView() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data.data));
  }, []);

  return (
    <MapContainer center={[-1.95, 30.06]} zoom={12} style={{height:"400px"}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {players.map(p => (
        <Marker key={p.id} position={[p.latitude, p.longitude]}>
          <Popup>{p.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
