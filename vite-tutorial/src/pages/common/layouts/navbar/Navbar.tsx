import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import StorefrontIcon from "@mui/icons-material/Storefront";

const navItems = ["Marketplace", "Rankings", "Connect a wallet"];
const signup = ["Sign Up"];
export const Navbar = (): ReactElement => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar
            sx={{ bgcolor: "#2B2B2B", pl: 6.25, pr: 6.25, height: "100px" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <StorefrontIcon sx={{ mr: 1.5, color: "#A259FF" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              NFT Marketplace
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Button
              sx={{
                background: "#A259FF",
                color: "#fff",
                borderRadius: "20px",
                width: "152px",
                height: "60px",
              }}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
