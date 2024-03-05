import "./Header.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/userSlice";
import { characterLogout } from "../../../../store/characterSlice";
export default function Header() {
  const handleClick = (evt) => {
    console.log("le bouton marche");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="header">
      <p className="header__headTitle">A la recherche de la gaufre perdue</p>
      <div className="header__headContainer">
        <div
          className="header__headContainer__button1"
          onClick={() => {
            navigate("/userprofile");
          }}
        >
          Profil
        </div>
        <div
          className="header__headContainer__button2"
          onClick={() => {
            dispatch(logout());
            dispatch(characterLogout());
            navigate("/");
          }}
        >
          Quitter
        </div>
      </div>
    </div>
  );
}
