import "./UserProfile.scss";
import { useNavigate } from "react-router";
import userSvg from "/src/assets/user.svg";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <>
      <div className="userProfile">
        <div className="userProfile__headerProfile">
          <p className="userProfile__headerProfile__headTitle">
            A la recherche de la gaufre perdue
          </p>
          <div className="userProfile__headerProfile__headContainer">
            <div
              className="userProfile__headerProfile__headContainer__returnGame"
              onClick={() => {
                navigate("/game/village");
              }}
            >
              Retour au jeu
            </div>
          </div>
        </div>
        <div className="userProfile__bodyProfile">
          <div className="userProfile__bodyProfile__leftSection">
            <img
              src={userSvg}
              className="userProfile__bodyProfile__leftSection__userIcon"
            />
            <p className="userProfile__bodyProfile__leftSection__textDays">
              Vous avez démarré votre aventure il y a xxx jours... et toujours
              pas de gaufre à l’horizon...
            </p>
            <button className="userProfile__bodyProfile__leftSection__deco">
              Déconnexion
            </button>
          </div>
          <div className="userProfile__bodyProfile__rightSection">
            <h1 className="userProfile__bodyProfile__rightSection__titleProfile">
              Mon profil
            </h1>
            <div className="userProfile__bodyProfile__rightSection__infos">
              <h2>Mes informations personnelles</h2>
              <div className="userProfile__bodyProfile__rightSection__infos__dataTable">
                <div className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries">
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__type">
                    Nom
                  </p>
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__field">
                    {user.name}
                  </p>
                </div>
                <div className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries">
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__type">
                    Prénom
                  </p>
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__field">
                    {user.surname}
                  </p>
                </div>
                <div className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries">
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__type">
                    Pseudonyme
                  </p>
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__field">
                    {user.nickname}
                  </p>
                </div>
                <div className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries">
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__type">
                    Adresse email
                  </p>
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__field">
                    {user.email}
                  </p>
                </div>
                <div className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries">
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__type">
                    Mot de passe
                  </p>
                  <p className="userProfile__bodyProfile__rightSection__infos__dataTable__Entries__field">
                    {user.password}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userProfile__footer">The fellowship of the Waffle</div>
      </div>
    </>
  );
}
