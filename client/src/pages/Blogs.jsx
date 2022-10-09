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
    "(max-width: 560px)",
  ]);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("http://18.183.244.241:3001/blogs");
      setData(res.data);
    };
    getData();
  }, []);

  let width = "90%";
  if (issmallerthan840px) {
    width = "95%";  
  }
  return (
    <Box
      w={['100%','90%']}
      m="auto"
      display="flex"
      justifyContent="space-evenly"
      textAlign="left"
    >
      <Box
        w={["90%",'90%','80%',"65%"]}
        borderLeft="1px dotted grey"
        borderRight="1px dotted grey"
        // paddingLeft='40px'
        // paddingRight='40px'
        paddingTop={["20px", "50px"]}
        pb={["20px", "40px"]}
        m="auto"
      >
        <Heading textAlign="center" fontStyle="italic">
          Blogs
        </Heading>

        {data.map((el) => (
          <Box borderTop="1px solid grey" w={['',"93%"]} p="5px" m="30px" key={el._id}>
            <Link to={`/blog/${el._id}`} key={el._id}>
              <Box>
                <Box display="flex" justifyContent="space-around">
                  <Text>{el.writer}</Text>
                  <Text>{el.date}</Text>
                </Box>
                <Text fontSize={["23px", "34px"]}>{el.title}</Text>
                
                <Text>{el.description} </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
      {isLargerthan841px && <Box w="30%"></Box>}
    </Box>
  );
}

export default Blogs;
