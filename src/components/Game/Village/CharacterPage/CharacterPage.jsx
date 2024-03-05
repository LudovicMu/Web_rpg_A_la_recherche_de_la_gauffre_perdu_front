/* eslint-disable react/prop-types */
import './CharacterPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changePopup } from '/src/store/userSlice.js';
import arrowLeft from '/src/assets/arrow-left.svg';
import arrowRight from '/src/assets/arrow-right.svg';
import user from '/src/assets/user.svg';
import heart from '/src/assets/heart.svg';
import sword from '/src/assets/sword-bold-svgrepo-com.svg';
import wand from '/src/assets/wand-svgrepo-com.svg';
import crit from '/src/assets/critical.svg';
import arm from '/src/assets/strong.svg';
import run from '/src/assets/run.svg';
import book from '/src/assets/book.svg';
import question from '/src/assets/question.svg';

export default function CharacterPage({ character }) {
  const handleClick = () => {
    console.log('le bouton marche');
  };
  const popup = useSelector((state) => state.user.popup);
  const dispatch = useDispatch();
  const handlePopupChange = (targetedPopup) => {
    dispatch(changePopup(targetedPopup));
  };

  const { strength, dexterity, intelligence } = character.stats;
  const { weapon, armor } = character;

  // Calculs des stats et bonus
  // TODO
  const hitPoint = (strength + dexterity + intelligence) * 2 + strength * 2;
  const PhysicalAttack = strength / 2;
  const MagicalAttack = intelligence / 2;
  const critical = 0;
  const bonusHp = armor.life_point;
  const bonusPhysicalAttack = weapon.physical_damage;
  const bonusMagicalAttack = weapon.magical_damage;
  const bonusCrit = 0;

  let className = '';
  let heroAvatar = '';
  switch (character.characterClass) {
    case 1:
      className = 'Guerrier';
      heroAvatar = 'warrior';
      break;
    case 2:
      className = 'Mage';
      heroAvatar = 'mage';
      break;
    case 3:
      className = 'Rôdeur';
      heroAvatar = 'rogue';
      break;
    default: break;
  }

  return (
    <div className="popupCharacterPage">
      <div className="popupCharacterPage__headCharacter">
        <div className="popupCharacterPage__headCharacter__returnTown">
          <img
            src={arrowLeft}
            className="popupCharacterPage__headCharacter__returnTown__arrowLeft"
            alt="left arrow"
          />
          <p
            className="popupCharacterPage__headCharacter__returnTown__titleReturn"
            onClick={() => handlePopupChange('')}
          >
            Retour au village
          </p>
        </div>
        <div className="popupCharacterPage__headCharacter__nameCharacter">
          {character.characterName}
        </div>
        <div
          className="popupCharacterPage__headCharacter__returnShop"
          onClick={(evt) => {
            handlePopupChange('store');
          }}
        >
          <p className="popupCharacterPage__headCharacter__returnShop__titleShop">
            Marchand
          </p>
          <img
            src={arrowRight}
            className="popupCharacterPage__headCharacter__returnTown__arrowRight"
            alt="right arrow"
          />
        </div>
      </div>
      <div className="popupCharacterPage__characterBody">
        <div className="popupCharacterPage__characterBody__loreContainer">
          <img
            src={
              character.characterName === ''
                ? `${user}`
                : `/src/assets/${heroAvatar}.png`
            }
            alt="user icon"
            className="popupCharacterPage__characterBody__loreContainer__avatar"
          />
          <div
            //-------------------------------------------
            //------- MORAL BAR -------------------------
            className="popupCharacterPage__characterBody__loreContainer__moralBar"
            style={{
              background: `linear-gradient(to right, ${
                character.moral >= 0 ? 'rgb(26, 174, 159)' : 'grey'
              } ${50 + character.moral}%, ${
                character.moral >= 0 ? 'grey' : 'red'
              } ${50 + character.moral}%)`,
            }}
          >
            Morale: {character.moral}
          </div>
          <h4 className="popupCharacterPage__characterBody__loreContainer__background">
            Background
          </h4>
          <p className="popupCharacterPage__characterBody__loreContainer__lore">
            Encore un morfal qui a cru que partir à la recherche d'une graufre
            faisait de lui un aventurier.
          </p>
        </div>
        <div className="popupCharacterPage__characterBody__secondaryStats">
          <div className="popupCharacterPage__characterBody__secondaryStats__statBar">
            <p>Stats</p>
            <p>Base</p>
            <p>Bonus</p>
          </div>
          <div className="popupCharacterPage__characterBody__secondaryStats__pv">
            <img
              src={heart}
              className="popupCharacterPage__characterBody__secondaryStats__pv__icon"
            />
            <p className="popupCharacterPage__characterBody__secondaryStats__pv__stat">
              PV
            </p>
            <div className="popupCharacterPage__characterBody__secondaryStats__pv__base">
              {hitPoint}
            </div>
            <div className="popupCharacterPage__characterBody__secondaryStats__pv__bonus">
              {bonusHp}
            </div>
          </div>
          <div className="popupCharacterPage__characterBody__secondaryStats__atk">
            <img
              src={sword}
              className="popupCharacterPage__characterBody__secondaryStats__atk__icon"
            />
            <p className="popupCharacterPage__characterBody__secondaryStats__atk__stat">
              ATK
            </p>
            <div className="popupCharacterPage__characterBody__secondaryStats__atk__base">
              {PhysicalAttack}
            </div>
            <div className="popupCharacterPage__characterBody__secondaryStats__atk__bonus">
              {bonusPhysicalAttack}
            </div>
          </div>
          <div className="popupCharacterPage__characterBody__secondaryStats__mgi">
            <img
              src={wand}
              className="popupCharacterPage__characterBody__secondaryStats__mgi__icon"
            />
            <p className="popupCharacterPage__characterBody__secondaryStats__mgi__stat">
              MGI
            </p>
            <div className="popupCharacterPage__characterBody__secondaryStats__mgi__base">
              {MagicalAttack}
            </div>
            <div className="popupCharacterPage__characterBody__secondaryStats__mgi__bonus">
              {bonusMagicalAttack}
            </div>
          </div>
          <div className="popupCharacterPage__characterBody__secondaryStats__crit">
            <img
              src={crit}
              className="popupCharacterPage__characterBody__secondaryStats__crit__icon"
            />
            <p className="popupCharacterPage__characterBody__secondaryStats__crit__stat">
              CRIT
            </p>
            <div className="popupCharacterPage__characterBody__secondaryStats__crit__base">
              {critical}
            </div>
            <div className="popupCharacterPage__characterBody__secondaryStats__crit__bonus">
              {bonusCrit}
            </div>
          </div>
        </div>
        <div className="popupCharacterPage__characterBody__mainStats">
          <div className="popupCharacterPage__characterBody__mainStats__currentClass">
            {' '}
            Classe: {className}
          </div>
          <div className="popupCharacterPage__characterBody__mainStats__mainCarac">
            <div className="popupCharacterPage__characterBody__mainStats__mainCarac__for">
              <img
                src={arm}
                className="popupCharacterPage__characterBody__mainStats__mainCarac__for__icon"
              />
              <p className="popupCharacterPage__characterBody__mainStats__mainCarac__for__stat">
                FOR
              </p>
              <div className="popupCharacterPage__characterBody__mainStats__mainCarac__for__base">
                {strength}
              </div>
            </div>
            <div className="popupCharacterPage__characterBody__mainStats__mainCarac__dex">
              <img
                src={run}
                className="popupCharacterPage__characterBody__mainStats__mainCarac__dex__icon"
              />
              <p className="popupCharacterPage__characterBody__mainStats__mainCarac__dex__stat">
                DEX
              </p>
              <div className="popupCharacterPage__characterBody__mainStats__mainCarac__dex__base">
                {dexterity}
              </div>{' '}
            </div>
            <div className="popupCharacterPage__characterBody__mainStats__mainCarac__int">
              <img
                src={book}
                className="popupCharacterPage__characterBody__mainStats__mainCarac__int__icon"
              />
              <p className="popupCharacterPage__characterBody__mainStats__mainCarac__int__stat">
                INT
              </p>
              <div className="popupCharacterPage__characterBody__mainStats__mainCarac__int__base">
                {intelligence}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popupCharacterPage__equipmentSection">
        <div className="popupCharacterPage__equipmentSection__equipTitle">
          Equipement
        </div>
        <div className="popupCharacterPage__equipmentSection__weapon">
          <div className="popupCharacterPage__equipmentSection__weapon__weaponTitle">
            ARME
          </div>
          <p className="popupCharacterPage__equipmentSection__weapon__weaponName">
            {character.weapon.label}
          </p>
          <div className="popupCharacterPage__equipmentSection__weapon__rarity">
            Rare
          </div>
        </div>
        <div className="popupCharacterPage__equipmentSection__armor">
          <p className="popupCharacterPage__equipmentSection__armor__armorTitle">
            ARMURE
          </p>
          <p className="popupCharacterPage__equipmentSection__armor__armorName">
            {character.armor.label}
          </p>
          <p className="popupCharacterPage__equipmentSection__armor__rarity">
            Rare
          </p>
        </div>
      </div>
      <img
        src={question}
        className="popupCharacterPage__helpSection"
        onClick={(evt) => {
          handleClick(evt);
        }}
      />

      {popup === 'store' && <Store />}
    </div>
  );
}
