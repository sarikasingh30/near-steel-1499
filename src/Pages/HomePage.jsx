
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "./HomeTopSliding";
import CasualSlippers from './Categories/CasualSlippers'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeTopSliding />
      <CasualSlippers/>
      <Footer />
    </div>
  );
};

export default HomePage;
