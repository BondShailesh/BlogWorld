import { Box, Heading } from "@chakra-ui/react";
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
      <Box mb={["34px", "50px"]}>
        <Heading fontSize={["16px", "20px", "34px"]}>Connect with me</Heading>
        <Box
          w="120%"
          m="19px"
          ml="0"
          display="flex"
          justifyContent="space-evenly"
        >
          <Box>
            <BsFacebook mr="17px" size="28px" color="rgb(9, 126, 235)" />
          </Box>
          <Box>
            {" "}
            <BsInstagram m="7px" size="28px" color="red" />
          </Box>
          <Box>
            {" "}
            <BsLinkedin color="rgb(9, 126, 235)" size="28px" />
          </Box>
          <Box>
            {" "}
            <BsTwitter color="rgb(9, 126, 235)" size="28px" />
          </Box>
        </Box>
      </Box>
      <Heading fontSize={["16px", "20px", "34px"]}>About me</Heading>
    </Box>
  );
}

export default Footer;
