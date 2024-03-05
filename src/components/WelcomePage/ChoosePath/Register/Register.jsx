import React from 'react';
import './Register.scss';
import { useState } from 'react';

import closer from '/src/assets/x-circle.svg';

export default function Register({
  handlePopupChange,
  handleRegister,
  handleChange,
  email,
  password,
  verificationPassword,
  name,
  surname,
  birthdate,
  nickname,
}) {
  const [errors, setErrors] = useState({
    surname: '',
    name: '',
    birthdate: '',
    nickname: '',
    email: '',
    password: '',
    verificationPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!surname) {
      newErrors.surname = 'Le nom est requis';
      isValid = false;
    } else {
      newErrors.surname = '';
    }

    if (!name) {
      newErrors.name = 'Le prénom est requis';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (!birthdate) {
      newErrors.birthdate = 'La date de naissance est requise';
      isValid = false;
    } else {
      const currentDate = new Date();
      const userBirthdate = new Date(birthdate);
      const userAgeInMonths = (currentDate.getFullYear() - userBirthdate.getFullYear()) * 12
      + (currentDate.getMonth() - userBirthdate.getMonth());

      if (userAgeInMonths < 216) { // 216 is 18 years in months;
        newErrors.birthdate = 'Vous devez avoir au moins 18 ans';
        isValid = false;
      } else {
        newErrors.birthdate = '';
      }
    }

    if (!nickname) {
      newErrors.nickname = 'Le pseudo est requis';
      isValid = false;
    } else {
      newErrors.nickname = '';
    }

    if (!email) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
      isValid = false;
    } else if (!/\d/.test(password)) {
      newErrors.password = 'Le mot de passe doit avoir au moins un chiffre';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    if (!verificationPassword) {
      newErrors.verificationPassword = 'La confirmation du mot de passe est requise';
      isValid = false;
    } else if (verificationPassword !== password) {
      newErrors.verificationPassword = 'La confirmation du mot de passe ne correspond pas';
      isValid = false;
    } else {
      newErrors.verificationPassword = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleRegister();
    }
  };

  return (
    <div className="register">
      <div className="register__title">Création de votre compte joueur</div>

      <button
        className="register__logInClose"
        type="button"
        onClick={() => handlePopupChange('')}
      >
        <img src={closer} alt='close popup' />
      </button>

      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__form__left">

          {/* Surname input */}
          {errors.surname && <p className="error">{errors.surname}</p>}
          <div className="input__container">
            <label htmlFor="register__surname">Nom</label>
            <input
              id="register__surname"
              value={surname}
              type="text"
              name="surname"
              onChange={(event) => {
                handleChange(event, 'surname');
              }}
            />
          </div>

          {/* Name input */}
          {errors.name && <p className="error">{errors.name}</p>}
          <div className="input__container">
            <label htmlFor="register__name">Prénom</label>
            <input
              id="register__name"
              value={name}
              type="text"
              name="name"
              onChange={(event) => {
                handleChange(event, 'name');
              }}
            />
          </div>

          {/* Birthdate input */}
          {errors.birthdate && <p className="error">{errors.birthdate}</p>}
          <div className="input__container">
            <label htmlFor="register__birthdate">Date de naissance</label>
            <input
              id="register__birthdate"
              value={birthdate}
              type="date"
              name="birthdate"
              onChange={(event) => {
                handleChange(event, 'birthdate');
              }}
            />
          </div>

          {/* Submit button */}
          <input
            type="submit"
            value="Finaliser"
          />
          <input
            type="submit"
            value="DEV __>"
            onClick={(event) => {
              event.preventDefault();
              handlePopupChange('characterCreation');
            }}
          />
        </div>

        <div className="register__form__right">

          {/* Nickname input */}
          {errors.nickname && <p className="error">{errors.nickname}</p>}
          <div className="input__container">
            <label htmlFor="register__id">Votre pseudo</label>
            <input
              id="register__id"
              value={nickname}
              type="text"
              name="id"
              onChange={(event) => {
                handleChange(event, 'nickname');
              }}
            />
          </div>

          {/* Email input */}
          {errors.email && <p className="error">{errors.email}</p>}
          <div className="input__container">
            <label htmlFor="register__email">Email</label>
            <input
              id="register__email"
              value={email}
              type="email"
              name="email"
              onChange={(event) => {
                handleChange(event, 'email');
              }}
            />
          </div>

          {/* Password input */}
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="input__container">
            <label htmlFor="register__password">Mot de passe</label>
            <input
              id="register__password"
              value={password}
              type="password"
              name="password"
              onChange={(event) => {
                handleChange(event, 'password');
              }}
            />
          </div>

          {/* Verification password input */}
          {errors.verificationPassword && <p className="error">{errors.verificationPassword}</p>}
          <div className="input__container">
            <label htmlFor="register__verificationPassword">
              Confirmation MDP
            </label>
            <input
              id="register__verificationPassword"
              value={verificationPassword}
              type="password"
              name="verificationPassword"
              onChange={(event) => {
                handleChange(event, 'verificationPassword');
              }}
            />

          </div>
        </div>
      </form>
    </div>
  );
}
