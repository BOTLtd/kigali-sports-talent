import axios from "axios";

export default function Upload() {

  const submit = async (e) => {
    const form = new FormData(e.target);
    await axios.post(import.meta.env.VITE_API_URL + "/upload_player", form);
    alert("Uploaded!");
  };

  return (
    <form onSubmit={submit} style={{padding:20}}>
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
      <input type="file" name="file"/>
      <button type="submit">Upload</button>
    </form>
  );
}
