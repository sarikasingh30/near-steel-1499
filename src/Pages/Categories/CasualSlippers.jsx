import React,{useEffect, useState} from 'react';
import axios from "axios";
import Contains from './Contains';
import "./Contains.css"

const CasualSlippers = () => {
    const [data,setData]=useState([]);
    const [hover,sethover] = useState("grid")
    const dataaction=()=>{
        axios.get("http://localhost:8080/Categories")
        .then(r=>setData(r.data[0].SlipperC))
        .catch(e=>console.log(e))
    }
    useEffect(()=>{
        dataaction();
    },[])
  return (
    <div>
      <div>
            <h1 style={{fontWeight:"500",margin:"20px",color:"teal",fontSize:"25px",fontFamily:"sans-serif"}}>Casual Chapple/Slippers</h1>
            <div>
              {/* for page labeling part */}
            </div>
      </div>
    <div id='base'>      
      <div id='grid'>
          {
              data.map((item)=>(
                <Contains key={item.id} data={item} />
              ))
          }
      </div>
      <div id='filter' style={{textAlign:"left",padding:"15px"}}>
          <label style={{marginTop:"15px",fontWeight:"bold"}}>By Clouser</label><br />
          <input type="checkbox" style={{}}  />
      </div>
    </div>
    </div>
  )
}

export default CasualSlippers

