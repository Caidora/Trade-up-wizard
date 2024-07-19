import NavItem from "./NavItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "50px",
});

function NavBar() {
  return (
    <MyBox>
      <NavItem link="./"> Home</NavItem>
      <Box>
        <NavItem link="./Explore">Explore</NavItem>
        <NavItem spacing="50px" link="./Create">
          Create
        </NavItem>
      </Box>
    </MyBox>
  );
}

export default NavBar;
