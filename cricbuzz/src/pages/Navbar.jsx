import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="80%" margin="auto">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex>
          <Box>
            <Link to="/">
              <Box w='150px'>
                <Image
                  pr={5}
                  textAlign={useBreakpointValue({ base: "center", md: "left" })}
                  fontFamily={"heading"}
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Cricbuzz_Logo.png"
                  backgroundColor="white"
                ></Image>
              </Box>
            </Link>
          </Box>
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          backgroundColor="#009270"
          height='40px'
          alignItems='center'
          justifyContent='space-evenly'
        >
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/match">
                <Text color="white">Matches</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/series">
                <Text color="white">Series</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/teams">
                <Text color="white">Teams</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/">
                <Text color="white">Venues</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/">
                <Text color="white">Players</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/news">
                <Text color="white">News</Text>
              </Link>
            </Box>
            <Box display={{ base: "none", md: "flex" }} >
              <Link to="/">
                <Text color="white">Stats</Text>
              </Link>
            </Box>
          
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          direction={"row"}
          alignItems='center'
          minW='100px'
          justifyContent='space-around'
        >
          <Box>
            <Link to='/'>
              <SearchIcon color='teal'></SearchIcon>
            </Link>
          </Box>
          <Box display='flex' >
            <Link to='/login'>
              <FaUser color='teal'></FaUser>
            </Link>
          </Box>
        </Stack>
      </Flex>
      <Stack
        flex={{ base: 1, md: 0 }}
        direction={"row"}
        height='40px'
        spacing={6}
        bg="#4a4a4a"
      >
        <Flex>
          <Box
            display={{ base: "none", md: "flex" }}
            ml={9}
            alignItems="center"
          >
            <Link to="/match">
              <Text color="white">Matches</Text>
            </Link>
          </Box>
        </Flex>
      </Stack>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
};
