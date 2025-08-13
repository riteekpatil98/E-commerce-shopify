import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { BreadCrums } from "../Components/Breadcrums/BreadCrums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { Description } from "../Components/Description/Description";
import { RelatedProducts } from "../Components/RelatatedProducts/RelatedProducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === parseInt(productId));

  return (
    <div>
      <BreadCrums product={product}></BreadCrums>
      <ProductDisplay product={product}></ProductDisplay>
      <Description></Description>
      <RelatedProducts></RelatedProducts>
    </div>
  );
};
