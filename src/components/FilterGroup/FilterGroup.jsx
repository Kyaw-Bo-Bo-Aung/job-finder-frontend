import { Box, Text, Stack, Checkbox } from "@chakra-ui/react";

const FilterGroup = ({ title, fields }) => {
  return (
    <Box p="4">
      <Text fontWeight="bold" as="h4" mb="3">
        {title} :{" "}
      </Text>
      <Box>
        <Stack>
          {fields.map((field) => 
            <Checkbox key={field}>
              <Text color="gray.600" fontSize="sm">
                {field}
              </Text>
            </Checkbox>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default FilterGroup;
