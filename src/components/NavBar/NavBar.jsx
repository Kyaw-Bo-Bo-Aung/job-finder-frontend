import {
  Box,
  Flex,
  Spacer,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Select,
  Button,
  HStack,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box backgroundColor="green.100">
      <Container py="3" maxW="container.xl">
        <Grid
          h={`calc(100vh - 82px)`}
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          <GridItem
            alignSelf="center"
            justifySelf="center"
            colSpan={{ base: 2, md: 1 }}
          >
            <Text
              as="b"
              fontSize={{ base: "4xl", md: "6xl" }}
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
                <Select placeholder="Select category" size="lg">
                  <option value="IT">IT</option>
                  <option value="Engineering">Engineering</option>
                </Select>
                <Button size="lg">Find Now</Button>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            alignSelf="center"
            justifySelf="center"
            colSpan={{ base: 2, md: 1 }}
          >
            <Box>
              <Image src="/images/hero-img.png" alt="job-hunt bro" />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default NavBar;
