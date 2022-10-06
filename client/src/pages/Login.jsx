import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const handleSighup = () => {
        navigate("/signup")
    }
    return (
        <Box w={["full", "md"]}
            p={[8, 10]}
            mt={['95px','95px']}
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={10}
            boxShadow='xl'
            mb='15px'>

            <VStack spacing={4}
                align="flex-start"
                w='full'>
                <VStack spacing={4}
                    align={["flex-start", 'center']}
                    w='full'>
                    <Heading>Login to OpenBlog</Heading>
                </VStack>

                <FormControl isRequired>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type="email" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>password</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type='password'
                    />
                </FormControl>

                <HStack w='full'
                    justify='space-between'>
                    <Checkbox>Remember me</Checkbox>
                    <Button variant='link'
                        colorScheme='red'
                    >Forgot password</Button>
                </HStack>
                <Button
                    bg="green.300"
                    w={['full', '170px']}
                    mt="30px"
                    alignSelf="center"
                    borderRadius="20px"
                    color="whitesmoke">
                    Login</Button>

                <HStack
                    fontSize={["17px", "24px"]}>
                    <Text>Don't have account?</Text>
                    <Text onClick={handleSighup}
                        color='green'
                        cursor="pointer"
                        _hover={{
                            background: "white",
                            color: "red",
                        }}
                    >Signup</Text>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Login