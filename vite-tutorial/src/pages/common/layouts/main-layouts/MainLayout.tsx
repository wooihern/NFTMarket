import type { ReactElement } from "react";
import { styled } from "@mui/system";
import { Navbar } from "../navbar";

const StyledContainer = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "black",
});

export const MainLayout = (): ReactElement => {
  return (
    <StyledContainer>
      <Navbar></Navbar>
    </StyledContainer>
  );
};

export default MainLayout;
