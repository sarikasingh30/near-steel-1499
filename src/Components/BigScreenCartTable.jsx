import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const BigScreenCartTable = ({ products }) => {
  const [itemCount, setItemCount] = useState("");
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th p="2rem" fontSize="md" textTransform="capitalize">
              Product
            </Th>
            <Th fontSize="md" textTransform="capitalize">
              Price
            </Th>
            <Th fontSize="md" textTransform="capitalize">
              Quantity
            </Th>
            <Th fontSize="md" textTransform="capitalize">
              Subtotal
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((item) => (
            <Tr key={item.id}>
              <Td maxW={0.1} p={0}>
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
              </Td>
              <Td p={0}>
                <Image src={item.image} w="90px" />
              </Td>
              <Td>{item.name}</Td>
              <Td>₹{item.price}.00</Td>
              <Td>
                <Flex>
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
              </Td>
              <Td>₹{+item.price * +item.quantity}.00</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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

export default BigScreenCartTable;
