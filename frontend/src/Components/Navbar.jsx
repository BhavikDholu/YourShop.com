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
  Hide
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
          <Image src={logo} h={{base:"50px",lg:'60px'}}/>
        </Box>
        <Show above='lg'>
        <Box>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.700" />}
            />
            <Input type="text" htmlSize={55} variant='filled' placeholder="Find Your Fashion" />
          </InputGroup>
        </Box>
        </Show>
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
      <Hide above='lg'>
      <Box mt='20px' pb='7px'>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.700" />}
            />
            <Input type="text" htmlSize={45} variant='filled' placeholder="Find Your Fashion" />
          </InputGroup>
        </Box>
      </Hide>
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