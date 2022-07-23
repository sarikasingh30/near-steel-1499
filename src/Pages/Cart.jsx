import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import React, { useEffect } from "react";

import { RiArrowDropRightLine } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import BigScreenCartTable from "../Components/BigScreenCartTable";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SmallScreenCartTable from "../Components/SmallScreenCartTable";
import styles from "./Cart.module.css";

import { getCartData } from "../Redux/AppReducer/action";
import { useSelector,useDispatch } from "react-redux";

const Cart = () => {
  const cart=useSelector(store=>store.AppReducer.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(getCartData())
  },[])
  // console.log(cart)
  // const products = [
  //   {
  //     name: "ADDA MEN'S CHAPPLE / SLIPPERS IN COLOUR BLACK - 7",
  //     id: 1,
  //     price: 670,
  //     quantity: 1,
  //     image:
  //       "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result-400x265.jpg",
  //   },
  //   {
  //     name: "ADDA MEN'S CHAPPLE / SLIPPERS IN COLOUR BLACK - 7",
  //     id: 2,
  //     price: 570,
  //     quantity: 1,
  //     image:
  //       "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result-400x265.jpg",
  //   },
  //   {
  //     name: "ADDA MEN'S CHAPPLE / SLIPPERS IN COLOUR BLACK - 7",
  //     id: 3,
  //     price: 770,
  //     quantity: 1,
  //     image:
  //       "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result-400x265.jpg",
  //   },
  //   {
  //     name: "ADDA MEN'S CHAPPLE / SLIPPERS IN COLOUR BLACK - 7",
  //     id: 4,
  //     price: 680,
  //     quantity: 1,
  //     image:
  //       "https://www.uboric.com/wp-content/uploads/2021/01/DSC_0572_result-400x265.jpg",
  //   },
  // ];

  const totlaPrice = cart
    ?.map((item) => item.cost * item.count)

    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Box p="1rem 0 0 0">
      <Container p="0.5rem" color="#1e516c">
        <Heading
          fontSize="2xl"
          mb="0.4rem"
          letterSpacing="2px"
          fontWeight={500}

          textAlign="center"

        >
          Cart
        </Heading>
        <Flex justify="center" align="end" fontSize="sm" gap={1}>
          <RouterLink to="/">
            <Text _hover={{ textDecoration: "underline" }}>Home</Text>
          </RouterLink>
          <RiArrowDropRightLine />
          <Text>Cart</Text>
        </Flex>
      </Container>

      <Container
        className={styles.amazingOffers}
        maxW={{ base: "90%", sm: "75%", md: "lg", lg: "xl", xl: "2xl" }}
        p="0.5rem"
        fontWeight={600}
        fontSize="large"
        mt="2rem"
      >
        Amazing Offers on Checkout
      </Container>

      {/* products  */}

      {/* for big screens  */}
      <Flex
        direction={{ md: "column", lg: "row", xl: "row" }}
        justify="center"
        p={{ md: "2rem 3rem", lg: "2rem", xl: "2rem 8rem" }}
      >
        {/* table box */}
        <Box
          // w="60%"
          p="0 1rem"
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
          }}
        >

          <BigScreenCartTable products={cart} />

        </Box>

        {/* cart box */}
        <Box
          bg="#fafafa"
          w={{ md: "100%", lg: "30%", xl: "30%" }}
          mt={{ md: "4rem", lg: 0, xl: 0 }}
          textAlign="start"
          p="1.5rem"
          display={{
            base: "none",
            sm: "none",
            md: "inline-block",
            lg: "inline-block",
            xl: "inline-block",
          }}
        >
          <Heading fontSize="3xl" fontWeight={600} p="2rem 0">
            Cart totals
          </Heading>
          <Flex gap={20} mb="2rem">
            <Text fontWeight={600}>Subtotal</Text>
            <Text>₹{totlaPrice}.00</Text>
          </Flex>
          <Button
            w="100%"
            bg="#ffce61"
            border="1px solid"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
          >
            Proceed to Checkout <MdOutlineArrowRightAlt />
          </Button>
        </Box>
      </Flex>

      {/* for small screen  */}
      <Flex
        direction="column"
        m={{ base: "2rem 5%", sm: "2rem 12%" }}
        display={{
          base: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >

        <SmallScreenCartTable products={cart} />

        <Box
          bg="#fafafa"
          w={{ md: "100%", lg: "30%", xl: "30%" }}
          mt={{ md: "4rem", lg: 0, xl: 0 }}
          textAlign="start"
          p="1.5rem"
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
          <Heading fontSize="3xl" fontWeight={600} p="2rem 0">
            Cart totals
          </Heading>
          <Flex justify="space-between" mb="2rem">
            <Text fontWeight={600}>Subtotal</Text>
            <Text>₹{totlaPrice}.00</Text>
          </Flex>
          <Button
            w="100%"
            bg="#ffce61"
            border="1px solid"
            p="1.5rem"
            mt="0.5rem"
            borderRadius={4}
          >
            Proceed to Checkout <MdOutlineArrowRightAlt />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
