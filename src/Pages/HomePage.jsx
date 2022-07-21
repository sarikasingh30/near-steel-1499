
import React from "react";
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "./HomeTopSliding";



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeTopSliding />
      <CasualSlippers/>
      <CasualSandals/>
      <CasualPartyShoes/>
      <Footer />
    </div>
  );
};

export default HomePage;
