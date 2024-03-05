import React from "react";
import "./ItemPopup.scss";

export default function ItemPopupButtons({
  setSelectedItem,
  handleBuy,
  money,
  scrollPrice,
  selectedScroll,
  item,
}) {
  console.log(item);
  return (
    <>
      <div className="itemPopup__price">
        Prix: {item.category === "scroll" ? scrollPrice : item.price}
      </div>
      {/* if the player has not enough money then prompt that */}
      {money < item.price && <div>Vous n'avez pas assez d'or</div>}
      <div className="itemPopup__confirmation">
        {/* if the player has enough money or if the item is a scroll and a scroll is selected */}
        {(item.category !== "scroll" && money >= item.price) ||
        (item.category === "scroll" &&
          selectedScroll &&
          money >= item.price) ? (
          <button type="button" onClick={() => handleBuy(item)}>
            Acheter
          </button>
        ) : (
          <button type="button" className="noMoneyButton">
            Acheter
          </button>
        )}
        <button type="button" onClick={() => setSelectedItem(null)}>
          Annuler
        </button>
      </div>
    </>
  );
}
