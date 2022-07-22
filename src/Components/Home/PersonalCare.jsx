import React from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import styles from "./style.module.css";

const PersonalCare = () => {
  return (
    <div>
      <SimpleGrid columns={5} spacing={3} width={"97%"} margin="auto">
        {/* for now i am giveing route to login just to check update here as per the need:- */}
        <NavLink to={"/login"}>
          <Box height="20%">
            <Image
              className={styles.kitchenPop}
              src="https://www.uboric.com/wp-content/uploads/2020/12/Socks-400x601.jpg"
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
              src="https://www.uboric.com/wp-content/uploads/2020/12/Personal-Care-400x601.jpg"
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
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-3-400x601.jpg"
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
              src="https://www.uboric.com/wp-content/uploads/2020/12/Grocery-400x601.jpg"
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
              src="https://www.uboric.com/wp-content/uploads/2020/12/Health-Care-400x601.jpg"
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

export default PersonalCare;
