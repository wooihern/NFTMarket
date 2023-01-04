import type { ReactElement } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";

export const Title = (): ReactElement => (
  <>
    <StorefrontIcon sx={{ mr: 1.5, color: "#A259FF" }} />
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    >
      NFT Marketplace
    </Typography>
  </>
);

export default Title;
