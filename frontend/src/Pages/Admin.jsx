import { Box, Flex, Show } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import ManageProduct from "./ManageProduct";
import ManageOrder from "./ManageOrder";
import ManageUser from "./ManageUser";

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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/manageproduct" element={<ManageProduct />} />
            <Route path="/manageorder" element={<ManageOrder />} />
            <Route path="manageuser" element={<ManageUser />} />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
}

export default Admin;