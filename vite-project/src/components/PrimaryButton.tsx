import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface Props {
  children: string;
  bColour?: string;
  link?: string;
}
const StyledButton = styled(Button)({
  borderRadius: "50px",
});

export default function PrimaryButton({ children, bColour, link }: Props) {
  return (
    <StyledButton
      href={link}
      disableRipple
      sx={{ bgcolor: bColour }}
      variant="contained"
    >
      {children}
    </StyledButton>
  );
}
