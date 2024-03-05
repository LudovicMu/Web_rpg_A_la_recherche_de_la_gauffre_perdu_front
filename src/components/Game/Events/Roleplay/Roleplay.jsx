import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Roleplay.scss";

export default function Roleplay() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  const event = "Un événement intéressant s'est produit !";

  const handleContinue = () => {
    setShowPopup(false);
    // Ajoutez ici le code pour continuer le jeu ou rediriger vers une autre page
  };

  return (
    <div className="roleplay">
      {showPopup && (
        <div className="roleplay__popup">
          <div className="roleplay__popup-content">
            <h2>Événement</h2>
            <p>{event}</p>
            <button onClick={handleContinue} className="roleplay__button">
              Continuer
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => navigate("/game/village")}
        className="roleplay__button"
      >
        Retourner au village
      </button>
    </div>
  );
}
