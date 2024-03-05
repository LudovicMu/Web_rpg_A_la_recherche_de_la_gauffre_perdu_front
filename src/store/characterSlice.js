import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  characterName: "",
  characterClass: 1,
  armor: {
    label: "Armure des Mange-gauffres",
    life_point: 50,
    physical_defense: 0,
    magical_defense: 0,
  },
  weapon: {
    label: "Epée de Gauffroi de Pain-de-Mie",
    physical_damage: 0,
    magical_damage: 0,
    critical_damage: 10,
    critical_rate: 15,
  },
  money: 0,
  moral: 0,
  event: "",
  playedIntro: "",
  stats: { strength: 15, dexterity: 5, intelligence: 3 },
  isCharacterLogged: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    changeClass: (state, action) => {
      return {
        ...state,
        characterClass: action.payload,
      };
    },

    changeCharacterName: (state, action) => {
      return {
        ...state,
        characterName: action.payload,
      };
    },

    characterLogin: (state, action) => {
      localStorage.setItem("characterName", action.payload.nickname);
      localStorage.setItem("isCharacterLogged", true);
      localStorage.setItem("playedIntro", action.payload.intro_is_played);

      return {
        ...state,
        characterName: action.payload.nickname,
        characterClass: action.payload.class_id,
        moral: action.payload.moral,
        money: action.payload.purse,
        event: action.payload.event_id,
        playedIntro: action.payload.intro_is_played,
        isCharacterLogged: true,
        stats: {
          ...state.stats,
          strength: action.payload.strength,
          dexterity: action.payload.dexterity,
          intelligence: action.payload.intelligence,
        },
        armor: action.payload.armor,
        weapon: action.payload.weapon,
      };
    },

    characterLogout: (state, action) => {
      console.log("passe par le character logout");
      return {
        ...state,
        characterName: "",
        characterClass: "",
        money: 0,
        moral: 0,
        event: "",
        playedIntro: "",
        isCharacterLogged: false,
        stats: {
          ...state.stats,
          strength: "",
          dexterity: "",
          intelligence: "",
        },
        armor: {
          ...state.armor,
          name: "",
        },
        weapon: {
          ...state.weapon,
          name: "",
        },
      };
    },
    characterLoginError(state, action) {
      alert(action.payload);
    },
  },
});

// J'exporte les actions creators qui correspondent à mes reducers
// export const {} = recipesSlice.actions;
export const {
  changeClass,
  changeCharacterName,
  characterLogin,
  characterLogout,
  characterLoginError,
} = characterSlice.actions;

export default characterSlice.reducer;
