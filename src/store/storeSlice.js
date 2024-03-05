import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isStoreRefreshed: false,
  selectedItem: { id: 0, category: '' },
  shoppingDone: false,
  items: {
    item1: {
      id: 3,
      label: 'Arc de base',
      description: 'La légende dit : aucune flèche atteint la cible',
      physical_damage: 15,
      magical_damage: 10,
      critical_damage: 12,
      critical_rate: 18,
      object_level: 5,
      price: 2,
      type: 3,
      category: 'weapon',
    },
    item2: {
      id: 6,
      label: 'Arc des nomades',
      description: 'Avec un peu de chance tu mangeras du sanglier ce soir',
      physical_damage: 15,
      magical_damage: 10,
      critical_damage: 12,
      critical_rate: 18,
      object_level: 5,
      price: 5,
      type: 3,
      category: 'weapon',
    },
    item3: {
      id: 9,
      label: 'Armure de base',
      description: 'Cousue main par mémé',
      physical_defense: 15,
      magical_defense: 10,
      life_point: 12,
      object_level: 5,
      price: 2,
      type: 3,
      category: 'armor',
    },
    scroll: {
      selectedScroll: null,
      category: 'scroll',
      price: 0,
    },
  },
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    refreshStoreItem: (state, action) => ({
      ...state,
      isStoreRefreshed: false,
      items: {
        ...state.items,
        item1: action.payload[0],
        item2: action.payload[1],
        item3: action.payload[2],
      },
    }),
    setSelectedScroll: (state, action) => ({
      ...state,
      items: {
        ...state.items,
        scroll: {
          ...state.items.scroll,
          selectedScroll: action.payload,
        },
      },
    }),
    setScrollPrice: (state, action) => ({
      ...state,
      items: {
        ...state.items,
        scroll: {
          ...state.items.scroll,
          price: action.payload * 10,
        },
      },
    }),
    handleBuyingSelectedItem: (state, action) => ({
      ...state,
      selectedItem: {
        ...state.selectedItem,
        id: action.payload.id,
        category: action.payload.category,
      },
    }),
    changeShoppingDone: (state, action) => ({
      ...state,
      shoppingDone: action.payload,
    }),
  },
});

// J'exporte les actions creators qui correspondent à mes reducers
// export const {} = recipesSlice.actions;
export const {
  refreshStoreItem,
  setSelectedScroll,
  setScrollPrice,
  handleBuyingSelectedItem,
  changeShoppingDone,
} = storeSlice.actions;

export default storeSlice.reducer;
