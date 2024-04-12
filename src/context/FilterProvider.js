import React, { useState } from "react";

export const FilterContext = React.createContext();

const FilterProvider = (props) => {
  const [level, setLevel] = useState([]);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);

  const handleLevel = (level) => {
    setLevel(level);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  return (
    <FilterContext.Provider value={{ level, category, location, handleLevel, handleCategory, handleLocation }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
