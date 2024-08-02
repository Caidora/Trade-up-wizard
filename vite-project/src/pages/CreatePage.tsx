import NavBar from "../components/NavBar";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import {
  Box,
  Typography,
  styled,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material/";
const MyBox = styled(Box)({
  display: "block",
  width: "30rem",
  margin: "auto",
  alignContent: "center",
});

const BigBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "50rem",
  margin: "auto",
  borderRadius: "37px",
  paddingBottom: "5rem ",
});

const ToggleGrouping = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const styledCheckbox = styled(Checkbox)({});

const CreatePage = () => {
  const [statTrak, setStatTrak] = useState("0");
  const [rarity, setRarity] = useState("None");
  const [steamTax, setSteamTax] = useState("0");

  const handleSubmit = () => {
    console.log("submitted");

    localStorage.setItem("InProcess", "1");
    localStorage.setItem("statTrak", statTrak);
    localStorage.setItem("rarity", rarity);
    localStorage.setItem("steamTax", steamTax);
  };

  function toggleValue(fun: Function, value: string) {
    if (value == "0") {
      fun("1");
    } else {
      fun("0");
    }
  }
  if (localStorage.getItem("InProcess") == null) {
    return (
      <div>
        <NavBar></NavBar>
        <BigBox>
          <Typography marginTop="30px" marginBottom="20px" variant="h2">
            Create a Contract!
          </Typography>
          <MyBox>
            <ToggleGrouping paddingTop="3rem">
              <Typography paddingTop="0.6rem">Stat Trak</Typography>
              <Checkbox
                value=""
                onClick={(e) => toggleValue(setStatTrak, statTrak)}
                sx={{
                  color: "white",
                }}
                color="primary"
              ></Checkbox>
            </ToggleGrouping>
            <ToggleGrouping paddingTop="0.2rem">
              <Typography paddingTop="0.6rem">Input item rarity</Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Rarity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Rarity"
                  sx={{
                    color: "white",
                    muiInputLabel: {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#afafaf",
                    }}
                    value={"Consumer"}
                  >
                    Consumer
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#6496e1",
                    }}
                    value={"Industrial"}
                  >
                    Industrial
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#4b69cd",
                    }}
                    value={"Mil-spec"}
                  >
                    Mil-spec
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#8847ff",
                    }}
                    value={"Restricted"}
                  >
                    Restricted
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#d32ce6",
                    }}
                    value={"Classified"}
                  >
                    Classified
                  </MenuItem>
                </Select>
              </FormControl>
            </ToggleGrouping>
            <ToggleGrouping paddingTop="0.2rem" paddingBottom="2rem ">
              <Typography paddingTop="0.6rem">
                Steam tax (profit * 0.85)
              </Typography>
              <Checkbox
                onClick={(e) => toggleValue(setSteamTax, steamTax)}
                sx={{
                  color: "white",
                }}
                color="primary"
              ></Checkbox>
            </ToggleGrouping>
            <PrimaryButton
              submitFunction={handleSubmit}
              padding="1rem"
              bColour="secondary.main"
            >
              Let's Go!
            </PrimaryButton>
          </MyBox>
        </BigBox>
      </div>
    );
  } else {
    return (
      <>
        <NavBar></NavBar>
      </>
    );
  }
};

export default CreatePage;
