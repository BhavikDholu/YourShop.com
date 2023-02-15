import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
  {
    link : '/',
    title : 'Dashboard'
  },
  {
    link : '/addproduct',
    title : 'Add Product'
  },
  {
    link : '/manageproduct',
    title : 'Manage Product'
  },
  {
    link : '/manageorder',
    title : 'Manage Order'
  },
  {
    link : '/manageuser',
    title : 'Manage User'
  }
]

function AdminSidebar() {

  const activeStyle = {
    backgroundColor : "lightBlue",
    padding : "10px",
    borderRadius : "10px"
  };

  const deActiveStyle = {
    border : "1px solid black",
    borderRadius : "10px",
    padding : "10px",
  }

  return (
    <Box bg="blue.200" color='black' w='100%' h='100%' p='20px' pt='40px'>
      <SimpleGrid spacing={5}>
        {
          links.map((link)=><NavLink key={link.link} to={link.link} style={({ isActive }) =>
          isActive ? activeStyle : deActiveStyle
        }>
        {link.title}
    </NavLink>)
        }
      </SimpleGrid>
    </Box>
  )
}

export default AdminSidebar