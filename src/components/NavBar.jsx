import {
  Box,
  Flex,
  HStack,
  Spacer,
  Container,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box borderBottom="2px" borderColor="blue.100">
      <Container px="3" maxW="container.xl">
        <Flex align="center" justify="center">
          <Box fontSize="xl" fontWeight="500">
            Job Finder
          </Box>
          <Spacer />
          <HStack>
            <ChakraLink
              p="4"
              _hover={{ textDecoration: "none", color: "black" }}
              as={NavLink}
              to="/"
              activeclassname="active"
            >
              Home
            </ChakraLink>
            <ChakraLink
              p="4"
              _hover={{ textDecoration: "none", color: "black" }}
              as={NavLink}
              to="/jobs"
              activeclassname="active"
            >
              Jobs
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
