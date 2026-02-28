import axios from "axios";

export default function Upload() {

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    await axios.post(
      import.meta.env.VITE_API_URL + "/upload_player",
      form
    );

    alert("Player uploaded!");
  };

  return (
    <form onSubmit={submit} className="card">

      <h3>Upload Player</h3>

      <input name="user_id" placeholder="User ID" className="input"/>
      <input name="name" placeholder="Name" className="input"/>
      <input name="age" placeholder="Age" className="input"/>
      <input name="position" placeholder="Position" className="input"/>
      <input name="location" placeholder="Location" className="input"/>
      <input name="latitude" placeholder="Latitude" className="input"/>
      <input name="longitude" placeholder="Longitude" className="input"/>
      <input name="goals" placeholder="Goals" className="input"/>
      <input name="assists" placeholder="Assists" className="input"/>
      <input name="matches" placeholder="Matches" className="input"/>

      <input type="file" name="file" className="input"/>

      <button className="button">Upload</button>

    </form>
  );
}
