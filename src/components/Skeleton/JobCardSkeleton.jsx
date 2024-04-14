import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Box,
  Heading,
  Stack,
  Skeleton
} from "@chakra-ui/react";

const JobCardSkeleton = () => {
  return (
    <Card
      mb="2"
      backgroundColor="gray.100"
    >
      <CardHeader mb="0" pb="0">
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading className="card-title" cursor="pointer" mb="2">
                <Skeleton height="20px" width="40" />
              </Heading>
              <Box fontSize="sm" color="gray.500">
                <Skeleton height="15px" width="20" />
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Stack direction="row" mt="2" flexWrap="wrap">
          <Skeleton height="15px" width="40" />
        </Stack>
      </CardHeader>
      <CardFooter pt="3" justify="space-between">
        <Flex align="center">
          <Skeleton height="20px" width={{base:"60px", md:"40px"}} />
        </Flex>
        <Flex align="center">
          <Skeleton height="20px" width={{base:"40px", md:"40px"}} />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default JobCardSkeleton;
