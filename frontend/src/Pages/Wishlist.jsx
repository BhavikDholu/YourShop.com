import React, { useEffect } from 'react'
import {Box, Button, Image, SimpleGrid} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist } from '../Redux/Wishlist/wishlist.actions';
import { useNavigate } from 'react-router-dom';
import WishlistCard from "../Components/WishlistCard";

function Wishlist() {
  const{wishlist} = useSelector((store)=>store.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getWishlist());
  },[])

  if(wishlist.length === 0){
    return (
      <Box
        fontSize="xl"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        align="center"
      >
        <Image
          margin="auto"
          src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png"
          alt="wishlist image"
        />
        <Button onClick={()=>navigate("/")}>Back To Shoping</Button>
      </Box>
    );
  }

  return (
    <Box aign='center'>
      <SimpleGrid columns={[2, null, 3]} spacing={2} justifyContent='space-evenly'>
        {
          wishlist?.map((el)=><WishlistCard key={el._id} id={el._id} image={el.productID.image} title={el.productID.title} description={el.productID.description} rating={el.productID.rating} d_price={el.productID.d_price} price={el.productID.price} discount={el.productID.discount} offer={el.productID.offer} category={el.productID.category} type={el.productID.type}/>)
        }
      </SimpleGrid>
    </Box>
  )
}

export default Wishlist