import React, {useState} from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import "./Contains.css";


const Contains = ({data}) => {
    const [display,setDisplay] = useState("none");
    const [imgpref,setImgpref] = useState(data.image1);
  return (
    <Box key={data.id} className="modulebox" maxW='sm' h="300px" borderWidth='1px' borderRadius='lg' overflow='hidden' onMouseEnter={()=>setDisplay("grid")} onMouseLeave={()=>setDisplay("none")}>
        <Image src={imgpref} style={{height:"50%",margin:"auto"}} />
        <div style={{height:"20%",marginTop:"-10%",width:"90%",margin:"auto"}}>
            <div style={{display:`${display}`,gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                <Box onClick={()=>setImgpref(data.image1)} minH="50px" style={{overflow:"hidden"}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'><Image style={{width:"90%",margin:"auto"}} src={data.image1}/></Box>
                <Box onClick={()=>setImgpref(data.image2)} minH="50px" style={{overflow:"hidden"}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'><Image style={{width:"90%",margin:"auto"}} src={data.image2}/></Box>
                <Box onClick={()=>setImgpref(data.image3)} minH="50px" style={{overflow:"hidden"}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'><Image style={{width:"90%",margin:"auto"}} src={data.image3}/></Box>
                <Box onClick={()=>setImgpref(data.image4)} minH="50px" style={{overflow:"hidden"}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'><Image style={{width:"90%",margin:"auto"}} src={data.image4}/></Box>
            </div>
        </div>
        <h4 style={{padding:"0px 15px"}}>{data.name1}</h4>
    </Box>
  )
}

export default Contains