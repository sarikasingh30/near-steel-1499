import { Box,Flex,Heading} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Box>
      <Box
        height="155px"
        borderTop="2px solid rgb(30,81,108)"
        borderBottom="2px solid rgb(30,81,108)"
      ><Flex direction="column">
        <Box mt="10">
        <Heading
          style={{
            fontSize: "26px",
            lineHeight: "28px",
            fontWeight: "700",
            letterSpacing: "3px",
            color: "rgb(30,86,160)",
          }}
        >
          Title
        </Heading>
        </Box>
        <Box mb="6">
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
          >
            Home
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
          >
            Products
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
          >
            Casual Chapple/Slippers
          </span>
          <ArrowRightIcon height="6px" />
          <span
            height="19px"
            style={{ color: "rgb(30,86,160)", fontSize: "16px" }}
          >
            Title
          </span>
        </Box>
        </Flex>
      </Box>
      <Flex direction="row" mt="10">
        <Box width="45%" border="1px solid black" height="30vh">

        </Box>
        <Box width="55%" border="1px solid black" height="30vh">

        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
