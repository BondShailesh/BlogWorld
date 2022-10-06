import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Blogs() {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        "http://localhost:8080/blogs"
      );
      setData(res.data);
    };
    getData();
  }, []);

  let width = "70%";
  if (issmallerthan840px) {
    width = "97%";
  }
  console.log(data);
  return (
    <Box
      w="90%"
      m="auto"
      display="flex"
      justifyContent="space-evenly"
      textAlign="left"    
    >
      
      <Box
        w={width}
        borderLeft="0.5px dotted grey"
        borderRight="1px dotted grey"
        paddingLeft="5%"
        paddingRight="5%"
        paddingTop="70px"
        pb='50px'
      >
        <Heading textAlign='center' fontStyle='italic'>Blogs</Heading>
        {data.map((el) => (
          <Box borderTop="1px solid grey" w="100%" p="5px" m='30px'>
          <Link to= {`/blog/${el._id}`} key={el._id}>
            <Box >
            <Box display="flex" justifyContent="space-around">
                <Text>{el.writer}</Text>
                <Text>{el.date}</Text>
              </Box>
              <Text fontSize={["23px", "34px"]}>{el.title}</Text>
              <Text>{el.description}</Text>
            </Box>
          </Link>
          </Box>
        ))}
      </Box>
      {isLargerthan841px && <Box w='30%'></Box>}
    </Box>
  );
}

export default Blogs;
