import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

interface Props {
  children: string;
  bColour?: string;
  link?: string;
  submitFunction?: any;
  left?: string;
  padding?: string;
}
const StyledButton = styled(Button)({
  borderRadius: "50px",
});

export default function PrimaryButton({
  children,
  bColour,
  link,
  submitFunction,
  left,
  padding,
}: Props) {
  return (
    <StyledButton
      href={link}
      disableRipple
      sx={{
        bgcolor: bColour,
        left: left,
        paddingLeft: padding,
        paddingRight: padding,
      }}
      variant="contained"
      onClick={submitFunction}
    >
      {children}
    </StyledButton>
  );
}
