import React from "react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";
import pic1 from "../Components/homePageImages/pic1.PNG";
import pic2 from "../Components/homePageImages/pic2.PNG";
import pic3 from "../Components/homePageImages/pic3.PNG";

import Carousel from "react-bootstrap/Carousel";

function HomeTopSliding() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={pic1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeTopSliding;
