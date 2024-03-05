import { useSelector, useDispatch } from "react-redux";
import "./AfterCreationTest.scss";
import Loader from "../Utils/Loader";
import { changePopup } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { characterLogout } from "../../store/characterSlice";
import { useEffect } from "react";

export default function AfterCreationTest() {
  const { nickname, isLogged } = useSelector((state) => state.user.user);
  const { characterName, characterClass } = useSelector(
    (state) => state.character
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.isLogged || !localStorage.isCharacterLogged) {
      navigate("/");
      dispatch(changePopup("login"));
    }
  });

  let classLabel = "";

  const LoggedDiv = () => {
    return (
      <div className="creationTest">
        Bonjour {nickname}, vous avez bien créer {characterName}, le{" "}
        {classLabel} et êtes prêt à vous aventurer dans le donjon
      </div>
    );
  };

  switch (characterClass) {
    case 1:
      classLabel = "guerrier";
      break;
    case 2:
      classLabel = "mage";
      break;
    case 3:
      classLabel = "rôdeur";
      break;
    default:
      classLabel = "raté";
  }

  return (
    <div className="connectionTest">
      {localStorage.isLogged ? <LoggedDiv /> : <Loader />}
      {localStorage.isLogged ? (
        <button
          className="connectionTest__backButton"
          onClick={() => {
            navigate("/");
            dispatch(logout());
            dispatch(characterLogout());
          }}
        >
          SE DECONNECTER
        </button>
      ) : (
        <button
          className="connectionTest__backButton"
          onClick={() => {
            navigate("/");
          }}
        >
          RETOUR EN ARRIERE
        </button>
      )}
    </div>
  );
}
