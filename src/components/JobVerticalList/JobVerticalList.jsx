import {
  Grid,
  GridItem,
  Box,
  Flex,
  Spacer,
  Stack,
  ScaleFade,
  Skeleton,
} from "@chakra-ui/react";
import queryString from "query-string";
import JobCard from "../JobCard/JobCard";
import useFetchData from "../../hooks/useFetchData";
import JobCardSkeleton from "../Skeleton/JobCardSkeleton";
import Pagination from "../Pagination/Pagination";
import { useContext, useState } from "react";
import { FilterContext } from "../../context/FilterProvider";

const JobVerticalList = () => {
  const {
    level,
    category,
    location,
    handleLevel,
    handleCategory,
    handleLocation,
  } = useContext(FilterContext);

  // const apiEndpoint = "http://localhost:3000" + "/jobs";
  // const [category, setCategory] = useState(["Accounting"]);
  // const [level, setLevel] = useState(["Entry Level", "Mid Level"]);
  // const [location, setLocation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const generateURL = (params) => {
    const urlParams = queryString.stringify(params);
    return queryString.stringifyUrl({
      url: "http://localhost:3001/jobs",
      query: { ...params },
    });
  };

  const { data, loading, error } = useFetchData(
    generateURL({ page: currentPage - 1, category, location, level })
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading)
    return (
      <Grid p="5">
        <GridItem>
          <Flex>
            <Box mb="1">
              <Skeleton height="15px" width="40" />
            </Box>
            <Spacer />
            <Box>Sort By: Relevant | Date </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Stack>
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </Stack>
        </GridItem>
      </Grid>
    );

  if (error) return <>error ...</>;

  const { page_count: pagesCount, total, results: jobList } = data;

  return (
    <Box position="relative">
      <Grid p="5">
        <GridItem>
          <Flex>
            <Box>{total} jobs</Box>
            <Spacer />
            <Box>Sort By: Relevant | Date </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Grid>
            {jobList.map((job) => (
              <ScaleFade key={job.id} initialScale={0.9} in={total}>
                <GridItem my="2">
                  <JobCard jobDetail={job} />
                </GridItem>
              </ScaleFade>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box align="center">
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default JobVerticalList;
