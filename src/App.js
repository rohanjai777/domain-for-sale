import "./styles.css";
import Poster from "./components/poster";
import Email from "./components/email";
export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <div className="full-screen">
        <Poster />
      </div>
      <div className="align-middle bg-light" style={{ padding: "10px" }}>
        <Email />
      </div>
    </div>
  );
}
