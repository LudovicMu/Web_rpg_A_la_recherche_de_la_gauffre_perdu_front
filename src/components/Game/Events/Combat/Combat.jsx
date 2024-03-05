/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetEvent, setReward } from '../../../../store/eventSlice';
import attackIcon from '/src/assets/attack.svg';
import magicIcon from '/src/assets/wand-svgrepo-com.svg';
import talkIcon from '/src/assets/talk.svg';
import runIcon from '/src/assets/run.svg';
import './Combat.scss';

export default function Combat() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  const hero = useSelector((state) => state.character);
  const ennemie = event.monster;
  const { strength, dexterity, intelligence } = hero.stats;

  const navigate = useNavigate();

  // setup des hp et de la gestion des messages en combat
  const [heroHp, setHeroHp] = useState((strength + dexterity + intelligence) * 2 + strength * 2);
  const [ennemieHp, setennemieHp] = useState(ennemie.life_point);
  const [combatPopup, setCombatPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [heroTurn, setHeroTurn] = useState(true);

  let heroClassImg = '';
  switch (hero.characterClass) {
    case 1:
      heroClassImg = 'warrior.png';
      break;
    case 2:
      heroClassImg = 'mage.png';
      break;
    case 3:
      heroClassImg = 'rogue.png';
      break;
    default: break;
  }

  // affichage des message en combat
  const showPopup = () => {
    setCombatPopup(true);
    setTimeout(() => {
      setCombatPopup(false);
    }, 3000);
  };

  // fin de combat
  const showEndPopup = (whoIsDead) => {
    const { coin_min, coin_max } = ennemie;
    const reward = Math.round(Math.random() * (coin_max - coin_min) + coin_min);
    dispatch(setReward(reward));
    setHeroTurn(false);
    if (whoIsDead === 'hero') {
      setPopupMessage(
        'Oh non tu es inconscient... on va bientôt te ramener au village..',
      );
    } else {
      setPopupMessage(
        `Tu as réussi à surmonter ce défi et gagnes ${reward} d'or, tu rentres donc au village...`,
      );
      dispatch({ type: 'GET_REWARD' });
    }
    setCombatPopup(true);
    setTimeout(() => {
      navigate('/game/village');
      dispatch(resetEvent());
    }, 5000);
  };

  // gestion du tour de l'ennemie
  const ennemieTurn = () => {
    let heroHpCalc = heroHp;
    if (ennemieHp <= 0) {
      showEndPopup('ennemie');
    } else {
      setHeroTurn(false);
      //! en fonction de l'adversaire
      setTimeout(() => {
        // Jet de dès pour connaitre l'action
        const roll = Math.round(Math.random() * 20, 2);

        // Attaque si roll > 8
        if (roll > 8) {
          const damage = ennemie.physical_damage - hero.armor.physical_defense;
          setPopupMessage(`Vous prenez ${damage} de dégat`);
          setHeroHp(heroHp - damage);
          heroHpCalc -= damage;
        } else {
          // glabiboulga autrement
          setPopupMessage(`${ennemie.label} : j'aime pas les parisiens`);
        }
        showPopup();

        if (heroHpCalc <= 0) {
          setTimeout(() => {
            showEndPopup('hero');
          }, 3000);
        } else {
          setTimeout(() => {
            setHeroTurn(true);
          }, 3000);
        }
      }, 3000);
    }
  };

  // gestion de l'attaque physique du héro
  const attack = () => {
    const ennemieHpCalc = ennemieHp;
    let damage = Math.round(
      Math.random() * hero.stats.strength + hero.weapon.physical_damage,
      2,
    );
    if (
      Math.round(Math.random() * 100) < hero.weapon.critical_rate * hero.stats.dexterity * 10
    ) {
      damage *= 2.5; // hero.weapon.critical_damage;  - ennemie.physbloc;
      setPopupMessage(`Coup critique ! Vous infligez ${damage} de dégats`);
    } else {
      // damage -= ennemie.physbloc;
      if (damage < 0) {
        damage = 0;
      }
      setPopupMessage(`Vous infligez ${damage} de dégats`);
    }

    setennemieHp(ennemieHp - damage);
    if (ennemieHpCalc - damage <= 0) {
      showEndPopup('ennemie');
    } else {
      showPopup();
      ennemieTurn();
    }
  };

  // gestion de l'attaque magique du héro
  const magicAttack = () => {
    const ennemieHpCalc = ennemieHp;
    let damage = Math.round(
      Math.random() * hero.stats.intelligence + hero.weapon.magical_damage,
      2,
    );
    if (
      Math.round(Math.random() * 100) < hero.weapon.critical_rate * hero.stats.dexterity
    ) {
      damage *= hero.weapon.critical_damage; // - ennemie.magicbloc;
      setPopupMessage(`Coup critique ! Vous infligez ${damage} de dégats`);
    } else {
      // damage -= ennemie.magicbloc;
      if (damage < 0) {
        damage = 0;
      }
      setPopupMessage(`Vous infligez ${damage} de dégats`);
    }

    setennemieHp(ennemieHp - damage);
    if (ennemieHpCalc - damage <= 0) {
      showEndPopup('ennemie');
    } else {
      showPopup();
      ennemieTurn();
    }
  };

  // gestion de la discussion du personnage

  const dialogue = () => {
    if (Math.round(Math.random() * 20) < 7) {
      setPopupMessage(
        "Le monstre à l'air de vous écoutez, mais pas de vous comprendre... peut être à cause de son intelligence",
      );
    } else {
      const randomDialogue = Math.floor(Math.random() * 3);
      switch (randomDialogue) {
        case 0:
          setPopupMessage('Le monstre vous regarde mais ne réagis pas');
          break;
        case 1:
          setPopupMessage(
            'Le monstre essaye de comprendre ce que vous lui dîtes',
          );
          break;
        case 2:
          setPopupMessage(
            "Le monstre réflechis sur vos parole mais n'a pas l'air de lacher le combat",
          );
          break;
        default:
          setPopupMessage("Le monstre n'a pas l'air de vous répondre");
      }
    }
    showPopup();
    ennemieTurn();
  };

  // gestion de la fuite du héro
  const run = () => {
    let escape = false;
    if (Math.round(Math.random() * 100) < ennemie.escape) {
      escape = true;
      setPopupMessage('Vous arrivez à fuire');
      setTimeout(() => {
        navigate('/game/village');
      }, 3000);
    } else {
      setPopupMessage('Le monstre vous bloque le passage pour vous enfuir');
    }
    showPopup();
    if (escape === false) {
      ennemieTurn();
    }
  };

  // DOM de la page combat
  return (
    <div className="combat">
      <div className="combat__scene">
        <div className="combat__scene__hero">
          <img
            src={`/src/assets/${heroClassImg}`}
            alt="hero avatar"
            className="combat__scene__hero__heroAvatar"
          />
          <div
            className="combat__scene__hero__actualHp"
            style={{
              background: `linear-gradient(to right, rgb(26, 174, 159) ${
                (heroHp / ((strength + dexterity + intelligence) * 2 + strength * 2)) * 100
              }%, grey ${(heroHp / ((strength + dexterity + intelligence) * 2 + strength * 2)) * 100}%)`,
            }}
          >
            {heroHp}
          </div>
          <p>{hero.characterName}</p>
        </div>
        {combatPopup && <div className="combatPopup">{popupMessage}</div>}
        <div className="combat__scene__ennemie">
          {/* <img
            src={`/src/assets/${ennemie.id}.png`}
            alt="avatar de l'ennemie"
            className="combat__scene__enemy enemy Avatar"
          /> */}
          <div
            className="combat__scene__ennemie__actualHp"
            style={{
              background: `linear-gradient(to right, rgb(26, 174, 159) ${
                (ennemieHp / ennemie.life_point) * 100
              }%, grey ${(ennemieHp / ennemie.life_point) * 100}%)`,
            }}
            // ne pas oublier de virer le à apres ennemieHp
          >
            {ennemieHp}
          </div>
          {ennemie.label}
        </div>
      </div>
      {heroTurn ? (
        <div className="combat__buttonContainer">
          <div className="combat__buttonContainer__left">
            <button onClick={() => attack()} type="button">
              <p>ATTAQUE</p>
              <img src={attackIcon} alt="attack-icon" />
            </button>
            <button onClick={() => magicAttack()} type="button">
              <p>MAGIE</p>
              <img src={magicIcon} alt="magic-attack-icon" />
            </button>
          </div>
          <div className="combat__buttonContainer__right">
            <button onClick={() => dialogue()} type="button">
              <img src={talkIcon} alt="talk-icon" />
              <p>PARLER</p>
            </button>
            <button onClick={() => run()} type="button">
              <img src={runIcon} alt="run-icon" />
              <p>FUIR</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="ennemyTurnPopup">Tour de l'adversaire</div>
      )}
    </div>
  );
}
