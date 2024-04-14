import {
  Box,
  Text,
  Flex,
  Spacer,
  IconButton,
  Button,
  HStack,
  Divider,
  Badge,
  Icon,
  Image,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import {
  BiBookmark,
  BiCheck,
  BiSolidBookmark,
  BiSolidMap,
  BiTimeFive,
} from "react-icons/bi";
import { JobContext } from "../context/JobProvider";
import moment from "moment";
import { badgeColors } from "../constant";

const JobDetailCard = () => {
  const [favourite, setFavourite] = useState(false);
  const { currentJob } = useContext(JobContext);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  if (!currentJob) {
    return (
      <Box
        p="5"
        align="center"
        h={`calc(100vh - 300px)`}
        backgroundColor="gray.100"
      >
        <Box>
          <Image
            src="/assets/images/job-detail.png"
            boxSize="200px"
            objectFit="cover"
            alt="files and documents"
          />
        </Box>
        <Text fontSize={{ base: "lg", lg: "xl" }}>
          Select a job to view details
        </Text>
      </Box>
    );
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Flex>
          <Box lineHeight="tight">
            <Box mb="3">
              <Text as="b" fontSize="27">
                {currentJob.name}
              </Text>
              <Text fontSize="18" color="gray.500">
                {currentJob.company.name}
              </Text>
            </Box>
            <Flex my="1" align="center">
              <Icon as={BiCheck} color="blue.800" boxSize={5} mr={1} />{" "}
              <Flex wrap="wrap" flex="1">
                {currentJob.levels.map((levels, index, array) => (
                  <Text key={index} mx="2" fontSize="sm" color="gray.500">
                    {levels.name}{" "}
                    {index < array.length - 1 && (
                      <Text as="span" ml="2">
                        |
                      </Text>
                    )}
                  </Text>
                ))}
              </Flex>
            </Flex>
            <Flex my="1" wrap="wrap">
              <Icon as={BiSolidMap} color="blue.800" boxSize={5} mr={1} />{" "}
              <Flex wrap="wrap" flex="1">
                {currentJob.locations.map((location, index, array) => (
                  <Text key={index} mx="2" fontSize="sm" color="gray.500">
                    {location.name}{" "}
                    {index < array.length - 1 && (
                      <Text as="span" ml="2">
                        |
                      </Text>
                    )}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex align="center">
          <Icon as={BiTimeFive} color="blue.800" boxSize={5} mr={1} />{" "}
          <Text mx="2" fontSize="sm" color="gray.500">
            {moment(currentJob.publication_date).format("Do MMMM YYYY")}
          </Text>
        </Flex>
        <Box py="5">
          <HStack wrap="wrap">
            {currentJob.categories.map((category, index) => (
              <Badge
                key={index}
                colorScheme={badgeColors[index % badgeColors.length]}
              >
                {category.name}
              </Badge>
            ))}
          </HStack>
        </Box>
        <Flex gap="3" align="center">
          <Button colorScheme="blue">Quick Apply</Button>
          <IconButton
            my="3"
            variant="ghost"
            onClick={() => handleFavourite()}
            fontSize="23px"
            colorScheme="gray"
            aria-label="Save Job"
            icon={favourite ? <BiSolidBookmark /> : <BiBookmark />}
          />
        </Flex>
        <Divider my="5" />
        <Box
          dangerouslySetInnerHTML={{
            __html: currentJob.contents.replace(/\n/g, "<br>"),
          }}
        ></Box>
        <Divider my="10" />
        <Flex gap="5">
          <Box>
            <Flex gap="5">
              <Box>
                Company:
                <Text fontSize="20">{currentJob.company.name}</Text>
              </Box>
            </Flex>
          </Box>
          <Spacer />
          <Button colorScheme="blue">Visit Website</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailCard;
