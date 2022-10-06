import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import home6 from "../assets/home6.jpg"
import Blogs from './Blogs'
function Homepage() {
   
  return (
    
    <Box >   
    <Box> 
       <Img  src={home6} alt="4sdgad" w='100%' h='87vh'/>
       <Box color='white' 
       position='absolute'
       left='30%'
       right='30%'
       top='13%'
        >
        <Heading>Publish your passions, your way</Heading>
        <Text mt='20px'>Create a unique and beautiful blog easily.</Text>
       </Box>
       </Box>  
       <Blogs/>
    </Box>   
  )
}

export default Homepage