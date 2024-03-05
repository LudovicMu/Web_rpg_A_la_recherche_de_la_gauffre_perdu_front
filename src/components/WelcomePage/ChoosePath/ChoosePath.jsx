import "./ChoosePath.scss";

export default function ChoosePath({ handlePopupChange }) {
  return (
    <div className="choosePath">
      AVEZ-VOUS DEJA UN HERO POUR CETTE AVENTURE ?
      <div className="choosePath__container">
        <div className="choosePath__container__buttonsContainer">
          <div className="choosePath__container__buttonsContainer__explainer">
            <span>Si vous avez déjà votre héros</span>
            <button onClick={() => handlePopupChange("login")}>
              JE ME CONNECTE
            </button>
          </div>
          <div className="choosePath__container__buttonsContainer__explainer">
            Si vous n'avez pas encore votre héros
            <button onClick={() => handlePopupChange("register")}>
              JE REJOINS L'AVENTURE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
