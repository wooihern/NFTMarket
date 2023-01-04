import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Title, SiteMenu, ButtonAuth } from "./components";

export const Navbar = (): ReactElement => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar
            sx={{ bgcolor: "#2B2B2B", pl: 6.25, pr: 6.25, height: "100px" }}
          >
            <Title />
            <SiteMenu />
            <ButtonAuth />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
