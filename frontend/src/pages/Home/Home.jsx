/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </div>
  );
};

export default Home;
