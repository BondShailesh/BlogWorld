import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  Input,
  Textarea,
  Heading,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";

function Create() {
  const [value, setValue] = useState(false);
  const [form, setForm] = useState({});
  const [file, setFile] = useState();
  const [imageName,setImageName] = useState()

  useEffect(() => {
    const date = new Date().toISOString().split('T')[0]
    setForm({
      ...form,
      date: date
    });

    if (value) {
      onFileUpload();
      setValue(false);
    }
  }, [value]);

  const onFileUpload = async () => {
    var formdata = new FormData();
    formdata.append("image", file.file);
    formdata.append("type", file);
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer acdc4e25e6c81c17c9f7a1fbf55d3a18aa20675c",
      },
      body: formdata,
      redirect: "follow",
    };
    fetch("https://api.imgur.com/3/image/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        result = JSON.parse(result)
          setForm({
            ...form,
            [imageName]: result.data.link
          });  
      })
      .catch((error) => {
        alert("image could not load try next time")
      });
  };

  const handleChange = async (e) => {
    let { name, value, type, files } = e.target;
    if (type === "file") {
       setImageName(name)
      setFile({ file: files[0] });
      setValue(true);
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleForm = async () => {
    setForm({
      ...form,
      love: 0,
      followers:0,
      creds:""
    });
    let res = await axios.post("https://whispering-garden-97359.herokuapp.com/blogs",{...form})
  };

  return (
    <FormControl m="auto" mt="95px" w="97%" p="20px">
      <Heading color='grey' fontStyle='inherit'>Start your writing Journey Today</Heading>
      {/* Top Section-------------- */}
      <FormControl>
        <Input
          onChange={handleChange}
          name="title"
          fontStyle="italic"
          m="10px"
          h={["34px", "74px"]}
          fontWeight="light"
          fontSize={["20px", "44px"]}
          placeholder="Say your blog title loud to the world"
        />
        <Input
          onChange={handleChange}
          name="description"
          fontStyle="italic"
          m="10px"
          h={["30px", "64px"]}
          fontWeight="light"
          fontSize={["20px", "44px"]}
          placeholder="Give a nice Description"
        />
        <Select
          onChange={handleChange}
          name="category"
          fontStyle="italic"
          m="10px"
          h={["27px", "54px"]}
          fontWeight="light"
          fontSize={["16px", "34px"]}
          placeholder="Select category"
        >
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
      <Heading  color='grey' fontStyle='italic'>Blog Body</Heading>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subOne"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-1"
        />
        <Text onChange={handleChange}  color="red.400">
          {" "}
          <span pr="34px">Choose subtitle 1 pic</span>{" "}
          <input type="file" accept="image/*" name="sub1image" />
        </Text>
        <Textarea
          onChange={handleChange}
          name="desOne1"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desOne2"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desOne3"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desOne4"
          placeholder="write indivisual paragraph here"
        />
      </Box>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subTwo"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-2"
        />
        <Text onChange={handleChange}  color="red.400">
          {" "}
          <span pr="34px">Choose sub-title 2 pic </span>{" "}
          <input type="file" accept="image/*" name="sub2image"/>
        </Text>
        <Textarea
          onChange={handleChange}
          name="desTwo1"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo2"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo3"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo4"
          placeholder="write indivisual paragraph here"
        />
      </Box>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subThree"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-3"
        />
        <Text onChange={handleChange} color="red.400">
          {" "}
          <span pr="34px">Choose Subtitle 3 pic </span>{" "}
          <input type="file" accept="image/*" name="sub3image"/>
        </Text>
        <Textarea
          onChange={handleChange}
          name="desThree1"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desThree2"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desThree3"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desThree4"
          placeholder="write indivisual paragraph here"
        />
      </Box>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subFour"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-4"
        />
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose sub-titile 4 pic </span>{" "}
          <input type="file" accept="image/*" name="sub4image"/>
        </Text>
        <Textarea
          onChange={handleChange}
          name="desFour1"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFour2"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFour3"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFour4"
          placeholder="write indivisual paragraph here"
        />
      </Box>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subFive"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-5"
        />
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose sub-title 5 pic </span>{" "}
          <input type="file" accept="image/*" name="sub5image"/>
        </Text>
        <Textarea
          onChange={handleChange}
          name="desFive1"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFive2"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFive3"
          placeholder="write indivisual paragraph here"
        />
        <Textarea
          onChange={handleChange}
          name="desFive4"
          placeholder="write indivisual paragraph here"
        />
      </Box>

      <Heading m="28px">Your Details</Heading>
      <Box bg="pink.50">
        <Input
          onChange={handleChange}
          name="fullName"
          fontWeight="semibold"
          placeholder="Full-Name"
        />
        <Input
          onChange={handleChange}
          name="profession"
          fontWeight="semibold"
          placeholder="Profession"
        />
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" accept="image/*" name='propic'/>
        </Text>
        <Input
          onChange={handleChange}
          name="ig"
          fontWeight="semibold"
          placeholder="Instagram url"
        />
        <Input
          onChange={handleChange}
          name="tw"
          fontWeight="semibold"
          placeholder="Twitter url"
        />
        <Input
          onChange={handleChange}
          name="fb"
          fontWeight="semibold"
          placeholder="Facebook url"
        />
        <Input
          onChange={handleChange}
          name="lnk"
          fontWeight="semibold"
          placeholder="Linked url"
        />
      </Box>
      <Button onClick={handleForm} m="10px" bg="green.300" size="md">
        Publish
      </Button>
    </FormControl>
  );
}

export default Create;
