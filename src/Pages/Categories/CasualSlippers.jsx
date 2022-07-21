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
    <div  style={{display:"grid", gridTemplateColumns:"3fr 8fr"}}>
      <div>

      </div>
      <div id='grid'>
          {
              data.map((item)=>(
                <Contains data={item} />
              ))
          }
      </div>
    </div>
  )
}

export default CasualSlippers


{/* <Box key={item.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={item.image1} alt={} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box> */}