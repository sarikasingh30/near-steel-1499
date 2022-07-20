
import React from 'react'
import {Routes,Route} from "react-router-dom"
import BestSeller from './BestSeller'
import HomePage from './HomePage'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/bestseller" element={<BestSeller/>}/>
    </Routes>
  );
};

export default MainRoutes;
