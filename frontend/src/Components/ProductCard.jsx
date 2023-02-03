import React from "react";
import { Box, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const data = {
  image: "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL320_.jpg",
  title: "Dennis Lingo",
  description: "Men's Checkered Slim Fit Cotton Casual Shirt",
  rating: "2.9",
  d_price: "649",
  price: "2,499",
  discount: "74%",
  offer: "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
  category: "shirt",
  type: "men",
};

function Rating({ rating }) {
  return (
    <Flex alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "orange" : "blue"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} color="orange"/>;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Flex>
  );
}

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
  } = props;
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      align="center"
      p={2}
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
