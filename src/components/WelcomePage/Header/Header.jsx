import Navbar from "./Navbar/Navbar";
import "./style.scss";

export default function Header({ page }) {
  return (
    <ul className="navbar">
      <Navbar page={page} />
    </ul>
  );
}
