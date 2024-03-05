/* eslint-disable react/prop-types */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  changePopup,
  changeInputEmail,
  changeInputVerificationEmail,
  changeInputPassword,
  changeInputVerificationPassword,
  changeInputName,
  changeInputSurname,
  changeInputBirthdate,
  changeInputNickname,
} from '../../store/userSlice';
import {
  changeClass,
  changeCharacterName,
} from '../../store/characterSlice';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Header from './Header/Header';
import Title from './Title/Title';
import Login from './ChoosePath/Login/Login';
import Register from './ChoosePath/Register/Register';
import ChoosePath from './ChoosePath/ChoosePath';
import CharacterCreation from './ChoosePath/CharacterCreation/CharacterCreation';
import HeaderPhone from './HeaderPhone/HeaderPhone';
import './WelcomePage.scss';

export default function WelcomePage({ page }) {
  const popup = useSelector((state) => state.user.popup);
  const dispatch = useDispatch();
  const {
    email,
    password,
    verificationPassword,
    name,
    surname,
    birthdate,
    nickname,
    isLogged,
  } = useSelector((state) => state.user.user);

  const { characterName, isCharacterLogged } = useSelector(
    (state) => state.character,
  );

  /* useEffect(() => {
    console.log("id character 1 : " + character_1);
    if (character_1 === "" || character_1 === undefined) {
    } else {
      console.log(character_1);
      dispatch({ type: "LOGIN_CHARACTER" });
    }
  }, [character_1]); */

  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const handlePopupChange = (targetedPopup) => {
    dispatch(changePopup(targetedPopup));
  };

  const handleLogin = async () => {
    dispatch({ type: 'SUBMIT_AUTH' });
  };

  const handleRegister = () => {
    dispatch({ type: 'SUBMIT_REGISTER' });
  };
  const handleCharacterCreation = () => {
    dispatch({ type: 'SUBMIT_CHARACTERCREATION' });
  };

  useEffect(() => {
    if (isLogged === true && isCharacterLogged === true) {
      handlePopupChange('');
      navigate('/game/village');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged, isCharacterLogged]);

  const changeField = (value, inputName) => {
    switch (inputName) {
      case 'email':
        dispatch(changeInputEmail(value));
        break;
      case 'verificationEmail':
        dispatch(changeInputVerificationEmail(value));
        break;
      case 'password':
        dispatch(changeInputPassword(value));
        break;
      case 'verificationPassword':
        dispatch(changeInputVerificationPassword(value));
        break;
      case 'name':
        dispatch(changeInputName(value));
        break;
      case 'surname':
        dispatch(changeInputSurname(value));
        break;
      case 'birthdate':
        dispatch(changeInputBirthdate(value));
        break;
      case 'nickname':
        dispatch(changeInputNickname(value));
        break;
      case 'characterName':
        dispatch(changeCharacterName(value));
        break;
      case 'characterClass':
        dispatch(changeClass(value));
        break;
      default: break;
    }
  };

  const handleChange = (event, inputName, value) => {
    if (!event) {
      changeField(value, inputName);
    } else {
      changeField(event.target.value, inputName);
    }
  };

  return (
    <>
      <div className={`welcomePage ${popup ? 'popupOpen' : ''}`}>
        {popup && <div className="darkOverlay" />}
        {isTabletOrMobile ? <HeaderPhone /> : <Header page={page} />}
        {!isTabletOrMobile && <Title />}
        <Home page={page} handlePopupChange={handlePopupChange} />
      </div>
      <Footer />
      {popup === 'choosePath' && (
        <ChoosePath handlePopupChange={handlePopupChange} />
      )}
      {popup === 'login' && (
        <Login
          handlePopupChange={handlePopupChange}
          handleChange={handleChange}
          handleLogin={handleLogin}
          nickname={nickname}
          password={password}
        />
      )}
      {popup === 'register' && (
        <Register
          handlePopupChange={handlePopupChange}
          handleRegister={handleRegister}
          handleChange={handleChange}
          email={email}
          password={password}
          verificationPassword={verificationPassword}
          name={name}
          surname={surname}
          birthdate={birthdate}
          nickname={nickname}
        />
      )}
      {popup === 'characterCreation' && (
        <CharacterCreation
          nickname={nickname}
          characterName={characterName}
          handleChange={handleChange}
          handleCharacterCreation={handleCharacterCreation}
        />
      )}
    </>
  );
}
