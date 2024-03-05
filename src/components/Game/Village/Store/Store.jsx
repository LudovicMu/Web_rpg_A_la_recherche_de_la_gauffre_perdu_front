import React from 'react';
import './Store.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changePopup } from '/src/store/userSlice.js';
import { handleBuyingSelectedItem, changeShoppingDone, setScrollPrice } from '../../../../store/storeSlice';
import arrowLeft from '/src/assets/arrow-left.svg';
import merchant from '/src/assets/merchant.png';
import ItemPopup from './ItemPopup/ItemPopup';

export default function Store() {
  const [selectedItem, setSelectedItem] = useState(null); // State to keep track of selected item
  const popup = useSelector((state) => state.user.popup);
  const store = useSelector((state) => state.store);
  const shoppingDone = useSelector((state) => state.store.shoppingDone);
  const { items } = store;
  const dispatch = useDispatch();
  const money = useSelector((state) => state.character.money);
  const { strength, dexterity, intelligence } = useSelector(state => state.character.stats);
  const level = strength + dexterity + intelligence;

  const handlePopupChange = (targetedPopup) => {
    dispatch(changePopup(targetedPopup));
  };

  const handleItemUrl = (item) => {
    if (item.category === 'weapon') {
      return `/src/assets/${item.category}/${item.id}.png`;
    }
    if (item.category === 'armor') {
      return `/src/assets/${item.category}/${item.id}.png`;
    }
  };

  const item1Url = handleItemUrl(items.item1);
  const item2Url = handleItemUrl(items.item2);
  const item3Url = handleItemUrl(items.item3);

  const handleClick = (item) => {
    console.log('Clicked item:', item);
    setSelectedItem(item); // Set the selected item
    dispatch(handleBuyingSelectedItem(item)); // Dispatch the action to store the selected item
  };

  const handleBuy = () => {
    // Handle buy logic here
    console.log('Buying item:', selectedItem);
    if (selectedItem.category === 'scroll') {
      dispatch({ type: 'BUY_SCROLL' });
    } else {
      dispatch({ type: 'BUY_EQUIPMENT' });
    }
  };

  // New component to display item popup

  return (
    <div className="popupShop">
      {selectedItem && <div className="darkOverlay" />}
      <div className="popupShop__leftSide">
        <div
          className="popupShop__leftSide__returnTown"
          onClick={() => handlePopupChange('')}
        >
          <img
            src={arrowLeft}
            className="popupShop__returnTown__arrowLeft"
            alt="return town arrow"
          />
          <div className="popupShop__returnTown__returnTitle">
            Retour au village
          </div>
        </div>
        <img
          src={merchant}
          className="popupShop__leftSide__imageMerchant"
          onClick={() => dispatch({ type: 'REFRESH_STORE' })}
        />
      </div>
      <div className="popupShop__rightSide">
        <div className="popupShop__rightSide__headShop">BOUTIQUE</div>
        <div className="popupShop__rightSide__articlesShop">
          <div className="popupShop__rightSide__articlesShop__items">
            <div className="popupShop__rightSide__articlesShop__items__item01">
              <div
                className="popupShop__rightSide__articlesShop__items__item01__imageItem"
                style={{
                  backgroundImage: `url(${item1Url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                {items.item1.label}
              </div>

              <div
                className="popupShop__rightSide__articlesShop__items__item01__price"
                onClick={(evt) => {
                  handleClick(items.item1);
                }}
              >
                Prix
              </div>
            </div>
            <div className="popupShop__rightSide__articlesShop__items__item02">
              <div
                className="popupShop__rightSide__articlesShop__items__item02__imageItem"
                style={{
                  backgroundImage: `url(${item2Url})`,
                  ackgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                {items.item2.label}
              </div>
              <div
                className="popupShop__rightSide__articlesShop__items__item02__price"
                onClick={(evt) => {
                  handleClick(items.item2);
                }}
              >
                Prix
              </div>
            </div>
            <div className="popupShop__rightSide__articlesShop__items__item03">
              <div
                className="popupShop__rightSide__articlesShop__items__item03__imageItem"
                style={{
                  backgroundImage: `url(${item3Url})`,
                  ackgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                {items.item3.label}
              </div>
              <div
                className="popupShop__rightSide__articlesShop__items__item03__price"
                onClick={(evt) => {
                  handleClick(items.item3);
                }}
              >
                Prix
              </div>
            </div>
          </div>
          <div className="popupShop__rightSide__articlesShop__scroll">
            <div className="popupShop__rightSide__articlesShop__scroll__itemScroll">
              Parchemin STAT+1
            </div>
            <div
              className="popupShop__rightSide__articlesShop__scroll__price"
              onClick={(evt) => {
                handleClick(items.scroll);
                dispatch(setScrollPrice(level));
              }}
            >
              Prix
            </div>
          </div>
        </div>
        <div className="popupShop__rightSide__goldInStock">Or: {money}</div>
      </div>
      {selectedItem && (
        <ItemPopup
          item={selectedItem}
          handleBuy={handleBuy}
          handleClick={handleClick}
          setSelectedItem={setSelectedItem}
          money={money}
          shoppingDone={shoppingDone}
          changeShoppingDone={changeShoppingDone}
        />
      )}
    </div>
  );
}
