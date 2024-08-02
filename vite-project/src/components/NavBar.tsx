import NavItem from "./NavItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MouseEventHandler } from "react";
const NavBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "50px",
  padding: "1rem",
  backgroundColor: "#202020",
});
const TopRightBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

interface Props {
  loggedIn?: boolean;
  username?: string;
  onPress?: MouseEventHandler;
}

function NavBar({ loggedIn, username, onPress }: Props) {
  return (
    <NavBox>
      <NavItem link="./"> Home</NavItem>
      <TopRightBox>
        <NavItem link="./Explore">Explore</NavItem>
        <NavItem link="./Create">Create</NavItem>
        {loggedIn == true && (
          <Box display="block">
            <Typography>Welcome {username}</Typography>
            <NavItem Padding="0px" spacing="0px" onPress={onPress}>
              Log Out?
            </NavItem>
          </Box>
        )}
      </TopRightBox>
    </NavBox>
  );
}

export default NavBar;
