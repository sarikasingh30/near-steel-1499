import React from "react";
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import ChappalSlippers from "../Components/Categories/ChappalSlippers";
import FlipFlop from "../Components/Categories/FlipFlop";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "../Components/Home/HomeTopSliding";
import Kitchen from "../Components/Home/Kitchen";
import Support from "../Components/Home/Support";
import OtherHome from "../Components/Home/OtherHome";

import SpicesAndFootWear from "../Components/Home/SpicesAndFootWear";
import Clothing from "../Components/Home/Clothing";
import PersonalCare from "../Components/Home/PersonalCare";
import Spices from "../Components/Home/Spices";
import Footwear from "../Components/Home/Footwear";
import FootwearHeading from "../Components/Home/FootwearHeading";

const HomePage = () => {
  return (
    <div>
      <HomeTopSliding />
      <Kitchen />
      <Support />
      <OtherHome />
      <SpicesAndFootWear />
      <Clothing />
      <PersonalCare />
      <Spices />
      <FootwearHeading />
      <Footwear />
    </div>
  );
};

export default HomePage;
