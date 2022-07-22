import React from "react";
import { Routes, Route } from "react-router-dom";
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BestSeller from "./BestSeller";
import Cart from "./Cart";
import HomePage from "./HomePage";
import Login from "./Login";
import SingleProduct from "./SingleProduct";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route
          path="/product-category/casual-slippers"
          element={<CasualSlippers />}
        />
        <Route
          path="/product-category/casual-sandals"
          element={<CasualSandals />}
        />
        <Route
          path="/product-category/casual-partyshoes"
          element={<CasualPartyShoes />}
        />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/casual-slippers/:id" element={<SingleProduct/>}/> */}
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
