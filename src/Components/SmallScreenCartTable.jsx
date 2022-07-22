import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SmallScreenCartTable = ({ products }) => {
  const [itemCount, setItemCount] = useState("");

  return (
    <>
      {products?.map((item) => (
        <Box key={item.id} borderBottom="1px solid gray" mb="1rem">
          <Box textAlign="end">
            <Button
              size="xs"
              borderRadius="50%"
              bg="#e2401c"
              fontWeight={800}
              color="white"
              _hover={{ bg: "red" }}
            >
              X
            </Button>
          </Box>
          <Flex justify="center">
            <Image src={item.image} w="70px" />
          </Flex>
          <Flex justify="space-between" mb="1rem">
            <Text fontWeight={600}>Product:</Text>
            <Text>{item.name}</Text>
          </Flex>
          <Flex justify="space-between" mb="1rem">
            <Text fontWeight={600}>Price:</Text>
            <Text>₹{item.price}.00</Text>
          </Flex>
          <Flex justify="space-between" mb="1rem" align="center">
            <Text fontWeight={600}>Quantity:</Text>
            <Flex align="center">
              <Button
                bg="none"
                variant="outline"
                borderRadius={2}
                _hover={{ bg: "none" }}
              >
                -
              </Button>
              <Input
                textAlign="center"
                w="35px"
                p={0}
                defaultValue={item.quantity}
                onChange={(e) => setItemCount(e.target.value)}
              />
              <Button
                bg="none"
                variant="outline"
                borderRadius={2}
                _hover={{ bg: "none" }}
              >
                +
              </Button>
            </Flex>
          </Flex>
          <Flex justify="space-between" mb="1rem">
            <Text fontWeight={600}>Total:</Text>
            <Text>₹{+item.price * +item.quantity}.00</Text>
          </Flex>
        </Box>
      ))}
      <Box textAlign="end" p="0 1rem">
        <Button
          bg="#ffce61"
          border="1px solid"
          p="1.5rem"
          mt="0.5rem"
          borderRadius={4}
        >
          UPDATE CART
        </Button>
      </Box>
    </>
  );
};

export default SmallScreenCartTable;
