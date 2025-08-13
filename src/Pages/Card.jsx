import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../Components/Item/Item";
import "../CSS/card.css";

export const Card = () => {
  const { cardData, removeCardItem } = useContext(ShopContext);
  console.log("cardData:", cardData);

  return cardData.length > 0 ? (
    <div className="card-section">
      {cardData.map((item, i) => {
        return (
          <div>
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>

            <div className="cardItem-remove-btn">
              <button
                onClick={() => {
                  removeCardItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <>
      <div className="cardEmpty">
        <h1>Card is Empty</h1>
      </div>
    </>
  );
};
