import React from "react";
import Carousel from "../Components/Carousel";
import { Box, Heading } from "@chakra-ui/react";
import ProductCarousel from "../Components/ProductCarousel";


const Product = [
  {
      Title : "Men's Fashion" ,
      data : [
        {
              "image": "https://m.media-amazon.com/images/I/61KNBTw4K8S._AC_UL320_.jpg",
              "title": "Dennis Lingo",
              "description": "Men's Shirt",
              "rating": "4.1",
              "d_price": "699",
              "price": "2,499",
              "discount": "72%",
              "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/710+M61cX4L._AC_UL320_.jpg",
              "title": "Diverse",
              "description": "Men's Regular Fit Formal Shirt",
              "rating": "3.9",
              "d_price": "549",
              "price": "1,199",
              "discount": "54%",
              "offer": "",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/51yIybqYFTL._AC_UL320_.jpg",
              "title": "Dennis Lingo",
              "description": "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",
              "rating": "3.8",
              "d_price": "499",
              "price": "1,849",
              "discount": "73%",
              "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/51RFcs9-OAL._AC_UL320_.jpg",
              "title": "Diverse",
              "description": "Men Casual Shirt",
              "rating": "3.6",
              "d_price": "781",
              "price": "2,299",
              "discount": "66%",
              "offer": "",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/71pUeLO57nL._AC_UL320_.jpg",
              "title": "Amazon Brand - Symbol",
              "description": "Men Shirt",
              "rating": "4.0",
              "d_price": "519",
              "price": "1,699",
              "discount": "69%",
              "offer": "",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg",
              "title": "Dennis Lingo",
              "description": "Men's Checkered Slim fit Casual Shirt",
              "rating": "4.0",
              "d_price": "499",
              "price": "2,499",
              "discount": "80%",
              "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL320_.jpg",
              "title": "Dennis Lingo",
              "description": "Men's Checkered Slim Fit Cotton Casual Shirt",
              "rating": "3.9",
              "d_price": "649",
              "price": "2,499",
              "discount": "74%",
              "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/51T70SlCdbL._AC_UL320_.jpg",
              "title": "Allen Solly",
              "description": "Men's Slim Fit Shirt",
              "rating": "3.7",
              "d_price": "669",
              "price": "1,399",
              "discount": "52%",
              "offer": "No Cost EMI available on select cards.",
              "category" : "shirt",
              "type" : "men"
          },
          {
              "image": "https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg",
              "title": "Amazon Brand - Inkast Denim Co.",
              "description": "Men Casual Shirt",
              "rating": "4.0",
              "d_price": "629",
              "price": "2,099",
              "discount": "70%",
              "offer": "",
              "category" : "shirt",
              "type" : "men"
          }
      ]
  },
  {
    Title : "Women,s Fashion",
    data : [
      {
        "image": "https://m.media-amazon.com/images/I/61qcnAHZP3L._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Casual Shirt",
        "rating": "3.9",
        "d_price": "545",
        "price": "1,849",
        "discount": "71%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61KNBTw4K8S._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Shirt",
        "rating": "4.1",
        "d_price": "699",
        "price": "2,499",
        "discount": "72%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/710+M61cX4L._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men's Regular Fit Formal Shirt",
        "rating": "3.9",
        "d_price": "549",
        "price": "1,199",
        "discount": "54%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51yIybqYFTL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",
        "rating": "3.8",
        "d_price": "499",
        "price": "1,849",
        "discount": "73%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51RFcs9-OAL._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men Casual Shirt",
        "rating": "3.6",
        "d_price": "781",
        "price": "2,299",
        "discount": "66%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71pUeLO57nL._AC_UL320_.jpg",
        "title": "Amazon Brand - Symbol",
        "description": "Men Shirt",
        "rating": "4.0",
        "d_price": "519",
        "price": "1,699",
        "discount": "69%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim fit Casual Shirt",
        "rating": "4.0",
        "d_price": "499",
        "price": "2,499",
        "discount": "80%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim Fit Cotton Casual Shirt",
        "rating": "3.9",
        "d_price": "649",
        "price": "2,499",
        "discount": "74%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51T70SlCdbL._AC_UL320_.jpg",
        "title": "Allen Solly",
        "description": "Men's Slim Fit Shirt",
        "rating": "3.7",
        "d_price": "669",
        "price": "1,399",
        "discount": "52%",
        "offer": "No Cost EMI available on select cards.",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg",
        "title": "Amazon Brand - Inkast Denim Co.",
        "description": "Men Casual Shirt",
        "rating": "4.0",
        "d_price": "629",
        "price": "2,099",
        "discount": "70%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    }
    ]
  },
  {
    Title : "Kid's Fashion",
    data : [
      {
        "image": "https://m.media-amazon.com/images/I/61qcnAHZP3L._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Casual Shirt",
        "rating": "3.9",
        "d_price": "545",
        "price": "1,849",
        "discount": "71%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61KNBTw4K8S._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Shirt",
        "rating": "4.1",
        "d_price": "699",
        "price": "2,499",
        "discount": "72%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/710+M61cX4L._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men's Regular Fit Formal Shirt",
        "rating": "3.9",
        "d_price": "549",
        "price": "1,199",
        "discount": "54%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51yIybqYFTL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",
        "rating": "3.8",
        "d_price": "499",
        "price": "1,849",
        "discount": "73%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51RFcs9-OAL._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men Casual Shirt",
        "rating": "3.6",
        "d_price": "781",
        "price": "2,299",
        "discount": "66%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71pUeLO57nL._AC_UL320_.jpg",
        "title": "Amazon Brand - Symbol",
        "description": "Men Shirt",
        "rating": "4.0",
        "d_price": "519",
        "price": "1,699",
        "discount": "69%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim fit Casual Shirt",
        "rating": "4.0",
        "d_price": "499",
        "price": "2,499",
        "discount": "80%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim Fit Cotton Casual Shirt",
        "rating": "3.9",
        "d_price": "649",
        "price": "2,499",
        "discount": "74%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51T70SlCdbL._AC_UL320_.jpg",
        "title": "Allen Solly",
        "description": "Men's Slim Fit Shirt",
        "rating": "3.7",
        "d_price": "669",
        "price": "1,399",
        "discount": "52%",
        "offer": "No Cost EMI available on select cards.",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg",
        "title": "Amazon Brand - Inkast Denim Co.",
        "description": "Men Casual Shirt",
        "rating": "4.0",
        "d_price": "629",
        "price": "2,099",
        "discount": "70%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    }
    ]
  },
  {
    Title : "Beauty Products",
    data : [
      {
        "image": "https://m.media-amazon.com/images/I/61qcnAHZP3L._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Casual Shirt",
        "rating": "3.9",
        "d_price": "545",
        "price": "1,849",
        "discount": "71%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61KNBTw4K8S._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Shirt",
        "rating": "4.1",
        "d_price": "699",
        "price": "2,499",
        "discount": "72%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/710+M61cX4L._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men's Regular Fit Formal Shirt",
        "rating": "3.9",
        "d_price": "549",
        "price": "1,199",
        "discount": "54%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51yIybqYFTL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",
        "rating": "3.8",
        "d_price": "499",
        "price": "1,849",
        "discount": "73%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51RFcs9-OAL._AC_UL320_.jpg",
        "title": "Diverse",
        "description": "Men Casual Shirt",
        "rating": "3.6",
        "d_price": "781",
        "price": "2,299",
        "discount": "66%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71pUeLO57nL._AC_UL320_.jpg",
        "title": "Amazon Brand - Symbol",
        "description": "Men Shirt",
        "rating": "4.0",
        "d_price": "519",
        "price": "1,699",
        "discount": "69%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71Bo9OtlEtL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim fit Casual Shirt",
        "rating": "4.0",
        "d_price": "499",
        "price": "2,499",
        "discount": "80%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61DGAlvxRLL._AC_UL320_.jpg",
        "title": "Dennis Lingo",
        "description": "Men's Checkered Slim Fit Cotton Casual Shirt",
        "rating": "3.9",
        "d_price": "649",
        "price": "2,499",
        "discount": "74%",
        "offer": "Buy 3 Get 5% Off, Buy 4 Get 10% Off",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/51T70SlCdbL._AC_UL320_.jpg",
        "title": "Allen Solly",
        "description": "Men's Slim Fit Shirt",
        "rating": "3.7",
        "d_price": "669",
        "price": "1,399",
        "discount": "52%",
        "offer": "No Cost EMI available on select cards.",
        "category" : "shirt",
        "type" : "men"
    },
    {
        "image": "https://m.media-amazon.com/images/I/81EqA--jXFL._AC_UL320_.jpg",
        "title": "Amazon Brand - Inkast Denim Co.",
        "description": "Men Casual Shirt",
        "rating": "4.0",
        "d_price": "629",
        "price": "2,099",
        "discount": "70%",
        "offer": "",
        "category" : "shirt",
        "type" : "men"
    }
    ]
  }
]

function Home() {
  return (
    <Box align="center">
      <Carousel />
      {
        Product.map((ele)=><Box w="95%" m="auto" mt='20px' key={ele.Title}>
        <Heading noOfLines={1} align='left'>
        {ele.Title}
        </Heading>
        <Box border='1px solid gray' borderRadius={10} p={3}>
          <ProductCarousel data={ele.data}/>
        </Box>
        </Box>)
      }
      {/* <Box w="95%" m="auto" mt='20px'>
      <Heading noOfLines={1} align='left'>
      Men's Fashion
      </Heading>
      <Box border="2px solid black" p={3}>
        <ProductCarousel />
      </Box>
      </Box>
      <Box w="95%" m="auto" mt='20px'>
      <Heading noOfLines={1}>
      Women's Fashion
      </Heading>
      <Box border="2px solid black" p={3}>
        <ProductCarousel />
      </Box>
      </Box>
      <Box w="95%" m="auto" mt='20px'>
      <Heading noOfLines={1}>
      Kids's Fashion
      </Heading>
      <Box border="2px solid black" p={3}>
        <ProductCarousel />
      </Box>
      </Box>
      <Box w="95%" m="auto" mt='20px'>
      <Heading noOfLines={1}>
      Beauty Products...
      </Heading>
      <Box border="2px solid black" p={3}>
        <ProductCarousel />
      </Box>
      </Box> */}
    </Box>
  );
}

export default Home;
