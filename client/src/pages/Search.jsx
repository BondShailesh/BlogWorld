import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
function Blogs() {
  const [data, setData] = useState([]);
  const {id} = useParams()
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
      let res = await axios.post(`https://whispering-garden-97359.herokuapp.com/blogs/title`,{title:id});
        if(res.data!="No result found"){
            setData(res.data);
        }else{
            setData([]);
        }    
    };
    getData();
  }, [id]);

  let width = "70%";
  if (issmallerthan840px) {
    width = "97%";
  }
  return (
    <Box
      w="90%"
      m="auto"
      display="flex"
      justifyContent="space-evenly"
      textAlign="left"
      mt={['80px','90px']}
      mb={['500px','300px']}
    >
      <Box
        w={width}
        borderLeft="0.5px dotted grey"
        borderRight="1px dotted grey"
        paddingLeft="5%"
        paddingRight="5%"
        paddingTop={["20px", "50px"]}
        pb={["20px", "40px"]}
      >
        <Heading textAlign="center" fontStyle="italic">
          Blogs
        </Heading>
        {data.length===0 ? <Text textAlign='center' mt='30px' fontSize='23px'>No Blog Found</Text>:''}
        {data && data.map((el) => (
          <Box borderTop="1px solid grey" w="100%" p="5px" m="30px" key={el._id}>
            <Link to={`/blog/${el._id}`} key={el._id}>
              <Box>
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
      {isLargerthan841px && <Box w="30%"></Box>}
    </Box>
  );
}

export default Blogs;
