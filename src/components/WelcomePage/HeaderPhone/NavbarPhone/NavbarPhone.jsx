import { Link } from "react-router-dom";
import "./NavbarPhone.scss";

export default function NavbarPhone({ handleClosing }) {
  return (
    <ul className="phoneNavbar">
      <Link to={"/"} onClick={() => handleClosing()}>
        Accueil
      </Link>
      <Link to={"/about"} onClick={() => handleClosing()}>
        A propos
      </Link>
      <Link to={"/contact"} onClick={() => handleClosing()}>
        Nous contacter
      </Link>
      <Link to={"/credits"} onClick={() => handleClosing()}>
        Crédits
      </Link>
    </ul>
  );
}
