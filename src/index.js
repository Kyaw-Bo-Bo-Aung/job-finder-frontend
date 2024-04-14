import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "typeface-roboto";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import JobContext from "./context/JobProvider";
import JobProvider from "./context/JobProvider";
import FilterProvider from "./context/FilterProvider";

const fonts = {
  body: "Roboto, sans-serif, Courier New",
  heading: "Roboto, sans-serif, Courier New",
  colors: {
    brand: {
      100: "#92E3A9",
      200: "#4d7a5a",
    },
  },
};
const theme = extendTheme({ fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <JobProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </JobProvider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
