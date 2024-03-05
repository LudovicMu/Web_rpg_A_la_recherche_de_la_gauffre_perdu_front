import { changePopup, login, loginError } from './userSlice';
import { characterLogin, characterLoginError } from './characterSlice';

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === 'SUBMIT_AUTH') {
    const { nickname, password } = state.user.user;

    // ----------------------------------
    // ---------LOGIN----------------
    // ----------------------------------
    fetch('http://localhost:3001/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: nickname,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        return response.json();
      })
      .then((data) => {
        store.dispatch(login(data));
        if (data.characters) {
          console.log(data);
          console.table(data);
          store.dispatch(characterLogin(data.characters));
        } else {
          store.dispatch(changePopup('characterCreation'));
        }
      })

      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  // ----------------------------------
  // ---------REGISTER----------------
  // ----------------------------------
  if (action.type === 'SUBMIT_REGISTER') {
    const {
      nickname,
      email,
      password,
      verificationPassword,
      name,
      surname,
      birthdate,
    } = state.user.user;

    if (password === verificationPassword) {
      fetch('http://localhost:3001/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: nickname,
          mail: email,
          password: password,
          firstname: name,
          lastname: surname,
          birthdate: birthdate,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              'Il y a eu un problème à la création de votre compte, veuillez réessayer'
            );
          }

          return response.json();
        })
        .then((data) => {
          store.dispatch(login(data));
          store.dispatch(changePopup('characterCreation'));
        })

        .catch((error) => {
          store.dispatch(loginError(error.message));
        });
    } else {
      store.dispatch(loginError('Mot de passe de confirmation incorrect'));
    }
  }

  // ----------------------------------
  // --------- RE-LOGIN TOKEN----------------
  // ----------------------------------
  if (action.type === 'SUBMIT_AUTH_TOKEN') {
    const token = localStorage.getItem('jwtToken');
    const user_id = localStorage.getItem('user_id');
    fetch('http://localhost:3001/user/reconnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id,
        })
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        return response.json();
      })
      .then((data) => {
        store.dispatch(login(data));
        store.dispatch(characterLogin(data.characters));
      })
      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  next(action);
};

export default userMiddleware;
