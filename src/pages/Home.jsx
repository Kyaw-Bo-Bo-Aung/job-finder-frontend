import { useContext, useEffect } from "react";
import Welcome from "../components/Welcome";
import useFetchData from "../hooks/useFetchData";
import { FilterContext } from "../context/FilterProvider";

const Home = () => {
  return <Welcome />;
};

export default Home;
