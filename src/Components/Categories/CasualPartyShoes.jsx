import React, { useEffect, useState } from "react";
import axios from "axios";
import Contains from "./Contains";
import "./Contains.css";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CasualPartyShoes = () => {
  
    const [data, setData] = useState([]);
    const [slipon,setSlipon] = useState(false);
  
    const handleSlipon=()=>{
      const newdata=[];
      setSlipon(!slipon);
      // {
      //   data.map((item)=>{
      //     setSlipon(!slipon)
      //     if(slipon===false){
      //       if(item.slipon===true){
      //         newdata.push(item);
      //         setData(newdata);
      //       }
      //     }
      //     if(slipon === true){
      //       axios
      //         .get("http://localhost:8080/Categories")
      //         .then((r) =>{
      //             setData(r.data[0].SlipperC)
      //         })
      //         .catch((e) => console.log(e));
      //     }
      //   })
      // }
      if(slipon === false){
        data.map((item)=>{
          if(item.slipon === true){
            newdata.push(item);
            setData(newdata);
          }
        })
      }
      if(slipon === true){
        axios
          .get("http://localhost:8080/Categories")
          .then((r) =>{
              setData(r.data[0].CasualShoes)
          })
          .catch((e) => console.log(e));
      }
    }
  
    const dataaction = () => {
      axios
        .get("http://localhost:8080/Categories")
        .then((r) =>{
            setData(r.data[0].CasualShoes)
        })
        .catch((e) => console.log(e));
    };
  
    useEffect(() => {
      dataaction();
    }, []);
  
  
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
            Casual/Party Shoes
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
              Casual Chapple/Slippers
            </span>
          </Box>
        </div>
        <div id="base">
          <div id="grid">
            {data.map((item) => (
              <Contains key={item.id} data={item} />
            ))}
          </div>
          <div id="filter" style={{ textAlign: "left", padding: "15px" }}>
            <label style={{ marginTop: "15px", fontWeight: "bold" }}>
              By Clouser
            </label>
            <br />
            <input onClick={()=>handleSlipon()} type="checkbox"/> SLIP ON (16)
          </div>
        </div>
      </div>
    );
}

export default CasualPartyShoes