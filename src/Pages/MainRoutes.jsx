import React from "react";
import { Routes, Route } from "react-router-dom";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import BestSeller from "./BestSeller";
import HomePage from "./HomePage";
import Login from "./Login";
import MyAccount from "./MyAccount";



import React from 'react'
import {Routes,Route} from "react-router-dom"
import CasualSlippers from '../Components/Categories/CasualSlippers'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import BestSeller from './BestSeller'
import HomePage from './HomePage'
import Login from "./Login"
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/bestseller" element={<BestSeller/>}/>
        <Route path="/product-category/casual-slippers" element={<CasualSlippers/>}/>
        <Route path="/casual-slippers/:id" element={<SingleProduct/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default MainRoutes;
