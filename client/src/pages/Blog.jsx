import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Blog() {
  const [data, setdata] = useState({});

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        "http://localhost:8080/blogs/6337324e6211402fc69ac8c0"
      );
      setdata(res.data[0]);
    };
    getData();
  }, []);

  return (
    <Box color="#3E3C3D" >
      <Box w="90%" m="auto" display="flex" justifyContent="space-evenly">
        <Box w="70%" border="1px solid grey" display="flex">
          <Box w="90%" m="auto" justifySelf="center">
            <Heading textShadow="2xl" mt="20px" mb="14px" fontFamily="Cursive">{data.title}</Heading>
            <Box display="flex" justifyContent="right" color="blue.600">
              <Text >15/09/2022</Text>
              <Text ml={["12px", "30px"]} >3 min read</Text>
            </Box>
            <Text>{data.description}</Text>
            <br />
            <br />
            <br />

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subOne}
                </Heading>
              ) : (
                ""
              )}
              <Image
                w="100%"
                height="300px"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91kAtEXPIeL._AC_UL320_.jpg"
              />
              {data.desOne1 ? <Text>{data.desOne1}</Text> : ""}
              {data.desOne2 ? <Text>{data.desOne2}</Text> : ""}
              {data.desOne3 ? <Text>{data.desOne3}</Text> : ""}
              {data.desOne4 ? <Text>{data.desOne4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subTwo}
                </Heading>
              ) : (
                ""
              )}
              <Image
                w="100%"
                height="300px"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91kAtEXPIeL._AC_UL320_.jpg"
              />
              {data.desTwo2 ? <Text>{data.desTwo1}</Text> : ""}
              {data.desTwo2 ? <Text>{data.desTwo2}</Text> : ""}
              {data.desTwo3 ? <Text>{data.desTwo3}</Text> : ""}
              {data.desTwo4 ? <Text>{data.desTwo4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subThree}
                </Heading>
              ) : (
                ""
              )}
              <Image
                w="100%"
                height="300px"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91kAtEXPIeL._AC_UL320_.jpg"
              />
              {data.desThree1 ? <Text>{data.desThree1}</Text> : ""}
              {data.desThree2 ? <Text>{data.desThree2}</Text> : ""}
              {data.desThree3 ? <Text>{data.desThree3}</Text> : ""}
              {data.desThree4 ? <Text>{data.desThree4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subFour}
                </Heading>
              ) : (
                ""
              )}
              <Image
                w="100%"
                height="300px"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91kAtEXPIeL._AC_UL320_.jpg"
              />
              {data.desFour1 ? <Text>{data.desFour1}</Text> : ""}
              {data.desFour2 ? <Text>{data.desFour2}</Text> : ""}
              {data.desFour3 ? <Text>{data.desFour3}</Text> : ""}
              {data.desFour4 ? <Text>{data.desFour4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subFive}
                </Heading>
              ) : (
                ""
              )}
              <Image
                w="100%"
                height="300px"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91kAtEXPIeL._AC_UL320_.jpg"
              />
              {data.desFive1 ? <Text>{data.desFive1}</Text> : ""}
              {data.desFive2 ? <Text>{data.desFive2}</Text> : ""}
              {data.desFive3 ? <Text>{data.desFive3}</Text> : ""}
              {data.desFive4 ? <Text>{data.desFive4}</Text> : ""}
            </VStack>

            <Heading>More Blogs...</Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolore temporibus, earum delectus aperiam quam quos autem
              consequuntur! Accusamus, quaerat laudantium nihil qui quod
              pariatur illum esse voluptatum a. Mollitia harum sapiente saepe
              libero?
            </Text>

            <Box color="red" display="flex" justifyContent="space-evenly">
              <HStack>
                <MdFavorite size="34px" />
              </HStack>

              <HStack m="19px">
              <a target ="_blank" href="www.facebook.com">  <BsFacebook size="28px" color="rgb(9, 126, 235)" /></a>
                <BsInstagram size="28px" />
                <BsLinkedin color="rgb(9, 126, 235)" size="28px" />
                <BsTwitter color="rgb(9, 126, 235)" size="28px" />
              </HStack>
            </Box>
            <Heading>Comments</Heading>
            <Textarea mt="20px" mb="12px" placeholder="Your Comments" />
            <Box h="100vh" border="1px solid black">
              <Box textAlign="left" ml="20px" mb="10px">
                <Text fontSize="20px" color="red">
                  Shailesh
                </Text>
                <Text fontSize="14px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  natus harum accusamus veritatis et nesciunt atque blanditiis,
                  possimus repellat distinctio officiis doloremque veniam
                  aperiam alias ullam voluptatum in necessitatibus nisi debitis
                  dolore dicta provident!
                </Text>
              </Box>
              <Box textAlign="left" ml="20px">
                <Text fontSize="20px">Shailesh</Text>
                <Text fontSize="14px">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente non voluptas, voluptates, maxime minus accusamus
                  consectetur assumenda aliquid, recusandae repudiandae ea
                  voluptatibus sed iusto. Ab blanditiis deleniti possimus illum
                  cum voluptas porro eligendi quisquam!
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box position="sticky" mt="0px" mr="20px" w="30%" h="100vh">
          <VStack>
            <Image
              borderRadius="50%"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51fuD3e0BAL._AC_SY200_.jpg"
            />
            <Text>Shailesh</Text>
            <Text>100 Followers</Text>
            <Button>Follow</Button>
            <Heading>More from Shailesh</Heading>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
