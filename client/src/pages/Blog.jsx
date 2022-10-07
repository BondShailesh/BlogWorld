import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Textarea,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { PATCH_BLOG_API } from "../store/blog/blog.action";
import { useParams } from "react-router-dom";

function Blog() {
  let { id } = useParams();
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
  const [data, setdata] = useState({});
  const [comment, setComment] = useState([]);
  const [like, setLike] = useState();
  const [followers, setFollowers] = useState();
  const [comments, setComments] = useState();
  const dispatch = useDispatch();

  let width = "99%";
  if (issmallerthan840px) {
    width = "97%";
  }
  const handleLike = () => {
    let lov = data.love;
    lov = lov + 1;
    setLike(data.lov);
    dispatch(PATCH_BLOG_API({ love: lov, id: id }));
  };

  const handleFollow = () => {
    let Currfollow = data.followers;
    Currfollow = Currfollow + 1;
    setFollowers(data.Currfollow);
    dispatch(PATCH_BLOG_API({ followers: Currfollow, id: id }));
  };

  const handleComments = () => {
    let CurrComments = data.comments;
    CurrComments.push();
    setComment(data.CurrComments);
    dispatch(PATCH_BLOG_API({ comments: CurrComments, id: id }));
  };

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`https://whispering-garden-97359.herokuapp.com/blogs/${id}`);
      setdata(res.data[0]);
      setLike(res.data[0].love);
      setFollowers(res.data[0].followers);
      setComments(res.data[0].comments);
    };
    getData();
  }, [like, followers, comment]);

  return (
    <Box color="#3E3C3D" mt={["90px", "90px"]}>
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
          display="flex"
        >
          <Box w="90%" m="auto" justifySelf="center">
            <Heading
              textAlign="center"
              textShadow="2xl"
              mt="20px"
              mb="14px"
              fontFamily="Cursive"
            >
              {data.title}
            </Heading>
            <Box display="flex" justifyContent="right" color="blue.600">
              <Text>{data.date}</Text>
              <Text ml={["12px", "30px"]}>3 min read</Text>
            </Box>
            <Text textAlign="center">{data.description}</Text>

            <VStack m="30px">
              {data.subOne ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subOne}
                </Heading>
              ) : (
                ""
              )}
              {data.sub1image && <Image src={data.sub1image} />}
              {data.desOne1 ? <Text>{data.desOne1}</Text> : ""}
              {data.desOne2 ? <Text>{data.desOne2}</Text> : ""}
              {data.desOne3 ? <Text>{data.desOne3}</Text> : ""}
              {data.desOne4 ? <Text>{data.desOne4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subTwo ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subTwo}
                </Heading>
              ) : (
                ""
              )}
              {data.sub2image && <Image src={data.sub2image} />}
              {data.desTwo2 ? <Text>{data.desTwo1}</Text> : ""}
              {data.desTwo2 ? <Text>{data.desTwo2}</Text> : ""}
              {data.desTwo3 ? <Text>{data.desTwo3}</Text> : ""}
              {data.desTwo4 ? <Text>{data.desTwo4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subThree ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subThree}
                </Heading>
              ) : (
                ""
              )}
              {data.sub3image && <Image src={data.sub3image} />}
              {data.desThree1 ? <Text>{data.desThree1}</Text> : ""}
              {data.desThree2 ? <Text>{data.desThree2}</Text> : ""}
              {data.desThree3 ? <Text>{data.desThree3}</Text> : ""}
              {data.desThree4 ? <Text>{data.desThree4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subFour ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subFour}
                </Heading>
              ) : (
                ""
              )}
              {data.sub4image && <Image src={data.sub4image} />}
              {data.desFour1 ? <Text>{data.desFour1}</Text> : ""}
              {data.desFour2 ? <Text>{data.desFour2}</Text> : ""}
              {data.desFour3 ? <Text>{data.desFour3}</Text> : ""}
              {data.desFour4 ? <Text>{data.desFour4}</Text> : ""}
            </VStack>

            <VStack m="30px">
              {data.subFive ? (
                <Heading color="#1D1C1D" fontWeight="semi-bold" fontSize="30px">
                  {data.subFive}
                </Heading>
              ) : (
                ""
              )}
              {data.sub5image && <Image src={data.sub5image} />}
              {data.desFive1 ? <Text>{data.desFive1}</Text> : ""}
              {data.desFive2 ? <Text>{data.desFive2}</Text> : ""}
              {data.desFive3 ? <Text>{data.desFive3}</Text> : ""}
              {data.desFive4 ? <Text>{data.desFive4}</Text> : ""}
            </VStack>

            <Heading>More Blogs...</Heading>
            <Text>Not available</Text>

            <Box color="red" display="flex" justifyContent="space-evenly">
              <HStack>
                <Text>{like}</Text>
                <MdFavorite cursor="pointer" onClick={handleLike} size="34px" />
              </HStack>

              <HStack m="19px">
                <a target="_blank" href="www.facebook.com">
                  {" "}
                  <BsFacebook size="28px" color="rgb(9, 126, 235)" />
                </a>
                <BsInstagram size="28px" />
                <BsLinkedin color="rgb(9, 126, 235)" size="28px" />
                <BsTwitter color="rgb(9, 126, 235)" size="28px" />
              </HStack>
            </Box>

            <Heading>Comments</Heading>
            <Box display="flex" alignItems="center">
              <Textarea
                onChange={(e) => setComment(e.target.value)}
                mt="20px"
                mb="12px"
                placeholder="Your Comments"
              />
              <Button ml="7px" bg="green.300" onClick={handleComments}>
                Post
              </Button>
            </Box>

            <Box h="200px" border="1px solid black">
              {comments
                ? comments.map((el) => (
                    <Box key={el._id} textAlign="left" ml="20px" mb="10px">
                      <Text fontSize="20px" color="red">
                        {Object.keys(el)}
                      </Text>
                      <Text fontSize="14px">{Object.values(el)}</Text>
                    </Box>
                  ))
                : ""}
            </Box>
          </Box>
        </Box>
        {/* //Other part of box */}
        {isLargerthan841px ? (
          <Box position="sticky" mt="12px" mr="20px" w="30%" h="100vh">
            <VStack>
              <Image
                borderRadius="50%"
                width="50%"
                src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg"
              />
              <Text>{data.writer}</Text>
              <Text color="green">{followers} Followers</Text>
              <Button onClick={handleFollow}>Follow</Button>
              <Text fontSize="23px">More from {data.writer}</Text>
            </VStack>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Blog;
