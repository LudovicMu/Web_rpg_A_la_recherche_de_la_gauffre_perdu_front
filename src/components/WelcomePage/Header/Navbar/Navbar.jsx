import { NavLink } from "react-router-dom";
import "./style.scss";

export default function Navbar({ page }) {
  return (
    <>
      {page && (
        <NavLink to="/" className="navlink">
          Accueil
        </NavLink>
      )}
      <NavLink to="/about" className="navlink">
        A propos
      </NavLink>
      <NavLink to="/contact" className="navlink">
        Nous contacter
      </NavLink>
      <NavLink to="/credits" className="navlink">
        Crédits
      </NavLink>
    </>
  );
}
