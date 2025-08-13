import React, { useContext } from "react";
import "../CSS/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";
export const SHopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" srcset="" height="20px" />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              ></Item>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore">Explore more</div>
    </div>
  );
};
