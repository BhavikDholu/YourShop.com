import React from "react";
import Rating from "./Rating";
import { Box, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const {
    image,
    title,
    description,
    rating,
    d_price,
    price,
    discount,
    offer,
    category,
    type,
    id
  } = props;

  const navigate = useNavigate();

  const handleClick = (id)=>{
      navigate(`/men/${id}`);
  }

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      align="center"
      p={2}
      onClick={()=>handleClick(id)}
    >
      <Image src={image} alt={`Picture of ${title}`} roundedTop="lg" />

      <Box p="3">
        <Box
          fontSize="xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box fontSize="md" as="span" lineHeight="tight">
          {description}
        </Box>
        <Flex justifyContent={"center"} align="center">
          <Rating rating={rating} />
        </Flex>
        <Flex justifyContent={"center"} gap="6px" align="end">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              ₹
            </Box>
            {d_price}
          </Box>
          <Box
            as="span"
            color={"gray.600"}
            fontSize="lg"
            textDecoration={"line-through"}
          >
            ₹{price}
          </Box>
          <Box as="span" color={"gray.600"} fontSize="lg">
            ({discount} off)
          </Box>
        </Flex>
        <Box as="span" color={"gray.600"} fontSize="lg">
          {
            offer 
          }
        </Box>
      </Box>
      <Box align="center">
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
        >
          Add to Wish List
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
