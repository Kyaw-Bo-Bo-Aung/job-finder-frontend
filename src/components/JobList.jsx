import {
  Grid,
  GridItem,
  Box,
  Flex,
  Spacer,
  Stack,
  Card,
  Text,
  ScaleFade,
  Skeleton,
  Button,
  Icon,
} from "@chakra-ui/react";
import queryString from "query-string";
import JobCard from "./JobCard";
import useFetchData from "../hooks/useFetchData";
import Pagination from "./Pagination/Pagination";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/FilterProvider";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import JobCardSkeleton from "./Skeleton/JobCardSkeleton";

const apiUrl = process.env.REACT_APP_API_BASE_URL + "jobs"

const JobList = ({ onChangeDetailView }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { level, category, location, company, descending, handleDescending } =
    useContext(FilterContext);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [level, category, location, company]);

  const generateURL = (params) => {
    const urlParams = queryString.stringify(params, {
      skipNull: true,
      skipEmptyString: true,
    });
    return queryString.stringifyUrl({
      url: apiUrl,
      query: queryString.parse(urlParams),
    });
  };

  const { data, loading, error, refetchData } = useFetchData(
    generateURL({
      page: currentPage - 1,
      category,
      location,
      level,
      company,
      descending,
    })
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = () => {
    handleDescending(!descending);
  };

  if (loading) {
    return (
      <Grid p="5">
        <GridItem>
          <Flex mb="2">
            <Box mb="1">
              <Skeleton height="20px" width={{ base: "80px", lg: "150px" }} />
            </Box>
            <Spacer />
            <Skeleton height="20px" width={{ base: "80px", lg: "100px" }} />
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
  }

  if (error) {
    return (
      <Grid p="5">
        <GridItem>
          <Card p="5" align="center">
            <Text mb="5" as="b" fontSize="xl" color="gray.500">
              Something went wrong
            </Text>
            <Button
              colorScheme="blue"
              onClick={() =>
                refetchData(
                  generateURL({ page: currentPage, category, location, level })
                )
              }
            >
              Refresh
            </Button>
          </Card>
        </GridItem>
      </Grid>
    );
  }

  const { page_count: pagesCount, total, results: jobList } = data;
  return (
    <Box as="div">
      <Grid p="5">
        <GridItem>
          <Flex>
            <Box fontSize={{ base: "sm", lg: "md" }}>{total} jobs</Box>
            <Spacer />
            <Flex
              align="center"
              onClick={() => handleSort()}
              as="button"
              fontSize={{ base: "sm", lg: "md" }}
            >
              Sort{" "}
              {descending ? (
                <Icon as={BiCaretDown} color="blue.800" boxSize={5} mr={1} />
              ) : (
                <Icon as={BiCaretUp} color="blue.800" boxSize={5} mr={1} />
              )}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Grid>
            {jobList.map((job) => (
              <ScaleFade key={job.id} initialScale={0.9} in={total}>
                <GridItem my="2">
                  <JobCard
                    onChangeDetailView={() => onChangeDetailView()}
                    jobDetail={job}
                  />
                </GridItem>
              </ScaleFade>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box align="center">
        {total > 0 ? (
          <Pagination
            currentPage={currentPage}
            pagesCount={pagesCount}
            onPageChange={handlePageChange}
          />
        ) : (
          <>No job is found</>
        )}
      </Box>
    </Box>
  );
};

export default JobList;
