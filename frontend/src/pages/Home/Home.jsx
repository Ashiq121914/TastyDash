/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  );
};

export default Home;
