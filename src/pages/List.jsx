import {
  Container,
  Grid,
  GridItem,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";

import SearchBar from "../components/SearchBar/SearchBar";
import FilterSideBar from "../components/FilterSideBar/FilterSideBar";
import JobListGrid from "../components/JobListGrid/JobListGrid";

const List = () => {
  return (
    <Container maxW="container.xl">
      <Box m="5">
        <SearchBar />
      </Box>
      <Divider />
      <Box m="4">
        <Text fontSize="2xl">Recommanded Jobs</Text>
      </Box>
      <Grid h={`calc(100vh - 140px)`} templateColumns="repeat(9, 1fr)" gap="3">
        <GridItem colSpan={{ base: 9, md: 2 }}>
          <FilterSideBar />
        </GridItem>
        <GridItem colSpan={{ base: 9, md: 7 }}>
          <JobListGrid />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default List;
