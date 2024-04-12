import { Grid, GridItem } from "@chakra-ui/react";
import JobCard from "./../JobCard/JobCard";

const JobListGrid = () => {
  return (
    <Grid gap="4" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
        <JobCard
          title="job title"
          company="company"
          location="Dubai, UAE"
          categories={["IT", "Engineering"]}
          description="abjfldsjafoiewfljsdalfjewlifjslafjsd fjoiwefsd.f wel fsld faf eow fa.."
          publication_date={new Date()}
        />
      </GridItem>
      {/* <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
        <JobCard />
      </GridItem>
      <GridItem colSpan={{ base: 6, md: 3, lg: 2 }}>
        <JobCard />
      </GridItem> */}
    </Grid>
  );
};

export default JobListGrid;
