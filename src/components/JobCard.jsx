import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  Stack,
  Icon,
} from "@chakra-ui/react";
import {
  BiSolidMap,
  BiTimeFive,
} from "react-icons/bi";
import moment from "moment";
import { useContext } from "react";
import { JobContext } from "../context/JobProvider";

const badgeColors = ["red", "blue", "green", "purple", "yellow"];

const JobCard = ({ jobDetail, onChangeDetailView }) => {
  const { currentJob, handleCurrentJob } = useContext(JobContext);
  const { id, name, company, locations, categories, publication_date } =
    jobDetail;

  const onDetail = (job) => {
    handleCurrentJob(job);
    onChangeDetailView();
  };

  const onSave = (e) => {
    e.stopPropagation();
  };

  return (
    <Card
      onClick={() => onDetail(jobDetail)}
      className={`card ${currentJob && currentJob.id === id ? "active" : ""}`}
      borderLeft="4px"
      borderColor="gray.500"
      backgroundColor="gray.100"
    >
      <CardHeader mb="0" pb="0">
        <Box>
          <Heading
            className="card-title"
            cursor="pointer"
            size={{ base: "10px", lg: "md" }}
          >
            {name}
          </Heading>
          <Text fontSize={{ base: "xs", lg: "sm" }} color="gray.500">
            {company.name}
          </Text>
        </Box>
        <Stack direction="row" mt="2" flexWrap="wrap">
          {categories.map((category, index) => {
            return (
              <Badge
                key={index}
                colorScheme={badgeColors[index % badgeColors.length]}
              >
                {category.name}
              </Badge>
            );
          })}
        </Stack>
      </CardHeader>
      <CardFooter pt="3" justify="space-between">
        <Flex align="center">
          <Icon as={BiSolidMap} color="blue.800" boxSize={5} mr={1} />{" "}
          {locations.length > 1 ? (
            <Text fontSize={{ base: "xs", lg: "sm" }} color="gray.500">
              {`${locations[0].name} + ${locations.length - 1} others`}
            </Text>
          ) : (
            locations.map((location, index, array) => (
              <Text
                key={index}
                fontSize={{ base: "xs", lg: "sm" }}
                color="gray.500"
              >
                {location.name}
                {index < array.length - 1 && (
                  <Text as="span" mx="2">
                    - 
                  </Text>
                )}
              </Text>
            ))
          )}
        </Flex>
        <Flex align="center">
          <Icon as={BiTimeFive} color="gray.500" boxSize={5} mr={1} />{" "}
          <Text fontSize={{ base: "xs", lg: "sm" }} color="gray.500">
            {moment(publication_date).fromNow()}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
