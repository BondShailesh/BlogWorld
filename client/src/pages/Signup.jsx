import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <Box w={["full", "md"]}
            p={[8, 10]}
            mt="20px"
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={10}
            boxShadow='xl'>

            <VStack spacing={4}
                align="flex-start"
                w='full'>
                <VStack spacing={4}
                    align={["flex-start", 'center']}
                    w='full'>
                    <Heading>Signup to OpenBlog</Heading>

                </VStack>

                <FormControl isRequired>
                    <FormLabel >E-mail Address</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type="email" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel >password</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type='password' />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type='password' />
                </FormControl>

                <Button
                    bg="green.300"
                    w={['full', '170px']}
                    mt="30px"
                    alignSelf="center"
                    borderRadius="20px"
                    color="whitesmoke">
                    Signup</Button>

                <HStack
                    fontSize={["17px", "24px"]}>
                    <Text>Already have an account?</Text>

                    <Text onClick={handleLogin}
                        color='green'
                        cursor="pointer"
                        _hover={{
                            background: "white",
                            color: "red",
                        }}
                    >Login</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Signup