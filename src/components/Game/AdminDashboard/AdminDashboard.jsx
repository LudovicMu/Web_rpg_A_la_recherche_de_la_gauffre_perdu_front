import "./AdminDashboard.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePopup } from "/src/store/userSlice.js";
import { useNavigate } from "react-router-dom";
import { logout } from "/src/store/userSlice.js";
import { characterLogout } from "/src/store/characterSlice";
import PlayersTab from "./PlayersTab/PlayerTab";
import MonstersTab from "./MonstersTab/MonsterTab";
import Searchbar from "./Searchbar/Searchbar";

export default function AdminDashboard() {
  const popup = useSelector((state) => state.user.popup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePopupChange = (targetedPopup) => {
    dispatch(changePopup(targetedPopup));
  };
  return (
    <>
      <div className="adminPage">
        <div className="adminPage__headContainer">
          <div className="adminPage__headContainer__headerAdmin">
            <p className="adminPage__headContainer__headerAdmin__headTitle">
              A la recherche de la gaufre perdue
            </p>
            <div className="adminPage__headContainer__headerAdmin__headContainer">
              <div
                className="adminPage__headContainer__headerAdmin__headContainer__deco"
                onClick={() => {
                  dispatch(logout());
                  dispatch(characterLogout());
                  navigate("/");
                }}
              >
                Déconnexion
              </div>
            </div>
          </div>
          <div className="adminPage__headContainer__gestionTabs">
            <button
              className="adminPage__headContainer__gestionTabs__players"
              onClick={(evt) => {
                handlePopupChange("playersTab");
              }}
            >
              Gestion des Joueurs
            </button>
            <button
              className="adminPage__headContainer__gestionTabs__monsters"
              onClick={(evt) => {
                handlePopupChange("monstersTab");
              }}
            >
              Gestion des Monstres
            </button>
          </div>
        </div>
        <Searchbar />
        <div className="adminPage__body">
          {popup === "playersTab" && <PlayersTab />}
          {popup === "monstersTab" && <MonstersTab />}
        </div>
        <div className="adminPage__footer">The fellowship of the Waffle</div>
      </div>
    </>
  );
}
