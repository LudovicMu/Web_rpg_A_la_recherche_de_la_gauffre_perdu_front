import { loginError } from './userSlice';
import { refreshStoreItem, changeShoppingDone } from './storeSlice';
import { characterLogin } from './characterSlice';

const storeMiddleware = (store) => (next) => (action) => {
  if (action.type === 'REFRESH_STORE') {
    const token = localStorage.getItem('jwtToken');
    const { strength, dexterity, intelligence } = store.getState().character.stats;
    const { characterClass } = store.getState().character;
    const level = strength + dexterity + intelligence;

    fetch('http://localhost:3001/town/shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ characterLevel: level, classId: characterClass }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème côté serveur (forcemment)');
        }

        return response.json();
      })
      .then((data) => {
        const newData = { ...data, level };
        store.dispatch(refreshStoreItem(newData));
      })
      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  if (action.type === 'BUY_SCROLL') {
    const token = localStorage.getItem('jwtToken');
    const { scroll } = store.getState().store.items;
    const user_id = localStorage.getItem('user_id');

    fetch('http://localhost:3001/town/shop/buy/stat', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ scroll, user_id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème côté serveur (forcemment)');
        }

        return response.json();
      })
      .then((data) => {
        console.log('data:', data);
        store.dispatch(characterLogin(data));
        store.dispatch(changeShoppingDone(true));
      })
      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  if (action.type === 'BUY_EQUIPMENT') {
    const token = localStorage.getItem('jwtToken');
    const { selectedItem } = store.getState().store;
    const user_id = localStorage.getItem('user_id');

    fetch('http://localhost:3001/town/shop/buy/equipment', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ selectedItem, user_id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Problème côté serveur (forcemment)');
        }

        return response.json();
      })
      .then((data) => {
        console.log('data:', data);
        store.dispatch(characterLogin(data));
        store.dispatch(changeShoppingDone(true));
      })
      .catch((error) => {
        store.dispatch(loginError(error.message));
      });
  }

  next(action);
};

export default storeMiddleware;
