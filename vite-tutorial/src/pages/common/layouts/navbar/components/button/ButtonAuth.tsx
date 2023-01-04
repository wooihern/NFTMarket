import Button from "@mui/material/Button";
import type { ReactElement } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const signup = ["Sign Up"];
export const ButtonAuth = (): ReactElement => (
  <>
    <Button
      sx={{
        background: "#A259FF",
        color: "#fff",
        borderRadius: "20px",
        width: "152px",
        height: "60px",
        fontSize: "16px",
      }}
      startIcon={<PersonOutlineIcon />}
    >
      Sign Up
    </Button>
  </>
);

export default ButtonAuth;
