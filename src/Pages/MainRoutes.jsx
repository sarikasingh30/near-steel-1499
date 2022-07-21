import React from "react";
import { Routes, Route } from "react-router-dom";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import BestSeller from "./BestSeller";
import HomePage from "./HomePage";
import Login from "./Login";
import MyAccount from "./MyAccount";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/bestseller" element={<BestSeller />} />
      <Route
        path="/product-category/casual-slippers"
        element={<CasualSlippers />}
      />
    </Routes>
  );
};

export default MainRoutes;
