import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { MouseEventHandler } from "react";

interface Props {
  children: string;
  link?: string;
  spacing?: string;
  Padding?: string;
  onPress?: MouseEventHandler;
}

const MyButton = styled(Button)({
  fontSize: "20px",
  padding: "15px",
});

function NavItem({ children, link, spacing, Padding, onPress }: Props) {
  return (
    <MyButton
      sx={{ marginLeft: spacing, padding: Padding }}
      disableRipple
      href={link}
      onClick={onPress}
    >
      {children}
    </MyButton>
  );
}

export default NavItem;
