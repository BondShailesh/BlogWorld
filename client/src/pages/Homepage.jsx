import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import home6 from "../assets/home6.jpg";
import Blogs from "./Blogs";

function Homepage() {
  const navigate = useNavigate();
  const handleWrite = () => {
    return navigate("/create");
  };

  return (
    <Box mt={["60px", "60px"]}>
      <Box>
        <Img
          w="100%"
          h={["220px", "250px", "300px", "90vh"]}
          src={home6}
          alt="4sdgad"
        />
        <Box
          color="white"
          position="absolute"
          left={["0%", "0%", "0%"]}
          right={["0%", "0%", "0%"]}
          top={["10%", "5%"]}
        >
          <Heading fontSize={["16px", "20px", "34px"]}>
            Publish your passions, your way
          </Heading>
          <Text mt={["5px", "20px"]}>
            Create a unique and beautiful blog easily.
          </Text>
          <Button
            onClick={handleWrite}
            width={["l", "l", "l"]}
            mt={["5px", "20px"]}
            color="blue"
          >
            Write Blog
          </Button>
        </Box>
      </Box>
      <Blogs />
    </Box>
  );
}

export default Homepage;
