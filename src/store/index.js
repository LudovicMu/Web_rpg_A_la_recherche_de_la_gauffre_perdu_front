import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import characterSlice from './characterSlice';
import userMiddleware from './userMiddleware';
import characterMiddleware from './characterMiddleware';
import eventMiddleware from './eventMiddleware';
import eventSlice from './eventSlice';
import storeMiddleware from './storeMiddleware';
import storeSlice from './storeSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    character: characterSlice,
    event: eventSlice,
    store: storeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    userMiddleware,
    characterMiddleware,
    eventMiddleware,
    storeMiddleware,
  ),
});

export default store;
