import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  children: string;
  bColour?: string;
  link?: string;
}
const StyledButton = styled(Button)({
  borderRadius: "50px",
  bgcolor: "white",
  borderWidth: "2px",
  ":hover": {
    borderWidth: "2px",
  },
});

export default function SecondaryButton({ children, bColour, link }: Props) {
  return (
    <StyledButton
      disableRipple
      href={link}
      sx={{ bgcolor: "white", borderColor: bColour }}
      variant="outlined"
    >
      {children}
    </StyledButton>
  );
}
