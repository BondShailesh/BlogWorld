import React, { useState } from "react";
// import axios from "axios";
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

  useEffect(() => {
    if (value) {
      onFileUpload();
      setValue(false);
    }
  }, [value]);

  const onFileUpload = async () => {
    var formdata = new FormData();
    formdata.append("image", file.file);
    formdata.append("type", file);
    console.log(file.file, "file");
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
        console.log(result)
        // setForm({
        //   ...form,
        //   file: result.data
        // });
        console.log(form);
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = async (e) => {
    let { name, value, type, files } = e.target;
    if (type === "file") {
      // setForm({
      //   ...form,
      //   [name]: files,
      // });
      setFile({ file: files[0] });
      // let k = await onFileUpload();
      // console.log(k,"dekho es bar");
      setValue(true);
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  const handleForm = async () => {
    console.log(form);
    console.log(file);
    // let res = await axios.post("http://localhost:8080/blogs",{...form})
    // console.log(res.data);
  };

  return (
    <FormControl m="auto" mt="20px" w="97%" p="20px">
      <Heading>Start your creative Journey Today</Heading>
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
      <Heading>Blog Body</Heading>

      <Box border="1px dotted green" mt="30px" bg="yellow.50">
        <Input
          onChange={handleChange}
          name="subOne"
          h={["24px", "48px"]}
          fontSize={["14px", "28px"]}
          placeholder="Sub-title-1"
        />
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" name="image" />
        </Text>
        {/* accept="image/*" */}
        <Textarea
          onChange={handleChange}
          name="desOne1"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desOne2"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desOne3"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desOne4"
          placeholder="To write like this"
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
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" accept="image/*" />
        </Text>
        <Textarea
          onChange={handleChange}
          name="desTwo1"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo2"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo3"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desTwo4"
          placeholder="To write like this"
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
        <Text onChange={handleChange} name="propic" color="red.400">
          {" "}
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" accept="image/*" />
        </Text>
        <Textarea
          onChange={handleChange}
          name="desThree1"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desThree2"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desThree3"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desThree4"
          placeholder="To write like this"
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
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" name="file" accept="image/*" />
        </Text>
        <Textarea
          onChange={handleChange}
          name="desFour1"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFour2"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFour3"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFour4"
          placeholder="To write like this"
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
          <span pr="34px">Choose your profile pic </span>{" "}
          <input type="file" accept="image/*" />
        </Text>
        <Textarea
          onChange={handleChange}
          name="desFive1"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFive2"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFive3"
          placeholder="To write like this"
        />
        <Textarea
          onChange={handleChange}
          name="desFive4"
          placeholder="To write like this"
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
          <input type="file" accept="image/*" />
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
