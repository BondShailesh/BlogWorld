import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Login() {
    return (
        <Box w={["full", "md"]}
            p={[8, 10]}
            mt="20px"
            mx="auto"
            border={["none", "1px"]}
            borderColor={["", "gray.300"]}
            borderRadius={10}>

            <VStack spacing={4}
                align="flex-start"
                w='full'>
                <VStack spacing={4}
                    align={["flex-start", 'center']}
                    w='full'>
                    <Heading>Login</Heading>
                    <Text>Enter your e-mail and password to login</Text>
                </VStack>

                <FormControl>
                    <FormLabel>E-mail Address</FormLabel>
                    <Input rounded="3xl"
                        variant='filled'
                        type="email"/>
                </FormControl>
                <FormControl>
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
                        colorScheme='blue'
                    >Forgot password</Button>
                </HStack>
                <Button rounded="none"
                    colorScheme="blue"
                    w={['full', 'auto']}>
                    Login</Button>
            </VStack>
        </Box>
    )
}

export default Login