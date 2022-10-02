import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { POST_API } from "../store/authentication/auth.action";

function OTPValidator() {
  const [otp, setOtp] = useState("");
  const signupdatails = useSelector((state) => state.signup);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleOtpInput = (e) => {
    setOtp(e.target.value);
  };
  const handleOtp = async() => {
  await dispatch(POST_API({ ...signupdatails.state, otp: otp }))
  const tokenVerify =await JSON.parse(localStorage.getItem("token"));
  if(tokenVerify){   
    return navigate("/create")
  }else{
    alert("Invalid otp")
  }
  };
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt="20px"
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
      boxShadow="xl"
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={4} align={["flex-start", "center"]} w="full">
          <Heading>Signup to OpenBlog</Heading>
        </VStack>

        <FormControl isRequired>
          <FormLabel>Enter Otp</FormLabel>
          <Input
            onChange={handleOtpInput}
            rounded="2xl"
            variant="filled"
            type="text"
          />
        </FormControl>

        <Button
          onClick={handleOtp}
          bg="green.300"
          w={["full", "170px"]}
          mt="30px"
          alignSelf="center"
          borderRadius="20px"
          color="whitesmoke"
        >
          Verify
        </Button>
      </VStack>
    </Box>
  );
}

export default OTPValidator;
