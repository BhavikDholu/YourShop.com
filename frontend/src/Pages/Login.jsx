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
    useToast
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link, useNavigate} from "react-router-dom";
  
  const init = {
    email : "",
    password : ""
  }
  
  const Login = ()=> {
    const [showPassword, setShowPassword] = useState(false);
    const [detail,setDetail] = useState(init);
    const toast = useToast();
    const navigate = useNavigate()

    const handleChange = (e) =>{
      const {name,value} = e.target;
      setDetail({...detail,[name]:value})
    }
  
    const handleLogin = async(e) =>{
      e.preventDefault();

      try {
        let res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/login`,{
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(detail)
      });
      let data = await res.json();
      
      toast({
        description: data.msg,
        status: data.status,
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
      if(data.status=='success'){
        localStorage.setItem("token",JSON.stringify(data.token));
        navigate("/");
      }
      } catch (error) {
        console.log(error);
      }

    }

    const {email,password} = detail

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign In
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder='Enter your registered email' name='email' value={email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder='Enter password' name='password' value={password} onChange={handleChange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleLogin}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign In
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  New user? <Link color={'blue.400'} to='/signup'>Sign Up</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

  export default Login;