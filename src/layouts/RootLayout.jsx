import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}
