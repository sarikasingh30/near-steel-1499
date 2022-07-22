import React from "react";
import HomeTopSliding from "./HomeTopSliding";
import Kitchen from "./Kitchen";
import Support from "./Support";
import OtherHome from "./OtherHome";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <HomeTopSliding />
      <Kitchen />
      <Support />
      <OtherHome />
    </div>
  );
};

export default HomePage;
