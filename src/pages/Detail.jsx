import {
  Container,
  Grid,
  GridItem,
  Box,
  Divider,
} from "@chakra-ui/react";
import FilterNav from "../components/FilterNav/FilterNav";
import SearchBar from "../components/SearchBar/SearchBar";
import JobVerticalList from "../components/JobVerticalList/JobVerticalList";
import JobDetailCard from "../components/JobDetailCard/JobDetailCard";

const Detail = () => {
  return (
    <>
      <>
        <Container pb="20" maxW="container.xl">
          <Box m="5">
            <SearchBar />
          </Box>
          <Divider />
          <Box m="5">
            <FilterNav />
          </Box>
          <Grid templateColumns="repeat(7, 1fr)" gap={4} h={{md: `calc(100vh - 150px)`}}>
            <GridItem colSpan={{base: 7, md: 3, lg: 3}} h={{ md: `calc(100%)` }} overflowY="auto">
              <JobVerticalList />
            </GridItem>
            <GridItem colSpan={{base: 7, md: 4, lg: 4}} h={{ md: `calc(100%)` }} overflowY="auto">
              <JobDetailCard />
            </GridItem>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default Detail;
