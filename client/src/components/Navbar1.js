import React from 'react'
import {
  Input,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  useMediaQuery
} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
import Ham from './Hamberger'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLargerthan841px, isLargerthan421px,
    issmallerthan840px, issmallerthan420px] =
    useMediaQuery(["(min-width: 840px)", "(min-width: 421px)",
      "(max-width: 840px)", "(max-width: 420px)"])

  const handleLogin = () => {
    navigate("/login")
  }

  const handlelogo = () => {
    navigate("/")
  }
  
  const handleBlog = () => {
    return navigate("/create")
  }
  return (
    <Box >
      {isLargerthan841px ?
        <Box h="80px" bg="pink.300" display='flex'
          alignItems='center'
          justifyContent='space-around'>
          <HStack ><Heading onClick={handlelogo}>OPEN BLOG</Heading></HStack>

          <HStack >
            <Input m="-10px" p="0" w="300px" h="50px" placeholder='Basic usage' />
            <Box borderRadius="5px" margin="-15px" p="5px" border="1px solid white"
              _hover={{
                background: "white",
                color: "teal.500",
                borderRadius: "5px"
              }}>
              <BsSearch size="34px" hover="cursor" />
            </Box>
            <HStack >
              <Button onClick={handleBlog} p="auto 15px">Create your blog</Button>
              <Button onClick={handleLogin} m="20px">Login</Button>
            </HStack>
          </HStack>

        </Box>

        : ""}

      {isLargerthan421px && issmallerthan840px ?
        <HStack bg="pink.300">
          <Container>
            <Heading>OPEN BLOG</Heading>
          </Container>
          <Container>
            <Button m="7px" p="auto 15px">Create your blog</Button>
            <Button m="7px">Logout</Button>
          </Container>
        </HStack> : ""}

      {issmallerthan420px ?
        <Box >
          <HStack bg="pink.300">
            <Container background="black" ><Ham /></Container>
            <Container>
              <Text fontWeight="bold">OPEN BLOG</Text>
            </Container>
            <Container>
              <Button fontSize="7px" m="7px" p="auto 15px">write your blog</Button>
              <Box>

              </Box>
            </Container>
          </HStack>
          <Box>jgojt ogjotjoqewjtgoqeut[o bjeounh[tjnejo;njb</Box>

        </Box>
        : ""}
    </Box>
  )
}

export default Navbar