import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { POST_LOGIN_API } from "../store/authentication/auth.action";

function Login() {
  const [form,setForm] = useState()
  const navigate = useNavigate();
  const toast = useToast();
  const positions = ["top"];
 const dispatch = useDispatch()

  const handleChange = (e)=>{
    let {name,value} = e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleLogin = async()=>{
    dispatch(POST_LOGIN_API(form))
    const tokenVerify = await JSON.parse(localStorage.getItem("token"));
    if (tokenVerify) {
      toast({
        title: "Login Success.",
        description: "Success.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: positions,
      });
      return navigate("/create");
    } else {
      toast({
        title: "Email or password does not match.",
        description: "Please correct your credential.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: positions,
      });
    }
  }
  
  const handleSighup = () => {
    navigate("/signup");
  };

  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={["80px", "95px"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      boxShadow="xl"
      mb={['55px',"15px"]}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={4} align={["flex-start", "center"]} w="full">
          <Heading>Login to OpenBlog</Heading>
        </VStack>

        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input onChange={(e)=>handleChange(e)} rounded="3xl" variant="filled" type="email" name="email"/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input onChange={(e)=>handleChange(e)} rounded="3xl" variant="filled" type="password" name='password'/>
        </FormControl>

        <HStack w="full" justify="space-between">
          <Checkbox>Remember me</Checkbox>
          <Button variant="link" colorScheme="red">
            Forgot password
          </Button>
        </HStack>
        <Button
          bg="green.300"
          w={["full", "170px"]}
          mt="30px"
          alignSelf="center"
          borderRadius="20px"
          color="whitesmoke"
          onClick={handleLogin}
        >
          Login
        </Button>

        <HStack fontSize={["17px", "24px"]}>
          <Text>Don't have account?</Text>
          <Text
            onClick={handleSighup}
            color="green"
            cursor="pointer"
            _hover={{
              background: "white",
              color: "red",
            }}
          >
            Signup
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Login;
