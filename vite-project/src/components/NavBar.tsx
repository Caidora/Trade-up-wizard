import NavItem from "./NavItem";
import { css } from "@emotion/react";

function NavBar() {
  return (
    <div
      css={css`
        padding: 32px;
      `}
    >
      <NavItem link="./"> Home</NavItem>
      <NavItem link="./Explore">Explore </NavItem>
      <NavItem link="./Create">Create </NavItem>
    </div>
  );
}

export default NavBar;
