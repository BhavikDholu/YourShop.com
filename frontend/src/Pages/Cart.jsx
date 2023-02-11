import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../Redux/Cart/cart.actions";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";

function Cart() {
  const { cartItem, totalPrice, discountPrice, totalItem } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  if (totalItem===0) {
    return (
      <Box
        fontSize="xl"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        align='center'
      >
        <Image margin='auto' src='https://surprisehours.com/assets/website/img/emptycart.png' alt='cart image' />
        Your Cart Is Empty!
      </Box>
    );
  }

  return (
    <Box mt="30px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        w={{ base: "100%", md: "90%", lg: "90%" }}
        margin="auto"
      >
        <Box p={3} w={{ lg: "100%" }}>
          {cartItem?.map((item) => (
            <Flex
              p={{ md: 3, lg: 3, base: 1 }}
              key={item._id}
              mt="10px"
              border="1px solid gray"
              borderRadius={10}
              align="center"
              justifyContent={"space-between"}
            >
              <Image
                src={item.productID.image}
                alt={item.productID.title}
                h={20}
              />
              <Flex direction="column">
                <Box
                  fontSize="xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.productID.title}
                </Box>
                <Box>
                  <Select placeholder={item.count}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Select>
                </Box>
              </Flex>
              <Box justifyContent={"center"} gap="6px" align="end">
                <Box fontSize="2xl" color={"gray.800"}>
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    ₹
                  </Box>
                  {item.productID.d_price}
                </Box>

                <Box as="span" color={"red.600"} fontSize="lg">
                  -{item.productID.discount}
                </Box>
                <Box
                  as="span"
                  color={"gray.600"}
                  fontSize="lg"
                  textDecoration={"line-through"}
                >
                  ₹{item.productID.price}
                </Box>
              </Box>
              <Button colorScheme="red">
                <DeleteIcon />
              </Button>
            </Flex>
          ))}
        </Box>
        <Flex
          h="350px"
          gap={6}
          direction="column"
          border="1px solid gray"
          w={{ base: "90%", md: "90%", lg: "70%" }}
          p={10}
          borderRadius="10px"
          mr={{ md: "0px", lg: "0px" }}
          margin={{ base: "auto" }}
          mt="10px"
        >
          <Box
            fontSize="xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            color="blue"
          >
            Order Summary
          </Box>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Total Items:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight">
              {totalItem}
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Total Price:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight">
              ₹{totalPrice}
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Total Discount Price:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight">
              ₹{discountPrice}
            </Box>
          </Flex>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="red"
            variant="solid"
            w="100%"
          >
            Checkout
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default Cart;
