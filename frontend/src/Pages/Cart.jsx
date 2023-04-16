import React, { useEffect } from "react";
import axios from "axios";
import { Box, Button, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItem } from "../Redux/Cart/cart.actions";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CartItem from "../Components/CartItem";
import logo from "../assets/yourshop1.png"
import { getUserDetail } from "../Redux/User/user.actions";

function Cart() {
  const { cartItem, totalPrice, discountPrice, totalItem } = useSelector(
    (store) => store.cart
  );
  const { userDetail } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleCheckout =  async() => {

    

    const { data: { key } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/payment/getkey`)
    

    const { data: { order } } = await axios.post(`${process.env.REACT_APP_BASE_URL}/payment/checkout`, {
        value:totalPrice
    })
   
    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "YourShop.com",
        description: "Apki Apni Dukaan",
        image: logo,
        order_id: order.id,
        callback_url: `${process.env.REACT_APP_BASE_URL}/payment/paymentverification/${userDetail._id}`,
        prefill: {
            name: userDetail.f_name,
            email: userDetail.email,
            contact: userDetail.mobile
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#90CDF4"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}

  useEffect(() => {
    dispatch(getCartItem());
    dispatch(getUserDetail());
  }, []);

  if (totalItem === 0) {
    return (
      <Box
        fontSize="xl"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        align="center"
      >
        <Image
          margin="auto"
          src="https://surprisehours.com/assets/website/img/emptycart.png"
          alt="cart image"
        />
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
            <CartItem
              key={item._id}
              id={item._id}
              image={item.productID.image}
              title={item.productID.title}
              count={item.count}
              d_price={item.productID.d_price}
              price={item.productID.price}
              discount={item.productID.discount}
            />
          ))}
        </Box>
        <Flex
          h="430px"
          gap={5}
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
              Subtotal:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight">
              ₹{totalPrice}
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Discount:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight">
              -₹{totalPrice-discountPrice}
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Shipping:-
            </Box>
            <Box fontSize="xl" as="span" lineHeight="tight" color={'green'}>
              FREE
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Box fontSize="xl" as="span" lineHeight="tight">
              Total:-
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
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default Cart;
