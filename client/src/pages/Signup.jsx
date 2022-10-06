import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { POST_API } from "../store/authentication/auth.action";
import { SIGNUP_DATA } from "../store/signup/signup.action";

function Signup() {
    let [form,setForm] = useState()
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignup = () => {
    alert("please Enter otp")
    dispatch(SIGNUP_DATA(form))
    // dispatch(POST_API(form));
    navigate("/otp")
  };


  const handleLogin = () => {
    navigate("/login");
  };
  const handleInput = (e)=>{
   const {type,value , name} = e.target
   setForm({
    ...form,
    [name]:value
   })
  }
  
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={['80px','95px']}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      boxShadow="xl"
      mb='15px'
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={4} align={["flex-start", "center"]} w="full">
          <Heading>Signup to OpenBlog</Heading>
        </VStack>

        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input onChange={handleInput} name="email" rounded="3xl" variant="filled" type="email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input onChange={handleInput} name="password" rounded="3xl" variant="filled" type="password" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel >Name</FormLabel>
          <Input onChange={handleInput} name="name" rounded="3xl" variant="filled" type="text" />
        </FormControl>

        <Button
          onClick={handleSignup}
          bg="green.300"
          w={["full", "170px"]}
          mt="30px"
          alignSelf="center"
          borderRadius="20px"
          color="whitesmoke"
        >
          Signup
        </Button>

        <HStack fontSize={["17px", "24px"]}>
          <Text>Already have an account?</Text>

          <Text
            onClick={handleLogin}
            color="green"
            cursor="pointer"
            _hover={{
              background: "white",
              color: "red",
            }}
          >
            Login
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Signup;
