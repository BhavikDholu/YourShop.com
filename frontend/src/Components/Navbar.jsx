import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  SimpleGrid,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

import logo from "../assets/YourShop.png";

function Navbar() {
  const nevigate = useNavigate();
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Box>
      <Box bg={"blue.100"} pl="10px" pr="10px">
        <Flex justifyContent="space-between" align="center">
          <Box onClick={() => nevigate("/")}>
            <Image src={logo} h={{ base: "50px", lg: "60px" }} />
          </Box>
          <Show above="lg">
            <Box>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.700" />}
                />
                <Input
                  type="text"
                  htmlSize={55}
                  variant="filled"
                  placeholder="Find Your Fashion"
                />
              </InputGroup>
            </Box>
          </Show>
          <Box>
            <Flex gap="25px" align="center">
              <Box onClick={() => nevigate("/cart")}>
                <BsCart3 fontSize={"30px"} />
              </Box>
              <Box onClick={() => nevigate("/wishlist")}>
                <AiOutlineHeart fontSize={"30px"} />
              </Box>
              <Box>
                <Menu>
                  <MenuButton>
                    <AvatarGroup>
                      <Avatar
                        bg="red.500"
                        icon={<AiOutlineUser fontSize="1.5rem" />}
                      />
                    </AvatarGroup>
                  </MenuButton>
                  <MenuList zIndex={10}>
                    <MenuItem as='a' href='/login'>Login</MenuItem>
                    <MenuItem as='a' href='/signup'>Sign Up</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Hide above="lg">
          <Box mt="20px" pb="7px">
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.700" />}
              />
              <Input
                type="text"
                htmlSize={45}
                variant="filled"
                placeholder="Find Your Fashion"
              />
            </InputGroup>
          </Box>
        </Hide>
      </Box>
      <Box boxShadow="inner" p="2" bg="gray.900" color="white">
        <SimpleGrid columns={4}>
          <Box>
            <NavLink
              to="/men"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Men
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to="/women"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Women
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to="/kids"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Kids
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to="/beauty"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Beauty
            </NavLink>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Navbar;
