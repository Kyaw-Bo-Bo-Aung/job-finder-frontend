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
  Badge,
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FilterContext } from "../context/FilterProvider";
import { categories, experienceLevel } from "../constant";

const Filter = () => {
  const {
    level,
    category,
    handleLevel,
    handleCategory,
  } = useContext(FilterContext);

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
              <Box>{level.length > 0 && <Badge colorScheme="blue" mr="2">{level.length}</Badge>} Experience Level</Box> <Spacer /> <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuOptionGroup type="checkbox" value={level}>
              {experienceLevel.map((level) => (
                <MenuItemOption
                  isChecked={true}
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
              <Box>{category.length > 0 && <Badge colorScheme="blue" mr="2">{category.length}</Badge>}Category</Box> <Spacer /> <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList minWidth="240px">
          <MenuOptionGroup type="checkbox" value={category}>
              {categories.map((category) => (
                <MenuItemOption
                  isChecked={true}
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
        <Box boxSizing="content" alignSelf="center">
          <Button colorScheme="blue" onClick={() => clearFilter()}>Clear filter</Button>
        </Box>
      </Stack>
    </>
  );
};

export default Filter;
