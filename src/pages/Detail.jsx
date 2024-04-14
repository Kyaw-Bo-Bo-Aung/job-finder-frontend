import {
  Container,
  Grid,
  GridItem,
  Box,
  Divider,
  Flex,
  Icon,
} from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import JobDetailCard from "../components/JobDetailCard";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import JobList from "../components/JobList";
import Filter from "../components/Filter";

const Detail = () => {
  const [isDetailView, setIsDetailView] = useState(false);

  const toggleDetailView = () => {
    setIsDetailView(!isDetailView);
  };

  return (
    <>
      <>
        <Container pb="20" maxW="container.xl">
          <Box m="5">
            <SearchBar />
          </Box>
          <Divider />
          <Box m="5">
            <Filter />
          </Box>
          <Grid
            templateColumns="repeat(7, 1fr)"
            h={{ md: `calc(100vh - 150px)` }}
          >
            <GridItem
              display={
                isDetailView ? { base: "none", md: "block" } : { base: "block" }
              }
              colSpan={{ base: 7, md: 3 }}
              h={{ md: `calc(100%)` }}
              overflowY="auto"
              overflowX={{ base: "hidden" }}
            >
              <JobList onChangeDetailView={() => toggleDetailView()} />
            </GridItem>
            <GridItem
              display={
                isDetailView ? { base: "block" } : { base: "none", md: "block" }
              }
              colSpan={{ base: 7, md: 4 }}
              h={{ md: `calc(100%)` }}
              overflowY="auto"
            >
              <Flex
                display={
                  isDetailView ? { base: "flex", md: "none" } : { base: "none" }
                }
                onClick={() => toggleDetailView()}
                my="3"
                as="button"
                justify="left"
                align="center"
              >
                <Icon as={BiArrowBack} color="blue.800" boxSize={5} mr={1} />
                <Box as="span">Back to list</Box>
              </Flex>
              <JobDetailCard />
            </GridItem>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default Detail;
