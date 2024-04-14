import { Box, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Box borderBottom="2px" borderColor="green" bg="white">
      <Flex align="center" justify="center">
        <HStack>
          <ChakraLink
            _hover={{ textDecoration: "none", color: "black" }}
            color="gray.400"
            p="4"
            as={ReactRouterLink}
            to="/"
          >
            Home
          </ChakraLink>
          <ChakraLink
            _hover={{
              textDecoration: "none",
              color: "black",
            }}
            p="4"
            as={ReactRouterLink}
            to="/jobs"
          >
            All Jobs
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
