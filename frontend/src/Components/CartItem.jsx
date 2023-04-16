import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateCount } from "../Redux/Cart/cart.actions";

function CartItem(props) {

    const {id,image,title,count,d_price,price,discount} = props;
    const dispatch = useDispatch();

  const handleCount = (e) => {
    let value = e.target.value
    dispatch(updateCount(id, value)).then((res) =>
    toast({
      description: res.msg,
      status: res.status,
      duration: 2000,
      position: "top-right",
      isClosable: true,
    })
  );;
  };

  const handleDelete = () => {
    dispatch(removeItem(id)).then((res) =>
    toast({
      description: res.msg,
      status: res.status,
      duration: 2000,
      position: "top-right",
      isClosable: true,
    })
  );;
  };
  return (
    <Flex
      p={{ md: 3, lg: 3, base: 1 }}
      key={id}
      mt="10px"
      border="1px solid gray"
      borderRadius={10}
      align="center"
      justifyContent={"space-between"}
    >
      <Image src={image} alt={title} h={20} />
      <Flex direction="column">
        <Box
          fontSize="xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box>
          <Select
            // placeholder={count}
            onChange={handleCount}
          >
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
          {d_price}
        </Box>

        <Box as="span" color={"red.600"} fontSize="lg">
          -{discount}
        </Box>
        <Box
          as="span"
          color={"gray.600"}
          fontSize="lg"
          textDecoration={"line-through"}
        >
          ₹{price}
        </Box>
      </Box>
      <Button colorScheme="red" onClick={handleDelete}>
        <DeleteIcon />
      </Button>
    </Flex>
  );
}

export default CartItem;
