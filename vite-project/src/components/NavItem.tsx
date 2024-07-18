import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface Props {
  children: string;
  link: string;
}

const MyButton = styled(Button)({
  fontSize: "20px",
  padding: "15px",
});

function NavItem({ children, link }: Props) {
  return (
    <MyButton disableRipple href={link}>
      {children}
    </MyButton>
  );
}

export default NavItem;
