
import React from "react";
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import ChappalSlippers from "../Components/Categories/ChappalSlippers";
import FlipFlop from "../Components/Categories/FlipFlop";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "./HomeTopSliding";



const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <HomeTopSliding /> */}
      <CasualSlippers/>
      <CasualSandals/>
      <CasualPartyShoes/>
      <ChappalSlippers/>
      <FlipFlop/>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
