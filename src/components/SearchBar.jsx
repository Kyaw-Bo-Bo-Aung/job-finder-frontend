import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Flex,
  Box, 
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BiBuildings, BiSolidMap } from "react-icons/bi";
import { FilterContext } from "../context/FilterProvider";

const SearchBar = () => {
  const { handleCompany, handleLocation } = useContext(FilterContext);
  const [locationValue, setLocationValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");

  const handleSearch = () => {
    handleLocation(locationValue);
    handleCompany(companyValue);
  }

  return (
    <>
      <Flex wrap="wrap" gap="5">
        <Box flex="1" minWidth="300">
          <InputGroup>
            <InputLeftElement>
              <Icon as={BiBuildings} color="gray.400" boxSize={5} mr={1} />
            </InputLeftElement>
            <Input value={companyValue} onChange={(e) => {
                setCompanyValue(e.target.value)
              }} placeholder="Company Name" />
          </InputGroup>
        </Box>
        <Box flex="1" minWidth="300">
          <InputGroup>
            <InputLeftElement>
              <Icon as={BiSolidMap} color="gray.400" boxSize={5} mr={1} />
            </InputLeftElement>
            <Input value={locationValue} onChange={(e) => setLocationValue(e.target.value)} placeholder="Location . . ." />
          </InputGroup>
        </Box>
        <Box as="div">
        <InputGroup>
          <Button onClick={() => handleSearch()} borderRadius="0" colorScheme="blue">
            Search
          </Button>
        </InputGroup>
        </Box>
      </Flex>
    </>
  );
};

export default SearchBar;
