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
  SimpleGrid
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import {AiOutlineUser} from "react-icons/ai"

import logo from "../assets/YourShop.png";

function Navbar() {
  return (
    <Box>
    <Box bg={"blue.100"} pl='10px' pr='10px'>
      <Flex justifyContent='space-between' align='center'>
        <Box>
          <Image src={logo} h={{lg:'60px'}}/>
        </Box>
        <Box>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.700" />}
            />
            <Input type="text" htmlSize={55} variant='filled' placeholder="Find Your Fashion" />
          </InputGroup>
        </Box>
        <Box >
          <Flex gap='25px' align='center'>
            <Box>
              <BsCart3 fontSize={'30px'}/>
            </Box>
            <Box>
              <FcLike fontSize={'30px'}/>
            </Box>
            <Box>
              <AvatarGroup>
                <Avatar
                  bg="red.500"
                  icon={<AiOutlineUser fontSize="1.5rem" />}
                />
              </AvatarGroup>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
    <Box boxShadow='inner' p='2' bg='gray.900' color='white'>
        <SimpleGrid columns={4}>
            <Box>
                Men
            </Box>
            <Box>
                Women
            </Box>
            <Box>
                Kids
            </Box>
            <Box>
                Beauty
            </Box>
        </SimpleGrid>
    </Box>
    </Box>
  );
}

export default Navbar;
