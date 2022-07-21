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

const Kitchen = () => {
  return (
    <>
      <Grid templateColumns="repeat(1, 1fr)" margin={"40px 0"}>
        <HStack spacing="55px" justifyContent={"center"}>
          <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" />
          <Heading color={"#1e516c"} fontWeight={"400"}>
            KITCHEN WARE
          </Heading>
          <Box>
            <Image src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/kitchen-ware-heading-2-e1608267087979-pkx8tuzlfhai1ztcx1owc3kh6ggu4y22dyfsgaynio.png" />
          </Box>
        </HStack>
      </Grid>
      <div>
        <SimpleGrid columns={3} spacing={3} width={"97%"} margin="auto">
          {/* for now i am giveing route to login just to check update here as per the need:- */}
          <NavLink to={"/login"}>
            <Box height="57vh">
              <Image
                className={styles.kitchenPop}
                src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools-1000x784.jpg"
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
                src="https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers-1000x784.jpg"
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
                src="https://www.uboric.com/wp-content/uploads/2020/12/Gas-Lighter-1024x1024.jpg"
                alt="Dan Abramov"
                height="55vh"
                width={"98%"}
              />
            </Box>
          </NavLink>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Kitchen;
