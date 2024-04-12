import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Flex,
  Box, 
  Button,
} from "@chakra-ui/react";
import { BiSearch, BiSolidMap } from "react-icons/bi";

const SearchBar = () => {
  return (
    <>
      <Flex wrap="wrap" gap="5">
        <Box flex="1" minWidth="300">
          <InputGroup>
            <InputLeftElement>
              <Icon as={BiSearch} color="gray.400" boxSize={5} mr={1} />
            </InputLeftElement>
            <Input placeholder="Job Title . . ." />
          </InputGroup>
        </Box>
        <Box flex="1" minWidth="300">
          <InputGroup>
            <InputLeftElement>
              <Icon as={BiSolidMap} color="gray.400" boxSize={5} mr={1} />
            </InputLeftElement>
            <Input placeholder="Location . . ." />
          </InputGroup>
        </Box>
        <Box as="div">
        <InputGroup>
          <Button borderRadius="0" colorScheme="blue">
            Submit
          </Button>
        </InputGroup>
        </Box>
      </Flex>
    </>
  );
};

export default SearchBar;
