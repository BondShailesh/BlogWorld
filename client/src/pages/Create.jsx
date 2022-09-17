import React from 'react'
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormHelperText,
    HStack,
    Select,
    Input,
    Textarea,
    Heading,
    Image,
    Button,
    Text
} from '@chakra-ui/react'


function Create() {

    return (
        <FormControl
            m="auto"
            mt="20px"
            w="70%"
            border="3px solid orange"
            p="20px">
            <Heading>Start your creative Journey Today</Heading>

            {/* Top Section-------------- */}
            <FormControl isRequired >
                <FormLabel fontSize="33px" fontWeight="extrabold">Title</FormLabel>
                <Input fontWeight="900" placeholder='First name' />

                <FormLabel mt="23px" fontSize="28px" fontWeight="extrabold">Description</FormLabel>
                <Input fontWeight="semibold" placeholder='First name' />

                <FormLabel mt="23px" fontSize="28px" fontWeight="extrabold">Select category</FormLabel>
                <Select fontWeight="semibold" placeholder='Select category'>
                    <option>Personal blogs</option>
                    <option>Business/corporate blogs</option>
                    <option>Personal brand/professional blogs</option>
                    <option>Fashion blogs</option>
                    <option>Lifestyle blogs</option>
                    <option>Travel blogs</option>
                    <option>Food blogs</option>
                </Select>
            </FormControl>

            {/* Body part of blog */}
            <FormLabel mt="23px" fontSize="24px" fontWeight="extrabold">Sub-title</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Textarea h="200px" placeholder='Here is a sample placeholder' />

            <FormLabel mt="23px" fontSize="24px" fontWeight="extrabold">Sub-title</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Textarea h="200px" placeholder='Here is a sample placeholder' />

            <FormLabel mt="23px" fontSize="24px" fontWeight="extrabold">Sub-title</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Textarea h="200px" placeholder='Here is a sample placeholder' />

            <Heading m="28px">Your Details</Heading>
            <FormLabel mt='-25px' fontWeight="extrabold">Name</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <FormLabel mt="20px" fontWeight="extrabold">Bio</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <FormLabel mt="20px" fontWeight="extrabold">Instagram</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <FormLabel mt="20px" fontWeight="extrabold">twitter</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <FormLabel mt="20px" fontWeight="extrabold">facebook</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />
            <FormLabel mt="20px" fontWeight="extrabold">linkedin</FormLabel>
            <Input fontWeight="semibold" placeholder='First name' />

            <Button m="10px" bg="green.300" >Publish</Button>

        </FormControl>
    )
}

export default Create