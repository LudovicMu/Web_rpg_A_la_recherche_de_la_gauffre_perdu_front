/* eslint-disable import/no-absolute-path */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './ItemPopup.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedScroll, setScrollPrice } from '/src/store/storeSlice.js';
import { useEffect } from 'react';
import ItemPopupButtons from './ItemPopupButtons';
import setShoppingDone from '/src/store/storeSlice.js';

function ItemPopup({ item,
  handleBuy,
  setSelectedItem,
  handleClick,
  money,
  shoppingDone,
  changeShoppingDone }) {
  const selectedScroll = useSelector(
    (state) => state.store.items.scroll.selectedScroll
  );
  const { strength, dexterity, intelligence } = useSelector(
    (state) => state.character.stats
  );
  const scroll = useSelector((state) => state.store.items.scroll);
  const scrollPrice = scroll.price;
  const level = strength + dexterity + intelligence;
  const dispatch = useDispatch();

  let selectedScrollFr = '';
  switch (selectedScroll) {
    case 'strength':
      selectedScrollFr = 'Force';
      break;
    case 'dexterity':
      selectedScrollFr = 'Dextérité';
      break;
    case 'intelligence':
      selectedScrollFr = 'Intelligence';
      break;
    default:
      selectedScrollFr = '';
  }

  useEffect(() => {
    dispatch(setSelectedScroll(null));
  }, []);

  return (
    <div className="itemPopup">
      <div className="itemPopup__stats">
        <div className="itemPopup__stats__itemName">{item.label}</div>
        {item.category === 'weapon' && (
          <div>
            <div>Dommages physiques: {item.physical_damage}</div>
            <div>Dommages magiques: {item.magical_damage}</div>
            <div>Dommages critiques: {item.critical_damage}</div>
            <div>Taux de critique: {item.critical_rate}</div>
          </div>
        )}
        {item.category === 'armor' && (
          <div>
            <div>Défense physique: {item.physical_defense}</div>
            <div>Défense magique: {item.magical_defense}</div>
            <div>Points de vie supplémentaires: {item.life_point}</div>
          </div>
        )}
        {item.category === 'scroll' && (
          <div className="itemPopup__scrollButtons">
            {selectedScroll ? (
              <div>+1 en {selectedScrollFr} ?</div>
            ) : (
              <div>sélectionnez la statistique à augmenter</div>
            )}

            <button
              type="button"
              onClick={() => {
                setSelectedItem(scroll);
                dispatch(setSelectedScroll('strength'));
                dispatch(setScrollPrice(level));
              }}
            >
              Force
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setSelectedScroll('dexterity'));
                dispatch(setScrollPrice(level));
                handleClick(scroll);
              }}
            >
              Dextérité
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setSelectedScroll('intelligence'));
                dispatch(setScrollPrice(level));
                setSelectedItem(scroll);
              }}
            >
              Intelligence
            </button>
          </div>
        )}
      </div>
      {shoppingDone ? (
        <div>
          C'est tout bon
          <button
            type="button"
            onClick={() => {
              setSelectedItem(null);
              dispatch(setSelectedScroll(null));
              dispatch(setScrollPrice(null));
              dispatch(changeShoppingDone(false));
            }}
          >
            Merci
          </button>
        </div>
      ) : (
        <ItemPopupButtons
          setSelectedItem={setSelectedItem}
          handleBuy={handleBuy}
          money={money}
          scrollPrice={scrollPrice}
          selectedScroll={selectedScroll}
          item={item}
        />
      )}
    </div>
  );
}

export default ItemPopup;
