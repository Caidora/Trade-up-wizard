import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const MyBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "50%",
  marginLeft: "25%",
  backgroundColor: "#121212",
  borderRadius: "37px",
});

interface Props {
  title: string;
  priButton: string;
  secButton?: string;
  submitFunction: Function;
  setUser: Function;
  setPassword: Function;
  borderWidth?: boolean;
  errorMessage?: string;
  open?: boolean;
}

export default function ActionBox({
  title,
  priButton,
  secButton,
  submitFunction,
  setUser,
  setPassword,
  borderWidth,
  errorMessage,
}: Props) {
  return (
    <MyBox>
      <Typography marginTop="0.5rem" marginBottom="20px" variant="h2">
        {title}
      </Typography>
      <Box>
        <TextField
          error={borderWidth}
          margin="normal"
          label="Username"
          variant="filled"
          onChange={(e) => setUser(e.target.value)}
        ></TextField>
      </Box>
      <Box>
        <TextField
          error={borderWidth}
          margin="normal"
          type="password"
          label="Password"
          variant="filled"
          helperText={errorMessage}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </Box>

      <Box marginTop="30px" marginBottom="30px">
        <PrimaryButton bColour="secondary.main" submitFunction={submitFunction}>
          {priButton}
        </PrimaryButton>
      </Box>
    </MyBox>
  );
}
