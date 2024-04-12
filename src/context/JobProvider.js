import React, { useState } from "react";

export const JobContext = React.createContext();

const JobProvider = (props) => {
  const [currentJob, setCurrentJob] = useState(null);
  
  const handleCurrentJob = job => {
    setCurrentJob(job);
  }

  return <JobContext.Provider value={{ currentJob, handleCurrentJob }}>{props.children}</JobContext.Provider>;
};

export default JobProvider;
