import { Box, Button } from '@chakra-ui/react';
import React from 'react'

function PageButton({totalPages,handlePage,page}) {

   const ButtonComp = ()=>{
    let arr = [];
    for(let i=1;i<=totalPages;i++){
        arr.push(i);
    }
    return arr.map((num)=><Button key={num} onClick={()=>handlePage(num)} bg={page===num?'blue.300':'gray.200'}>{num}</Button>);
   }
  return (
    <Box>
        {
            <ButtonComp />
        }
    </Box>
  )
}

export default PageButton