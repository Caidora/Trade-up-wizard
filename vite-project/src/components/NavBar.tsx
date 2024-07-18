import NavItem from "./NavItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "200px",
});

function NavBar() {
  return (
    <MyBox>
      <NavItem link="./"> Home</NavItem>
      <NavItem link="./Explore">Explore</NavItem>
      <NavItem link="./Create">Create </NavItem>
    </MyBox>
  );
}

export default NavBar;
