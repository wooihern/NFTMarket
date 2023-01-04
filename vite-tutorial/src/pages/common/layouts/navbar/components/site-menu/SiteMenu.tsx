import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { ReactElement } from "react";

const navItems = ["Marketplace", "Rankings", "Connect a wallet"];

export const SiteMenu = (): ReactElement => (
  <>
    <Box
      sx={{
        display: "flex",
        borderRadius: 1,
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item}
          sx={{
            color: "#fff",
            fontSize: "16px",
            pl: 2.5,
            pr: 2.5,
            pt: 1.5,
            pb: 1.5,
            mr: 1.25,
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  </>
);

export default SiteMenu;
