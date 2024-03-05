import { React, useEffect } from 'react';
import './Village.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import CharacterPage from './CharacterPage/CharacterPage';
import Store from './Store/Store';
import arrowLeft from '/src/assets/arrow-left.svg';
import { changePopup } from '/src/store/userSlice.js';

export default function Village() {
  const popup = useSelector((state) => state.user.popup);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isStoreRefreshed = useSelector((state) => state.store.isStoreRefreshed);
  const playedIntro = useSelector((state) => state.character.playedIntro);

  const handlePopupChange = (targetedPopup) => {
    dispatch(changePopup(targetedPopup));
  };

  const character = useSelector((state) => state.character);
  const isLogged = localStorage.getItem('isLogged');
  const isCharacterLogged = localStorage.getItem('isCharacterLogged');

  useEffect(() => {
    if (isLogged === 'true' && isCharacterLogged === 'true' && !character.name) {
      console.log('appel de reconnexion');
      dispatch({ type: 'SUBMIT_AUTH_TOKEN' });
    }
  }, []);

  useEffect(() => {
    if (!localStorage.isLogged || !localStorage.isCharacterLogged) {
      navigate("/");
      dispatch(changePopup("login"));
    }
  }, []);

  return (
    <div className="village">
      {popup && <div className="darkOverlay" />}
      <Header />
      <div className="village__titlePage">Village</div>
      <div className="village__otherPages">
        <div
          className="village__otherPages__character"
          onClick={(evt) => {
            handlePopupChange('characterPage');
          }}
        >
          PERSONNAGE
        </div>
        <div
          className="village__otherPages__shop"
          onClick={(evt) => {
            handlePopupChange('store');
            if (!isStoreRefreshed) {
              dispatch({ type: 'REFRESH_STORE' });
            }
          }}
        >
          MARCHAND
        </div>
      </div>
      <div
        className="village__goDungeon"
        onClick={() => {
          dispatch({ type: 'GET_EVENT' });
          navigate('/game/dungeon');
        }}
      >
        <img
          src={arrowLeft}
          className="village__goDungeon__ArrowLeft"
          alt="left arrow"
        />
        <p className="village__goDungeon__titleDungeon">ALLER DANS LE DONJON</p>
      </div>
      {popup === 'characterPage' && <CharacterPage character={character} />}
      {popup === 'store' && <Store />}
    </div>
  );
}
