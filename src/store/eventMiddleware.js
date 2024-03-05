import { loginError } from './userSlice';
import { getEvent } from './eventSlice';
import { characterLogin } from './characterSlice';

const eventMiddleware = (store) => (next) => (action) => {
  const token = localStorage.getItem('jwtToken');

  if (action.type === 'GET_EVENT') {
    console.log('passe bien par le middleware event');

    // ------------------------------------------
    // ---------GET RANDOM EVENT---------------
    // ------------------------------------------
    fetch('http://localhost:3001/town/event', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème côté serveur (forcemment)');
        }

        return response.json();
      })
      .then((data) => {
        console.table(data);
        store.dispatch(getEvent(data));
      })

      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  if (action.type === 'GET_REWARD') {
    console.log('passe bien par le middleware reward');
    const monster_id = store.getState().event.monster.id;
    const user_id = localStorage.getItem('user_id');
    const {reward} = store.getState().event;

    // ------------------------------------------
    // ---------GET REWARD-----------------------
    // ------------------------------------------

    fetch('http://localhost:3001/town/event/reward', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ monster_id, user_id, reward }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème côté serveur (forcemment)');
        }

        return response.json();
      })
      .then((data) => {
        console.table(data);
        store.dispatch(characterLogin(data));
      })

      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  next(action);
};

export default eventMiddleware;
