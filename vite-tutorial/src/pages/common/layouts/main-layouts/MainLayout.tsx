import type { ReactElement } from "react";
import { styled } from "@mui/system";

const StyledContainer = styled("div")({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "black",
});

export const MainLayout = (): ReactElement => {
  return <StyledContainer>hello</StyledContainer>;
};

export default MainLayout;
