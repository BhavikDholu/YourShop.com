import { Image, SimpleGrid, Stack, Box,Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/YourShop.png";
import delivery from "../assets/delivery.png"

function Footer() {
    const navigate = useNavigate()
  return (
    <Box bg={"blue.100"} p={10}>
      <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={{base:10,md:10}}>
        <Stack align={"flex-start"}>
          <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            Online Shoping
          </Text>
          <Link to='/men'>Men</Link>
          <Link to='/women'>Women</Link>
          <Link to='/kids'>Kids</Link>
          <Link to='/beauty'>Beauty</Link>
        </Stack>
        <Stack align={"flex-start"}>
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Company
          </Text>
          <Link to='/'>About us</Link>
          <Link to='/'>Contact us</Link>
          <Link to='/'>Help Center</Link>
          <Link to='/'>Career</Link>
        </Stack>
        <Stack align={"flex-start"}>
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Customer Services
          </Text>
          <Link to='/'>My Account</Link>
          <Link to='/'>My Order</Link>
          <Link to='/wishlist'>My Wishlist</Link>
          <Link to='/cart'>Cart</Link>
        </Stack>
        <Stack>
          <Box onClick={()=>navigate("/")}>
            <Image src={logo} h={{ base: "50px", lg: "60px" }} alt='logo' />
          </Box>
          <Box>
            <Image src={delivery} alt='delivery'/>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
