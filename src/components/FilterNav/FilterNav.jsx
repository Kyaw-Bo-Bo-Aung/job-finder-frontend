import {
  Flex,
  MenuButton,
  Menu,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Button,
  Stack,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FilterContext } from "../../context/FilterProvider";

const FilterNav = () => {
  const {
    level,
    category,
    location,
    handleLevel,
    handleCategory,
    handleLocation,
  } = useContext(FilterContext);

  const experienceLevel = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Internship",
    "Management",
  ];
  const categoryList = ["IT", "Engineering"];

  const handleExpLevel = (lvl) => {
    if (level.includes(lvl))
      handleLevel(level.filter((l) => l !== lvl));
    else handleLevel([...level, lvl]);
  };

  const handleJobCategory = (cat) => {
    if (category.includes(cat))
      handleCategory(category.filter((c) => c !== cat));
    else handleCategory([...category, cat]);
  };

  const clearFilter = () => {
    handleCategory([]);
    handleLevel([]);
    // handle([]);
  }

  return (
    <>
      <Stack direction={["column", "row"]}>
        <Menu closeOnSelect={false}>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            colorscheme="blue"
          >
            <Flex align="center">
              <Box>Experience Level</Box> <Spacer /> <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuOptionGroup type="checkbox">
              {experienceLevel.map((level) => (
                <MenuItemOption
                  onClick={() => handleExpLevel(level)}
                  key={level}
                  value={level}
                >
                  {level}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            colorscheme="blue"
          >
            <Flex align="center">
              <Box>Category</Box> <Spacer /> <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup type="checkbox">
              {categoryList.map((category) => (
                <MenuItemOption
                  onClick={() => handleJobCategory(category)}
                  key={category}
                  value={category}
                >
                  {category}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu closeOnSelect={false}>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            colorscheme="blue"
          >
            <Flex align="center">
              <Box>Company</Box> <Spacer /> <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList height="600px" minWidth="240px" overflow="auto">
            <MenuOptionGroup h="100" type="checkbox">
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((category) => (
                <MenuItemOption key={category} value={category}>{category}</MenuItemOption>
              ))} */}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Box boxSizing="content">
          <Button onClick={() => clearFilter()}>Clear filter</Button>
        </Box>
      </Stack>
    </>
  );
};

export default FilterNav;
