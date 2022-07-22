import React from "react";
import {
  Grid,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Footwear = () => {
  return (
    <div>
      <SimpleGrid columns={5} spacing={3} width={"97%"} margin="auto">
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/login"}>
          <Box height="20%">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-1-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-3-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box height="57vh">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-2-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
        <NavLink to={"/login"}>
          <Box>
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-5-400x601.jpg"
              alt="Dan Abramov"
              height="55vh"
              width={"98%"}
            />
          </Box>
        </NavLink>
      </SimpleGrid>
    </div>
  );
};

export default Footwear;
