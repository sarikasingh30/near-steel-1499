import React from "react";
import {Routes,Route} from "react-router-dom"
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from '../Components/Categories/CasualSlippers'
import ChappalSlippers from "../Components/Categories/ChappalSlippers";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import BestSeller from './BestSeller'
import HomePage from './HomePage'
import Login from "./Login"
import MyAccount from "./MyAccount";
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/bestseller" element={<BestSeller/>}/>
        <Route path="/product-category/casual-slippers" element={<CasualSlippers/>}/>
        <Route path="/product-category/casual-sandals" element={<CasualSandals/>}/>
        <Route path="/product-category/chappal-slippers" element={<ChappalSlippers/>}/>
        <Route path="/product-category/casual-partyshoes" element={<CasualPartyShoes/>}/>
        <Route path="/:path/:id" element={<SingleProduct/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  );
};

export default MainRoutes;
