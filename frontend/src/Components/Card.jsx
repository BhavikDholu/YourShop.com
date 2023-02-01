import React from "react";
import {
  Badge,
  Box,
  Circle,
  Flex,
  Image,
  Tooltip,
  useColorModeValue,
  Icon,
  chakra,
  Stack,
  Button,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";

// const data = {
//   isNew: true,
//   imageURL:
//     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
//   name: "Wayfarer Classic",
//   price: 4.5,
//   rating: 3.2,
//   numReviews: 34,
// };

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

function Card() {
  return (
    <Box
      // bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      align="center"
    >
      <Image
        
        src={data.image}
        alt={`Picture of ${data.title}`}
        roundedTop="lg"
      />

      <Box p="3">
        <Box
          fontSize="xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.title}
        </Box>
        <Box fontSize="md" as="span" lineHeight="tight">
          {data.description}
        </Box>
        <Flex justifyContent={"center"}  align="center">
          <Rating rating={data.rating} />
        </Flex>
        <Flex
          justifyContent={"center"}
          gap="6px"
          
          align="end"
        >
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              ₹
            </Box>
            {data.d_price}
          </Box>
          <Box
            as="span"
            color={"gray.600"}
            fontSize="lg"
            textDecoration={"line-through"}
          >
            ₹{data.price}
          </Box>
          <Box as="span" color={"gray.600"} fontSize="lg">
            ({data.discount} off)
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Card;

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
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box> */}
    </Flex>
  );
}
