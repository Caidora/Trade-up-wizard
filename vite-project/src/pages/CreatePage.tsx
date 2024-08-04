import NavBar from "../components/NavBar";
import PrimaryButton from "../components/PrimaryButton";
import { useState, useEffect } from "react";
import react from "react";
import SkinGrid from "../components/SkinGrid";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  styled,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  ScopedCssBaseline,
} from "@mui/material/";
import SecondaryButton from "../components/SecondaryButton";

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

const startingSkins = [
  { empty: true, key: 0, skinName: "" },
  { empty: true, key: 1, skinName: "" },
  { empty: true, key: 2, skinName: "" },
  { empty: true, key: 3, skinName: "" },
  { empty: true, key: 4, skinName: "" },
  { empty: true, key: 5, skinName: "" },
  { empty: true, key: 6, skinName: "" },
  { empty: true, key: 7, skinName: "" },
  { empty: true, key: 8, skinName: "" },
  { empty: true, key: 9, skinName: "" },
];

const styledCheckbox = styled(Checkbox)({});

const CreatePage = () => {
  const [statTrak, setStatTrak] = useState("0");
  const [displayError, setDisplayError] = useState(false);
  const [rarity, setRarity] = useState("");
  const [steamTax, setSteamTax] = useState("0");
  const [inProcess, setInProcess] = useState(0);
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  const [borderWidth, setBorderWidth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [skinsSelected, setskinsSelected] = useState(startingSkins);
  if (localStorage.getItem("InProcess") == "1" && inProcess == 0) {
    setInProcess(1);
    let inMemRarity = localStorage.getItem("rarity");
    if (inMemRarity != null) {
      setRarity(inMemRarity);
    }
    let inMemstatTrak = localStorage.getItem("statTrak");
    if (inMemstatTrak != null) {
      setStatTrak(inMemstatTrak);
    }
    let inMemSteamTax = localStorage.getItem("steamTax");
    if (inMemSteamTax != null) {
      setSteamTax(inMemSteamTax);
    }
    let inMemTitle = localStorage.getItem("title");
    if (inMemTitle != null) {
      setTitle(inMemTitle);
    }

    for (let i = 0; i < 10; i++) {
      let currentSkin = localStorage.getItem("skin" + i.toString());
      if (currentSkin != null) {
        updateSkinSelection(i, currentSkin);
        console.log(currentSkin);
      }
    }
  }

  const handleSubmit = () => {
    if (rarity != "" && title != "") {
      setInProcess(1);
      localStorage.setItem("InProcess", "1");
      localStorage.setItem("statTrak", statTrak);
      localStorage.setItem("rarity", rarity);
      localStorage.setItem("steamTax", steamTax);
      localStorage.setItem("title", title);

      for (let i = 0; i < 10; i++) {
        localStorage.setItem(
          "skin" + i.toString(),
          skinsSelected[i]["skinName"]
        );
      }
    } else {
      setBorderWidth(true);
      setErrorMessage("Please fill in rarity and contract title");
    }
  };

  function copySkin(skinName: string) {
    for (var i = 0; i < skinsSelected.length; i++) {
      if (skinsSelected[i].empty == true) {
        updateSkinSelection(i, skinName);
        break;
      }
    }
  }

  const clearDraft = () => {
    localStorage.removeItem("InProcess");
    setInProcess(0);
    localStorage.removeItem("statTrak");
    localStorage.removeItem("rarity");
    localStorage.removeItem("steamTax");
    localStorage.removeItem("title");
    for (let i = 0; i < 10; i++) {
      localStorage.removeItem("skin" + i.toString());
    }

    setskinsSelected(startingSkins);
  };

  function updateSkinSelection(key: number, skinname: string) {
    if (skinname === "") {
      const currentList = [];
      for (var i = 0; i < skinsSelected.length; i++) {
        if (i == key) {
          currentList.push({ empty: true, key: key, skinName: skinname });
          continue;
        }
        currentList.push(skinsSelected[i]);
      }
      setskinsSelected(currentList);
    } else {
      const currentList = [];
      for (var i = 0; i < skinsSelected.length; i++) {
        if (i == key) {
          currentList.push({ empty: false, key: key, skinName: skinname });
          localStorage.setItem("skin" + i.toString(), skinname);

          continue;
        }
        currentList.push(skinsSelected[i]);
      }
      setskinsSelected(currentList);
    }
  }

  async function sendContract() {
    const url = "https://localhost:7236/api/Data/Contract";
    const username = localStorage.getItem("User");
    const Title = localStorage.getItem("title");
    const Rarity = localStorage.getItem("rarity");
    const userPayload = {
      createdBy: username,
      title: Title,
      rarity: Rarity,
      skinName0: skinsSelected[0].skinName,
      skinName1: skinsSelected[1].skinName,
      skinName2: skinsSelected[2].skinName,
      skinName3: skinsSelected[3].skinName,
      skinName4: skinsSelected[4].skinName,
      skinName5: skinsSelected[5].skinName,
      skinName6: skinsSelected[6].skinName,
      skinName7: skinsSelected[7].skinName,
      skinName8: skinsSelected[8].skinName,
      skinName9: skinsSelected[9].skinName,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPayload),
    });
    const json = await response.json();
    console.log(json);
    clearDraft();
    navigate("/explore", { replace: true });
  }

  function attemptContractSubmit() {
    let filledOut = true;
    for (var i = 0; i < skinsSelected.length; i++) {
      if (skinsSelected[i].empty == true) {
        filledOut = false;
      }
    }
    if (filledOut == false) {
      setDisplayError(true);
    } else {
      sendContract();
    }
  }

  function toggleValue(fun: Function, value: string) {
    if (value == "0") {
      fun("1");
    } else {
      fun("0");
    }
  }
  if (!inProcess) {
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
                  error={borderWidth}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Rarity"
                  value={rarity}
                  onChange={(e) => setRarity(e.target.value)}
                  sx={{
                    margin: "0px",
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#afafaf",
                    }}
                    value={"Consumer Grade"}
                  >
                    Consumer
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#6496e1",
                    }}
                    value={"Industrial Grade"}
                  >
                    Industrial
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#4b69cd",
                    }}
                    value={"Mil-Spec Grade"}
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
                color="primary"
              ></Checkbox>
            </ToggleGrouping>
            <Box>
              <TextField
                margin="normal"
                type="title"
                label="title"
                variant="filled"
                error={borderWidth}
                helperText={errorMessage}
                onChange={(e) => setTitle(e.target.value)}
              ></TextField>
            </Box>
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
        <Box display="flex" paddingLeft="2rem" paddingBottom="2rem">
          <PrimaryButton submitFunction={clearDraft}>Clear Draft</PrimaryButton>
        </Box>

        <SkinGrid
          updateSkinSelection={updateSkinSelection}
          copySkin={copySkin}
          skinsSelected={skinsSelected}
          rarity={rarity}
        ></SkinGrid>
        <Box>
          <PrimaryButton
            submitFunction={attemptContractSubmit}
            bColour="secondary.main"
          >
            Save my Contract!
          </PrimaryButton>
          {displayError === true && <p>Please select all 10 skins!</p>}
        </Box>
      </>
    );
  }
};

export default CreatePage;
