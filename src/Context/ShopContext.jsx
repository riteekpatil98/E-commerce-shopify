import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  // const contextValue = { all_product };
  const [cardData, setCardData] = useState([]);

  const [cardCount, setCardCount] = useState(0);

  const addToCard = (productId) => {
    const cardItem = all_product.find((item) => item.id == productId);

    const alreadyItem = cardData.find((items) => items.id == productId);

    if (!alreadyItem) {
      setCardData([...cardData, cardItem]);
      setCardCount(cardCount + 1);
    } else if (alreadyItem) {
      alert("Product Already Added in Card");
    }
  };

  const removeCardItem = (itemId) => {
    const afterRemove = cardData.filter((item) => item.id != parseInt(itemId));
    setCardData(afterRemove);
    setCardCount(cardCount - 1);
  };

  return (
    <ShopContext.Provider
      value={{ all_product, cardData, addToCard, removeCardItem, cardCount }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
