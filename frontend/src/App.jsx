import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import Upload from "./pages/Upload";
import Map from "./pages/Map";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Login />
        <Upload />
        <Feed />
        <Map />
      </div>
    </div>
  );
}
