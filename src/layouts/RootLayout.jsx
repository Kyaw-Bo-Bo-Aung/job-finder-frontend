import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function RootLayout() {
  return (
    <Box>
      <NavigationBar />
      <Outlet />
    </Box>
  );
}
