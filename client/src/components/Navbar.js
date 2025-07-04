import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
  Input,
} from '@chakra-ui/react';
import { BsSearch } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate ,Link} from 'react-router-dom';
import { useState } from 'react';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search,setSearch] = useState()
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }

  const handleLogo = () => {
    navigate("/")
  }

  const handleWrite = () => {
    return navigate("/create")
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} 
      px={4} 
      boxShadow="2xl"
      zIndex='9'
      position='fixed'
      top='0'
      w='100%'
      >
        <Flex h={20}  alignItems={'center'} justifyContent={'space-around'} alignItem="center">
          <Box>
            <Heading
              color="blue.400"
              fontStyle="oblique"
              cursor="pointer"
              onClick={handleLogo}
              w={['133px','300px']}
              fontSize={['25px','27px','37px']}
            >BlogSeven</Heading>
          </Box>
          <Box mr={['18px']} mt="5px" display="flex" ml="10px" justifyContent="space-around" alignItem="center">
            <Input onChange={(e)=>setSearch(e.target.value)} borderRadius="8px" placeholder="search blogs" />
            <Box bg="blue.200" borderRadius="8px" h="38px" p="5px" borderRight="1px dotted grey" borderTop="1px dotted grey" borderBottom="1px dotted grey">
             <Link to={`/search/${search}`}><BsSearch cursor="pointer" size="25px" alignItems="center" /></Link> 
            </Box>
          </Box>
          <Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
           
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={''}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={''}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Unknown</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={handleWrite}>Write Blog</MenuItem>
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
              
            </Stack>
          </Flex>
          </Box>
          
        </Flex>
      </Box>
    </>
  );
}