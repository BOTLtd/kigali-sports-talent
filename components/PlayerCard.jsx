import { likePlayer } from "../api";

export default function PlayerCard({ player }) {

  return (
    <div className="card">

      <h3 style={{margin:0}}>{player.name}</h3>
      <p style={{color:"#666"}}>
        {player.age} • {player.position} • {player.location}
      </p>

      <video
        src={player.video_url}
        controls
        style={{width:"100%", borderRadius:"10px"}}
      />

      <p>⚽ {player.goals} | 🎯 {player.assists}</p>
      <p><strong>Score:</strong> {player.score}</p>

      <button
        className="button"
        onClick={() => likePlayer(player.id)}
      >
        ❤️ {player.likes}
      </button>

    </div>
  );
}
