import logInIcon from "/src/assets/log-in.svg";
import "./Login.scss";
import closer from "/src/assets/x-circle.svg";

export default function Login({
  handlePopupChange,
  handleChange,
  handleLogin,
  nickname,
  password,
  handleLoginRedirect,
}) {
  return (
    <>
      <div className="logIn">
        <button
          className="logIn__logInHead__logInClose"
          type="button"
          onClick={() => handlePopupChange("")}
        >
          <img src={closer} />
        </button>
        <div className="logIn__logInHead">
          <img src={logInIcon} className="logInImage" alt="Icon Log-In" />
          <h3>Connexion à votre compte</h3>
        </div>
        <form className="logIn__logInBody">
          <div className="logIn__logInBody__logInContainer">
            <label className="logIn__logInBody__logInContainer__logInSubTitle">
              Pseudo
            </label>
            <input
              className="logIn__logInBody__logInContainer__logInInput"
              placeholder="Gaufre_albinos_du93"
              name="nickname"
              value={nickname}
              onChange={(event) => {
                handleChange(event, "nickname");
              }}
            />
          </div>
          <div className="logIn__logInBody__logInContainer">
            <label className="logIn__logInBody__logInContainer__logInSubTitle">
              Mot de passe
            </label>
            <input
              type="password"
              className="logIn__logInBody__logInContainer__logInInput"
              placeholder="******************"
              name="password"
              value={password}
              onChange={(event) => {
                handleChange(event, "password");
              }}
            />
          </div>
          <input
            type="submit"
            className="logIn__logInBody__connect"
            value="SE CONNECTER"
            onClick={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          />
        </form>
      </div>
    </>
  );
}
