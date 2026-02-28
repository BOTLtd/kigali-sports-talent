import { useEffect, useState } from "react";
import { getPlayers, likePlayer } from "../api";

export default function Feed() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(res => setPlayers(res.data.data));
  }, []);

  return (
    <div>
      {players.map(p => (
        <div key={p.id} style={{background:"#fff", margin:10, padding:10}}>

          <h3>{p.name}</h3>

          <video src={p.video_url} controls width="100%" />

          <p>⚽ {p.goals} 🎯 {p.assists}</p>
          <p>Score: {p.score}</p>

          <button onClick={() => likePlayer(p.id)}>
            ❤️ {p.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
