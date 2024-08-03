import NavItem from "./NavItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MouseEventHandler } from "react";

import { useNavigate } from "react-router-dom";
const NavBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
});
const TopRightBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

function NavBar() {
  let navigate = useNavigate();
  const userName = localStorage.getItem("User");
  var loggedIn = false;
  if (userName != null) {
    loggedIn = true;
  }
  const handleClick = () => {
    localStorage.removeItem("User");
    navigate("/", { replace: true });
  };
  return (
    <NavBox>
      <NavItem link="./"> Home</NavItem>
      <TopRightBox>
        <NavItem link="./Explore">Explore</NavItem>
        <NavItem link="./Create">Create</NavItem>
        {loggedIn == true && (
          <Box display="block">
            <Typography>Welcome {userName}</Typography>
            <NavItem Padding="0px" spacing="0px" onPress={handleClick}>
              Log Out?
            </NavItem>
          </Box>
        )}
      </TopRightBox>
    </NavBox>
  );
}

export default NavBar;
