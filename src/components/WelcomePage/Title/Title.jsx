import logoWaffle from "/src/assets/logo-waffle.svg";
import { Link } from "react-router-dom";
import "./Title.scss";
export default function Title() {
  return (
    <div className="titleContainer">
      <Link to="/">
        <img src={logoWaffle} className="logoTitle" alt="Logo Waffle" />
      </Link>
      <h2 className="title">Fellowship of the waffle</h2>
    </div>
  );
}
