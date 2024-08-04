import NavItem from "./NavItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
const clearDraft = () => {
  localStorage.removeItem("InProcess");
  localStorage.removeItem("statTrak");
  localStorage.removeItem("rarity");
  localStorage.removeItem("steamTax");
  localStorage.removeItem("title");
  for (let i = 0; i < 10; i++) {
    localStorage.removeItem("skin" + i.toString());
  }
};

function NavBar() {
  let navigate = useNavigate();
  const userName = localStorage.getItem("User");
  var loggedIn = false;
  if (userName != null) {
    loggedIn = true;
  }
  const handleClick = () => {
    localStorage.removeItem("User");
    clearDraft();
    navigate("/");
    location.reload();
  };
  return (
    <NavBox>
      <NavItem link="./"> Home</NavItem>
      {loggedIn == true && (
        <TopRightBox>
          <NavItem link="./Explore">Explore</NavItem>
          <NavItem link="./Create">Create</NavItem>

          <Box display="block">
            <Typography>Welcome {userName}</Typography>
            <NavItem Padding="0px" spacing="0px" onPress={handleClick}>
              Log Out?
            </NavItem>
          </Box>
        </TopRightBox>
      )}
      {loggedIn == false && (
        <TopRightBox>
          <NavItem link="./Explore">Explore</NavItem>
          <NavItem disabled={true} link="./Create">
            Create
          </NavItem>
        </TopRightBox>
      )}
    </NavBox>
  );
}

export default NavBar;
