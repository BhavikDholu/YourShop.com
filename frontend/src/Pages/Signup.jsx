import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate,Link } from "react-router-dom";
import { userSignup } from "../Redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";

const init = {
  f_name: "",
  l_name: "",
  email: "",
  password: "",
  mobile: "",
};

const Signup = () => {
  const { isLogin } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [detail, setDetail] = useState(init);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(userSignup(detail)).then((res) =>
      toast({
        description: res.msg,
        status: res.status,
        duration: 2000,
        position: "top-right",
        isClosable: true,
      })
    );
  };

  useEffect(()=>{
    if(isLogin){
      navigate("/login");
    }
  },[])

  const { f_name, l_name, email, password, mobile } = detail;
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    name="f_name"
                    value={f_name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    name="l_name"
                    value={l_name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile number</FormLabel>
              <Input
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={mobile}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleRegister}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign Up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
