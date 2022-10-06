import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <Box
      boxShadow="2xl"
      width="100%"
      pt="30px"
      display="flex"
      justifyContent="space-around"
      bg="blue.300"
      color="white"
    >
      <Box mb={["34px",'50px']}>
      <Heading>Connect with me</Heading>
      <Box m="19px" display='flex' justifyContent='space-evenly'>       
                 <BsFacebook mr='17px' size="28px" color="rgb(9, 126, 235)" />
                <BsInstagram m='7px' size="28px" color='red'/>
                <BsLinkedin color="rgb(9, 126, 235)" size="28px" />
                <BsTwitter color="rgb(9, 126, 235)" size="28px" />
              </Box>
      </Box>
      <Heading>About me</Heading>
    </Box>
  );
}

export default Footer;
