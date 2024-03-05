import { useState } from "react";
import "./CharacterCreation.scss";
import user from "/src/assets/user.svg";
import sword from "/src/assets/sword-bold-svgrepo-com.svg";
import bow from "/src/assets/bow-svgrepo-com.svg";
import wand from "/src/assets/wand-svgrepo-com.svg";
import descriptionTab from "../../../../data/descriptionClass";

export default function CharacterCreation({
  nickname,
  characterName,
  handleChange,
  handleCharacterCreation,
}) {
  const [classDescription, setClassDescription] = useState("");
  const handleClick = (evt) => {
    const targetedClass = evt.target.closest("div").dataset.class;
    const returnClass = descriptionTab.filter(
      (row) => row.id === targetedClass
    );
    handleChange(undefined, "characterClass", returnClass[0].number);
    setClassDescription(returnClass[0]);
  };

  return (
    <>
      <div className="creation">
        <div className="creation__Head">
          <img src={user} className="creationImage" alt="Icon creation" />
          <h3>{nickname} il est l'heure de choisir votre héros</h3>
        </div>

        <div className="creation__Body">
          <div className="creation__Body__descriptionContainer">
            {classDescription.image && (
              <img
                className="creation__Body__descriptionContainer__classImage"
                src={`src/assets/${classDescription.image}`}
              />
            )}
            <div className="creation__Body__descriptionContainer__descriptionText">
              <h3>Description de la classe </h3>
              <p>
                {classDescription
                  ? classDescription.description
                  : "Sélectionnez une classe"}
              </p>
            </div>
          </div>
          <div className="creation__Body__creationContainer">
            <div className="creation__Body__creationContainer__nameTitle">
              <h4 className="creation__Body__creationContainer__nameTitle__nameSubTitle">
                Nom du personnage
              </h4>
              <input
                className="creation__Body__creationContainer__nameTitle__nameInput"
                placeholder="Nom"
                value={characterName}
                onChange={(event) => {
                  handleChange(event, "characterName");
                }}
              />
            </div>
            <div className="creation__Body__creationContainer__classSelector">
              <div
                className="creation__Body__creationContainer__classSelector__warrior"
                data-class="warrior"
              >
                <img
                  src={sword}
                  className="iconClass"
                  onClick={(evt) => {
                    handleClick(evt);
                  }}
                />
                <h3>Guerrier</h3>
                <p>"Tapeeeeeer!"</p>
              </div>
              <div
                className="creation__Body__creationContainer__classSelector__rogue"
                data-class="rogue"
              >
                <img
                  src={bow}
                  className="iconClass"
                  onClick={(evt) => {
                    handleClick(evt);
                  }}
                />
                <h3>Rôdeur</h3>
                <p>"Piu piuuuu!"</p>
              </div>
              <div
                className="creation__Body__creationContainer__classSelector__mage"
                data-class="mage"
              >
                <img
                  src={wand}
                  className="iconClass"
                  onClick={(evt) => {
                    handleClick(evt);
                  }}
                />
                <h3>Mage</h3>
                <p>"Fayabooowl!"</p>
              </div>
            </div>
            <button
              className="creation__Body__creationContainer__endCreation"
              type="button"
              onClick={(event) => {
                event.preventDefault();
                handleCharacterCreation();
              }}
            >
              TERMINER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
