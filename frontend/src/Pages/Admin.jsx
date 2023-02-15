import { Box, Flex, Show } from "@chakra-ui/react";
import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";

function Admin() {
  return (
    <Box>
      <AdminNavbar />
      <Flex>
          <Show above="lg">
        <Box w='22%' h='90.5vh'>
          <AdminSidebar />
        </Box>
          </Show>
        <Box w={{base:'100%',lg:'78%'}} h='90.5vh' overflow={'scroll'}>
          hello
        </Box>
      </Flex>
    </Box>
  );
}

export default Admin;