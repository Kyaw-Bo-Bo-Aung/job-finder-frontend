import FilterGroup from "../FilterGroup/FilterGroup";

const FilterSideBar = () => {
  return (
    <>
      <FilterGroup title="Category" fields={["IT", "Engineering"]} />
      <FilterGroup title="Experience Level" fields={["Intern", "Junior level", "Senior level", "Manager", "Expert"]} />
    </>
  );
};

export default FilterSideBar;
