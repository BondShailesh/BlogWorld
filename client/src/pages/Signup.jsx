import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP_DATA } from "../store/signup/signup.action";
import LoginButton from "../components/LoginButton";
import {gapi} from "gapi-script"
const clientId = "731828041746-6uf7heq6sh6lihj170l8bv2c9kot81r0.apps.googleusercontent.com"

function Signup() {
  let [form, setForm] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const positions = ["top"];

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope :""
      })
    }
    gapi.load('client:auth2',start);
  })


  const handleSignup = () => {
    toast({
      title: "Otp send.",
      description: "Kidly check your email.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: positions,
    });
    dispatch(SIGNUP_DATA(form));
    navigate("/otp");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleInput = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
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
      mb={["55px", "15px"]}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={4} align={["flex-start", "center"]} w="full">
          <Heading>Signup to OpenBlog</Heading>
        </VStack>
        <LoginButton/>
        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            onChange={handleInput}
            name="email"
            rounded="3xl"
            variant="filled"
            type="email"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <Input
            onChange={handleInput}
            name="password"
            rounded="3xl"
            variant="filled"
            type="password"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={handleInput}
            name="name"
            rounded="3xl"
            variant="filled"
            type="text"
          />
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
