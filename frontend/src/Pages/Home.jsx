import React from "react";
import Carousel from "../Components/Carousel";
import { Box, Flex, GridItem, Heading, Image,Text,Grid } from "@chakra-ui/react";
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
    Title : "Women's Fashion",
    data : [
      {
        "image": "https://m.media-amazon.com/images/I/711gj5wsy7L._AC_UL320_.jpg",
        "title": "VASABA",
        "rating": "3.9",
        "d_price": "545",
        "price": "1,849",
        "discount": "71%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/719zWxFSu9L._AC_UL320_.jpg",
        "title": "YouBella",
        "rating": "4.1",
        "d_price": "699",
        "price": "2,499",
        "discount": "72%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/A1BKLLxTAUL._AC_UL320_.jpg",
        "title": "ICW",
        "rating": "3.9",
        "d_price": "380",
        "price": "1,199",
        "discount": "54%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71sm8MRnZ2L._AC_UL320_.jpg",
        "title": "Wedani",
        "rating": "3.8",
        "d_price": "499",
        "price": "1,849",
        "discount": "73%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/71K408BAgfS._AC_UL320_.jpg",
        "title": "Lavie",
        "rating": "3.6",
        "d_price": "781",
        "price": "2,299",
        "discount": "66%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/711ym+72EBL._AC_UL320_.jpg",
        "title": "ZAVERI PEARLS",
        "rating": "4.0",
        "d_price": "519",
        "price": "1,699",
        "discount": "69%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/81U0K4PmWqL._AC_UL320_.jpg",
        "title": "Salwar Suit Set",
        "rating": "4.0",
        "d_price": "499",
        "price": "2,499",
        "discount": "80%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61M45eURF2L._AC_UL320_.jpg",
        "title": "ASIAN",
        "rating": "3.9",
        "d_price": "649",
        "price": "2,499",
        "discount": "74%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/81Z8uVXKTcL._AC_UL320_.jpg",
        "title": "Jockey",
        "rating": "3.7",
        "d_price": "669",
        "price": "1,399",
        "discount": "52%"
    },
    {
        "image": "https://m.media-amazon.com/images/I/61I6N9tMd2S._AC_UL320_.jpg",
        "title": "ELEGANTE",
        "rating": "4.0",
        "d_price": "629",
        "price": "2,099",
        "discount": "70%",
    }
    ]
  },
  {
    Title : "Kid's Fashion",
    data : [
        {
            "image": "https://m.media-amazon.com/images/I/81Vfx1homrL._AC_UL320_.jpg",
            "title": "JBN Creation",
            "rating": "3.9",
            "d_price": "545",
            "price": "1,849",
            "discount": "71%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/81OIDieRpQL._AC_UL320_.jpg",
            "title": "CuB McPAWS be curious",
            "rating": "4",
            "d_price": "699",
            "price": "2,499",
            "discount": "72%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/71PN7SbSUXL._AC_UL320_.jpg",
            "title": "White Button",
            "rating": "3.9",
            "d_price": "380",
            "price": "1,199",
            "discount": "54%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/51gGLTzgOCS._AC_UL320_.jpg",
            "title": "Hopscotch",
            "rating": "3.8",
            "d_price": "499",
            "price": "1,849",
            "discount": "73%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/4108+SL1iwL._AC_UL320_.jpg",
            "title": "VIKITA",
            "rating": "3.6",
            "d_price": "781",
            "price": "2,299",
            "discount": "66%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/41nnU5bxv9L._AC_UL320_.jpg",
            "title": "VIKITA",
            "rating": "4.0",
            "d_price": "519",
            "price": "1,699",
            "discount": "69%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/41g8-SehaaL._AC_UL320_.jpg",
            "title": "GORLYA",
            "rating": "4.0",
            "d_price": "499",
            "price": "2,499",
            "discount": "80%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/61I5WDPSgzL._AC_UL320_.jpg",
            "title": "White Button",
            "rating": "3.9",
            "d_price": "649",
            "price": "2,499",
            "discount": "74%"
        },
        {
            "image": "https://m.media-amazon.com/images/I/414zyfe14uL._AC_UL320_.jpg",
            "title": "Generic",
            "rating": "3.7",
            "d_price": "669",
            "price": "1,399",
            "discount": "52%"
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
        <Heading noOfLines={1} align='left' as='em'>
        {ele.Title}
        </Heading>
        <Box borderRadius={10} p={3}>
          <ProductCarousel data={ele.data}/>
        </Box>
        </Box>)
      }
      <Box mt="40px" w='95%' bg='blue.50' borderRadius={10} p={5}>
        <Grid gridTemplateColumns={{base:"1fr",lg:'2fr 1fr'}} gap={4}>
            <GridItem>
                <Image src="https://dbaasltd.co.in/img/ecommerce.gif" alt="image"/>
            </GridItem>
            <GridItem align='center'>
                <Flex direction={'column'} gap={5} mt={{lg:'20px',md:"20px"}}>
                    <Flex borderRadius={"20px"} align='center'>
                    <Image w={"80px"} src="https://cdn-icons-png.flaticon.com/512/7245/7245083.png" alt="free shipping"/>
                    <Text as='em' fontSize={{base:'2xl',md:'3xl',lg:'3xl'}}>Free Shipping</Text>
                    </Flex>
                    <Flex borderRadius={"20px"} align='center'>
                    <Image w={"80px"}rounded={'full'} src="https://media2.giphy.com/media/gHPOb1fEVWu5GHL2tk/giphy.gif" alt="payment"/>
                    <Text as='em' fontSize={{base:'2xl',md:'3xl',lg:'3xl'}}>100% Secure Payment</Text>
                    </Flex>
                    <Flex borderRadius={"20px"} align='center'>
                    <Image w={"80px"} src="https://cdn-icons-png.flaticon.com/512/670/670910.png" alt="return"/>
                    <Text as='em' fontSize={{base:'2xl',md:'3xl',lg:'3xl'}}>Easy Return</Text>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
