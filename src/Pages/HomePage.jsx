
import React from "react";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomeTopSliding from "./HomeTopSliding";



const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <HomeTopSliding /> */}
      <CasualSlippers/>
      <Footer />
    </div>
  );
};

export default HomePage;
