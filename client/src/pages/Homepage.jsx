import { Box, Button, Heading, Img, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import home6 from "../assets/home6.jpg"
import Blogs from './Blogs'
function Homepage() {
  const [
    isLargerthan841px,
    isLargerthan421px,
    issmallerthan840px,
    issmallerthan420px,
  ] = useMediaQuery([
    "(min-width: 840px)",
    "(min-width: 421px)",
    "(max-width: 840px)",
    "(max-width: 420px)",
  ]);
  return (
    
    <Box   >  
       {/* {isLargerthan841px &&   */}
    <Box >     
       <Img  w='100%' h={['150px','200px','300px','100vh']} src={home6}   alt="4sdgad" />        
       <Box color='white'     
       position='absolute'
       left={['0%','0%','0%']}
       right={['0%','0%','0%']}
       top={['16%','13%']}  
        >
        <Heading fontSize={['16px','20px','34px']}>Publish your passions, your way</Heading>
        <Text mt={['5px','20px']}>Create a unique and beautiful blog easily.</Text>
       <Button width={["l",'l','l']} mt={['5px','20px']} color='blue'>Create</Button>
       </Box>
       </Box> 
      {/* }  */}
       <Blogs/>
    </Box>   
  )
}

export default Homepage