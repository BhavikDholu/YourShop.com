import {
    Box,
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    AvatarBadge,
    Hide,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import React from "react";
  import logo from "../assets/YourShop.png";
  import { useNavigate } from "react-router-dom";
  
  function AdminNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const navigate = useNavigate();
  
    const navigation = (route)=>{
       navigate(route);
    }
  
    return (
      <Box bg="blue.200" p="5px" pl="20px" pr="20px">
        <Flex justifyContent={"space-between"} align="center">
          <Hide above="lg">
          <Box>
            <Button colorScheme="black" ref={btnRef} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader >Admin panel</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/")}>Dashboard</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/addproduct")}>Add Product</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageproduct")}>Manage Product</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageorder")}>Manage Order</Button>
                  <Button w="100%" mt="10px" onClick={()=>navigation("/manageuser")}>Manage User</Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          </Hide>
          <Box>
            <Image src={logo} alt="logo" w={{base:"120px",sm:"250px"}} h={{base:"25px",sm:"50px"}}/>
          </Box>
          <Box>
            <Menu>
              <MenuButton>
                <Avatar>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default AdminNavbar;