import { Box, Flex, Image, SimpleGrid, useColorModeValue, Button, Divider, useToast } from '@chakra-ui/react'
import React from 'react'
import Rating from '../Components/Rating';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../Redux/Product/product.actions';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { BsCart3 } from 'react-icons/bs';
import { addToCart } from '../Redux/Cart/cart.actions';
import { addToWishlist } from '../Redux/Wishlist/wishlist.actions';



function SingleProduct() {
  const {id} = useParams();
  const {singleProduct} = useSelector((store)=>store.product);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAdd = (id) =>{
    dispatch(addToCart(id)).then((res) =>
    toast({
      description: res.msg,
      status: res.status,
      duration: 2000,
      position: "top-right",
      isClosable: true,
    })
  );
  }

  const handleAddToWishlist = (id) =>{
    dispatch(addToWishlist(id)).then((res) =>
    toast({
      description: res.msg,
      status: res.status,
      duration: 2000,
      position: "top-right",
      isClosable: true,
    })
  );
  }

  useEffect(()=>{
    dispatch(getSingleProduct(id));
  },[])

  return (
    <Box  w='90%' align='center' m='auto' mt='20px'>
      <SimpleGrid columns={[1,1,2]} h='100%' >
        <Box >
          <Image src={singleProduct.image} w='240px' alt={`Picture of ${singleProduct.title}`} roundedTop="lg"/>
        </Box>
        <Box p="4">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          mt='10px'
        >
          {singleProduct.title}
        </Box>
        <Box fontSize="lg" as="span" lineHeight="tight">
          {singleProduct.description}
        </Box>
        <Divider orientation='horizontal' mt='10px' mb='10px'/>
        <Flex justifyContent={"center"} gap="6px" align="end" >
          <Box as="span" color={"red.600"} fontSize="lg">
            -{singleProduct.discount}
          </Box>
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              ₹
            </Box>
            {singleProduct.d_price}
          </Box>
        </Flex>
        <Box
            as="span"
            color={"gray.600"}
            fontSize="lg"
            textDecoration={"line-through"}
          >
            MRP: ₹{singleProduct.price}
          </Box>
        <Flex justifyContent={"center"} align="center">
          <Rating rating={singleProduct.rating} />
        </Flex>
        <Divider orientation='horizontal' mt='10px' mb='10px'/>
        <Box as="span" color={"gray.600"} fontSize="lg">
          {
            singleProduct.offer 
          }
        </Box>
        <Flex justifyContent={'center'} mt={10} mb={5} gap={5}>
        <Box align="center">
        <Button
          rightIcon={<BsCart3 />}
          colorScheme="blue"
          variant="solid"
          onClick={()=>handleAdd(singleProduct._id)}
        >
          Add to Cart
        </Button>
      </Box>
      <Box align="center">
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="red"
          variant="solid"
          onClick={()=>handleAdd(singleProduct._id)}
        >
          Buy Now
        </Button>
      </Box>
        </Flex>
        <Box align="center">
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={()=>handleAddToWishlist(singleProduct._id)}
        >
          Add to Wish List
        </Button>
      </Box>
      </Box>
      </SimpleGrid>
    </Box>
  )
}

export default SingleProduct