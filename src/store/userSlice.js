import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  popup: '',
  user: {
    isLogged: false,
    email: '',
    verificationEmail: '',
    password: '',
    verificationPassword: '',
    loggedMessage: '',
    name: '',
    surname: '',
    birthdate: '',
    nickname: '',
    character_1: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changePopup: (state, action) => ({
      ...state,
      popup: action.payload,
    }),
    changeInputEmail: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        email: action.payload,
      },
    }),
    changeInputVerificationEmail: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        verificationEmail: action.payload,
      },
    }),
    changeInputPassword: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        password: action.payload,
      },
    }),
    changeInputVerificationPassword: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        verificationPassword: action.payload,
      },
    }),
    changeInputName: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        name: action.payload,
      },
    }),
    changeInputSurname: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        surname: action.payload,
      },
    }),
    changeInputBirthdate: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        birthdate: action.payload,
      },
    }),
    changeInputNickname: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        nickname: action.payload,
      },
    }),
    logout: (state) => {
      localStorage.clear();
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: false,
          email: '',
          verificationEmail: '',
          password: '',
          verificationPassword: '',
          loggedMessage: '',
          name: '',
          surname: '',
          birthdate: '',
          nickname: '',
        },
      };
    },
    login: (state, action) => {
      localStorage.setItem('jwtToken', action.payload.token);
      localStorage.setItem('isLogged', true);
      localStorage.setItem('user_id', action.payload.id);

      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          nickname: action.payload.nickname,
          loggedMessage: `Bienvenue ${action.payload.nickname}`,
          email: '',
          verificationEmail: '',
          password: '',
          verificationPassword: '',
          name: '',
          surname: '',
          birthdate: '',
        },
      };
    },
    loginError: (state, action) => {
      console.log(action.payload);
      return state;
    },
  },
});

export const {
  changePopup,
  changeInputEmail,
  changeInputVerificationEmail,
  changeInputPassword,
  changeInputVerificationPassword,
  changeInputName,
  changeInputSurname,
  changeInputBirthdate,
  changeInputNickname,
  login,
  logout,
  loginError,
} = userSlice.actions;

export default userSlice.reducer;
