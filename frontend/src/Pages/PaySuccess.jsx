import React from "react";
import { Box, Button, Heading, Image, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PaySuccess() {
  const navigate = useNavigate();
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Box>
          <Image
            src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/media/1cbd3594bb5e8d90924a105d4aae924c.gif"
            boxSize="250px"
            objectFit="cover"
          />
        </Box>
        <Heading>Order Successfull</Heading>
        <Box>
          <Button onClick={() => navigate("/")} colorScheme='blue' variant='outline'>Back to Shopping</Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default PaySuccess;
