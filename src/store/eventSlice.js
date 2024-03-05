import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  label: '',
  description: '',
  type: '',
  monster: {
    id: 23,
    label: 'L’Hu-Gaufre-haie',
    description: 'Un buisson à gaufres chantant, il disparaît souvent quand vient l’hiver, mais il réapparait quand le printemps revient.',
    life_point: 15,
    physical_damage: 8,
    magical_damage: 0,
    escape: 80,
    coin_min: 0,
    coin_max: 5,
  },
  npc: {},
  reward: 0,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getEvent: (state, action) => ({
      ...state,
      label: action.payload.label,
      description: action.payload.description,
      type: action.payload.type,
      monster: action.payload.monster,
      npc: action.payload.npc,
    }),

    resetEvent: (state) => ({
      ...state,
      label: '',
      description: '',
      type: '',
      monster: {},
      npc: {},
      reward: 0,
    }),

    setReward: (state, action) => ({
      ...state,
      reward: action.payload,
    }),
  },
});

// J'exporte les actions creators qui correspondent à mes reducers
// export const {} = recipesSlice.actions;
export const { getEvent, resetEvent, setReward } = eventSlice.actions;

export default eventSlice.reducer;
