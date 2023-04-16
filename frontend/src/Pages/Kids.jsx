
import { Box, SimpleGrid } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getProduct } from '../Redux/Product/product.actions';
import ProductCard from "../Components/ProductCard";
import PageButton from '../Components/PageButton';

function Kids() {
  const {productData,totalPages} = useSelector((store)=>store.product);
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);

  const handlePage = (val)=>{
    setPage(val);
  }
  
  useEffect(()=>{
    dispatch(getProduct({page,limit:9,type:"kids"}));
  },[page]);

  return (
    <Box aign='center'>
      <SimpleGrid columns={[1, 2, 3]} spacing={2} justifyContent='space-evenly'>
        {
          productData?.map((el)=><ProductCard key={el._id} id={el._id} image={el.image} title={el.title} description={el.description} rating={el.rating} d_price={el.d_price} price={el.price} discount={el.discount} offer={el.offer} category={el.category} type={el.type}/>)
        }
      </SimpleGrid>
      <Box m='20px'>
        <PageButton totalPages={totalPages} handlePage={handlePage} page={page}/>
      </Box>
    </Box>
  )
}

export default Kids
