import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollection/NewCollections";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
      
    </div>
  );
};
