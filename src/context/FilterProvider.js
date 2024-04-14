import React, { useState } from "react";

export const FilterContext = React.createContext();

const FilterProvider = (props) => {
  const [level, setLevel] = useState([]);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState(null);
  const [company, setCompany] = useState(null);
  const [ descending, setDescending ] = useState(false);

  const handleLevel = (level) => {
    setLevel(level);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  const handleCompany = (company) => {
    setCompany(company);
  };

  const handleDescending = (descending) => {
    setDescending(descending);
  };

  return (
    <FilterContext.Provider
      value={{
        level,
        category,
        location,
        company,
        descending,
        handleLevel,
        handleCategory,
        handleLocation,
        handleCompany,
        handleDescending
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
