import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Badge,
  Stack,
  Icon,} from "@chakra-ui/react";
import {
  BiBookmark,
  BiSolidBookmark,
  BiSolidMap,
  BiTimeFive,
} from "react-icons/bi";
import "./JobCard.css";
import moment from "moment";
import { useContext } from "react";
import { JobContext } from "../../context/JobProvider";

const JobCard = ({ jobDetail }) => {
  const { currentJob, handleCurrentJob } = useContext(JobContext);
  const { id, name, company, locations, categories, publication_date } = jobDetail;

  const onDetail = (job) => {
    handleCurrentJob(job);
  };

  const onSave = (e) => {
    e.stopPropagation();
    console.log("Job is saved!!");
  };

  const badegColors = ["red", "blue", "green", "purple", "yellow"];
  return (
    <Card
      onClick={() => onDetail(jobDetail)}
      className={`card ${currentJob && currentJob.id === id ? 'active' : ''}`}
      borderLeft="4px"
      borderColor="gray.500"
      backgroundColor="gray.100"
    >
      <CardHeader mb="0" pb="0">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading className="card-title" cursor="pointer" size="md">
                {name}
              </Heading>
              <Text fontSize="sm" color="gray.500">
                {company.name}
              </Text>
            </Box>
          </Flex>
          <IconButton
            onClick={onSave}
            variant="ghost"
            fontSize="23px"
            colorScheme="gray"
            aria-label="See menu"
            icon={false ? <BiBookmark /> : <BiSolidBookmark />}
          />
        </Flex>
        <Stack direction="row" mt="2" flexWrap="wrap">
          {categories.map((category, index) => {
            return (
              <Badge key={index} colorScheme={badegColors[index]}>
                {category.name}
              </Badge>
            );
          })}
        </Stack>
      </CardHeader>
      <CardFooter pt="3" justify="space-between">
        <Flex align="center">
          <Icon as={BiSolidMap} color="blue.800" boxSize={5} mr={1} />{" "}
          {locations.length > 2 ? (
            <Text fontSize="sm" color="gray.500">
              {`${locations[0].name} + ${locations.length - 1} others`}
            </Text>
          ) : (
            locations.map((location, index) => (
              <Text key={index} fontSize="sm" color="gray.500">
                {location.name}
              </Text>
            ))
          )}
        </Flex>
        <Flex align="center">
          <Icon as={BiTimeFive} color="gray.500" boxSize={5} mr={1} />{" "}
          <Text fontSize="sm" color="gray.500">
            {moment(publication_date).fromNow()}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
