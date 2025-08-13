import React from "react";
import "./newCollection.css";
import { new_collections } from "../../assets/newcollections";
import { Item } from "../Item/Item";
export const NewCollections = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr></hr>
      <div className="collection">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};
