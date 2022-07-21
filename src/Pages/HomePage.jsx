import React from "react";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "./HomeTopSliding";
import Kitchen from "./Kitchen";
import Support from "./Support";
import OtherHome from "./OtherHome";

import "../App.css";

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <HomeTopSliding />
      <Kitchen />
      <Support />
      <OtherHome />

      <Footer />
    </div>
  );
};

export default HomePage;
