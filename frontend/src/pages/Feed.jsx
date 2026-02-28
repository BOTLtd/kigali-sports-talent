import { useEffect, useState } from "react";
import { getPlayers } from "../api";
import PlayerCard from "../components/PlayerCard";

export default function Feed() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data.data));
  }, []);

  return (
    <div>
      <h2>🔥 Top Talent</h2>

      {players.map(p => (
        <PlayerCard key={p.id} player={p} />
      ))}
    </div>
  );
}
