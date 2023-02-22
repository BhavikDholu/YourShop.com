import React from "react";
import {
  Box,
  Heading,
  Divider,
  FormControl,
  Select,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AdminAddProduct } from "../Redux/Admin/admin.actions";

const init = {
  image: "",
  title: "",
  description: "",
  rating: "",
  d_price: "",
  price: "",
  discount: "",
  offer: "",
  category: "",
  type: "",
  stock: "",
};

function AddProduct() {
  const [detail, setDetail] = React.useState(init);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(AdminAddProduct(detail)).then((res) =>
      toast({
        description: res.msg,
        status: res.status,
        duration: 2000,
        position: "top-right",
        isClosable: true,
      })
    );

    console.log(detail);
    // setDetail(init);
  };

  const {
    image,
    title,
    description,
    rating,
    d_price,
    price,
    discount,
    offer,
    category,
    type,
    stock,
  } = detail;

  return (
    <Box mt={5}>
      <Heading>Add Product</Heading>
      <Divider />
      <Box
        w="80%"
        margin="auto"
        border="1px solid gray"
        borderRadius={10}
        p={5}
        mt={5}
      >
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            placeholder="Product name"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <FormLabel>Product Type</FormLabel>
          <Select
            placeholder="Select type"
            name="type"
            value={type}
            onChange={handleChange}
          >
            <option value={"men"}>Men</option>
            <option value={"women"}>Women</option>
            <option value={"kids"}>Kids</option>
            <option value={"beauty"}>Beauty</option>
          </Select>
          <FormLabel>Rating</FormLabel>
          <Input
            placeholder="Rating"
            name="rating"
            value={rating}
            onChange={handleChange}
          />
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="Product Price"
            name="price"
            value={price}
            onChange={handleChange}
          />
          <FormLabel>Discount Price</FormLabel>
          <Input
            placeholder="Product Discount Price"
            name="d_price"
            value={d_price}
            onChange={handleChange}
          />
          <FormLabel>Discount</FormLabel>
          <Input
            placeholder="Discount in %"
            name="discount"
            value={discount}
            onChange={handleChange}
          />
          <FormLabel>Offer</FormLabel>
          <Input
            placeholder="offer on product"
            name="offer"
            value={offer}
            onChange={handleChange}
          />
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select category"
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value={"shirt"}>shirt</option>
            <option value={"trousers"}>trousers</option>
            <option value={"dresh"}>dresh</option>
            <option value={"jacket"}>jacket</option>
          </Select>
          <FormLabel>Image</FormLabel>
          <Input
            placeholder="Product Image url"
            name="image"
            value={image}
            onChange={handleChange}
          />
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Product Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <FormLabel>Stock</FormLabel>
          <Input
            placeholder="number of items"
            name="stock"
            value={stock}
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleAdd}>
          Add Product
        </Button>
      </Box>
    </Box>
  );
}

export default AddProduct;
