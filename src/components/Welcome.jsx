import {
  Box,
  Flex,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Select,
  Button,
} from "@chakra-ui/react";
import { categories } from "../constant";
import { useContext } from "react";
import { FilterContext } from "../context/FilterProvider";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { handleCategory } = useContext(FilterContext);
  const navigate = useNavigate();

  const handleFindJob = (e) => {
    handleCategory([e.target.value]);
  }

  return (
    <Box>
      <Container py="3" maxW="container.xl">
        <Grid h={`calc(100vh - 82px)`} templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            alignSelf="center"
            justifySelf="center"
            colSpan={{ base: 2, md: 1 }}
          >
            <Text
              as="b"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight="shorter"
            >
              Your Fast Track to Employment!
            </Text>
            <Text my="5">
              Premier destination for finding your next career move. Discover
              Exciting Job Opportunities from Top Companies. Gain access to a
              diverse array of job opportunities from leading companies,
              tailored to match your skills and aspirations. Search, Apply, and
              Get Hired Faster with us!.
            </Text>
            <Box>
              <Flex gap="5">
                <Select onChange={(e) => handleFindJob(e)}  placeholder="Select category" size="lg">
                  {categories.map(cat => 
                  <option key={cat} value={cat}>{cat}</option>
                  )}
                </Select>
                <Button onClick={() => navigate("/jobs")} size="lg" colorScheme="blue">
                  Find Now
                </Button>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            alignSelf="center"
            justifySelf="center"
            colSpan={{ base: 2, md: 1 }}
          >
            <Box>
              <Image
                boxSize={{ base: "sm", md: "md", lg: "xl" }}
                objectFit="cover"
                src="assets/images/hero-img.png"
                alt="job-hunt bro"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Welcome;
