import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  backgroundColor: "#D9D9D9",
  borderRadius: "37px",
});

interface Props {
  title: string;
  priButton: string;
  secButton?: string;
  submitFunction: Function;
  setUser: Function;
  setPassword: Function;
}

export default function ActionBox({
  title,
  priButton,
  secButton,
  submitFunction,
  setUser,
  setPassword,
}: Props) {
  return (
    <MyBox>
      <Typography
        marginTop="30px"
        marginBottom="20px"
        color="#121212"
        variant="h2"
      >
        {title}
      </Typography>
      <Box>
        <TextField
          margin="normal"
          label="Username"
          variant="filled"
          onChange={(e) => setUser(e.target.value)}
        ></TextField>
      </Box>
      <Box>
        <TextField
          margin="normal"
          type="password"
          label="Password"
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </Box>
      <Box marginTop="30px" marginBottom="30px">
        <PrimaryButton
          left="45px"
          padding="35px"
          bColour="secondary.main"
          submitFunction={submitFunction}
        >
          {priButton}
        </PrimaryButton>
      </Box>
    </MyBox>
  );
}
