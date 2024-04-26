import React from "react";
import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import Feature from "../components/Feature.jsx";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Description />
        <Feature />
      </div>
    </div>
  );
};

export default Main;
