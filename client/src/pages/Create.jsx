import React, { useState } from 'react'
import {
    FormControl,
    Select,
    Input,
    Textarea,
    Heading,
    Button,
    Text,
    Box
} from '@chakra-ui/react'


function Create() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        let { name, value, type, files } = e.target
        if (type === "file") {
            setForm({
                ...form,
                [name]: files
            })
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }
    const handleForm = () => {
        console.log(form);
    }

    return (
        <FormControl
            m="auto"
            mt="20px"
            w="97%"
            p="20px">
            <Heading>Start your creative Journey Today</Heading>
            {/* Top Section-------------- */}
            <FormControl >
                <Input onChange={handleChange} name="title" fontStyle="italic" m="10px" h={["34px", '74px']} fontWeight="light" fontSize={["20px", '44px']} placeholder='Say your blog title loud to the world' />
                <Input onChange={handleChange} name="description" fontStyle="italic" m="10px" h={["30px", '64px']} fontWeight="light" fontSize={["20px", '44px']} placeholder='Give a nice Description' />
                <Select onChange={handleChange} name="category" fontStyle="italic" m="10px" h={["27px", '54px']} fontWeight="light" fontSize={["16px", '34px']} placeholder='Select category'>
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

            <Heading>Blog Body</Heading>

            <Box border='1px dotted green' mt="30px">
                <Input onChange={handleChange} name="subOne" h={["24px", '48px']} fontSize={["14px", '28px']} placeholder='Sub-title-1' />
                <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
                <Textarea onChange={handleChange} name="desOne" placeholder='To write like this' />
            </Box>

            <Box border='1px dotted green' mt="30px">
                <Input onChange={handleChange} name="subTwo" h={["24px", '48px']} fontSize={["14px", '28px']} placeholder='Sub-title-2' />
                <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
                <Textarea onChange={handleChange} name="desTwo" placeholder='To write like this' />
            </Box>

            <Box border='1px dotted green' mt="30px">
                <Input onChange={handleChange} name="subThree" h={["24px", '48px']} fontSize={["14px", '28px']} placeholder='Sub-title-3' />
                <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
                <Textarea onChange={handleChange} name="desThree" placeholder='To write like this' />
            </Box>

            <Box border='1px dotted green' mt="30px">
                <Input onChange={handleChange} name="subFour" h={["24px", '48px']} fontSize={["14px", '28px']} placeholder='Sub-title-4' />
                <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
                <Textarea onChange={handleChange} name="desFour" placeholder='To write like this' />
            </Box>

            <Box border='1px dotted green' mt="30px">
                <Input onChange={handleChange} name="subFive" h={["24px", '48px']} fontSize={["14px", '28px']} placeholder='Sub-title-5' />
                <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
                <Textarea onChange={handleChange} name="desFive" placeholder='To write like this' />
            </Box>

            <Heading m="28px">Your Details</Heading>

            <Input onChange={handleChange} name="desFive" fontWeight="fullName" placeholder='Full-Name' />
            <Input onChange={handleChange} name="desFive" fontWeight="profession" placeholder='Profession' />
            <Text onChange={handleChange} name="propic" color="red.400"> <span pr="34px">Choose your profile pic </span> <input type="file" accept="image/*" /></Text>
            <Input onChange={handleChange} name="ig" fontWeight="semibold" placeholder='Instagram url' />
            <Input onChange={handleChange} name="tw" fontWeight="semibold" placeholder='Twitter url' />
            <Input onChange={handleChange} name="fb" fontWeight="semibold" placeholder='Facebook url' />
            <Input onChange={handleChange} name="lnk" fontWeight="semibold" placeholder='Linked url' />

            <Button onClick={handleForm} m="10px" bg="green.300" size="md">Publish</Button>

        </FormControl>
    )
}

export default Create