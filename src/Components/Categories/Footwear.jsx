import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {getDataRequest,getDataSuccess,getDataFailure} from "../../Redux/AppReducer/action"
import { useSelector,useDispatch } from "react-redux";

const Footwear = () => {
    const data = [
        {
            image:"https://www.uboric.com/wp-content/uploads/2020/12/1335958783_WP_Guardiani-e1607677359150-400x319.png",
            title:"Men's fottwear",
            path:"/product-Mensfootwear"
        }
    ];
  return (
    <div>
    <div>
      <h1
        style={{
          fontWeight: "500",
          margin: "20px",
          color: "teal",
          fontSize: "25px",
          fontFamily: "sans-serif",
        }}
      >
        Air Tight Containers
      </h1>
      <Box mb="6">
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Home
        </span>
        <ArrowRightIcon height="6px" />
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Products
        </span>
        <ArrowRightIcon height="6px" />
        <span
          height="19px"
          style={{ color: "rgb(30,86,160)", fontSize: "12px" }}
        >
          Kitchan Ware
        </span>
      </Box>
    </div>
    <div id="base">
      <div id="grid">
        {data.map((item) =>{
            return(
              <RouterLink to={item.path}>
              <div className="modulebox">
                <Image src={item.image} style={{height:"100%",margin:"auto"}} />
                <h3>{item.title}</h3>
              </div>
              </RouterLink>
            )
          })}
      </div>
      <div id="filter"></div>
    </div>
  </div>
  )
}

export default Footwear;