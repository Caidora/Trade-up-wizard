import NavBar from "../components/NavBar";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import react from "react";
import SkinBox from "../components/SkinBox";
import Grid from "@mui/material/Grid";
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
  const [rarity, setRarity] = useState("");
  const [steamTax, setSteamTax] = useState("0");
  const [inProcess, setInProcess] = useState(0);

  const [skinsSelected, setskinsSelected] = useState([
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
  ]);
  if (localStorage.getItem("InProcess") == "1" && inProcess == 0) {
    setInProcess(1);
  }

  const handleSubmit = () => {
    console.log("submitted");
    setInProcess(1);
    localStorage.setItem("InProcess", "1");
    localStorage.setItem("statTrak", statTrak);
    localStorage.setItem("rarity", rarity);
    localStorage.setItem("steamTax", steamTax);
  };

  const clearDraft = () => {
    localStorage.removeItem("InProcess");
    setInProcess(0);
    localStorage.removeItem("statTrak");
    localStorage.removeItem("rarity");
    localStorage.removeItem("steamTax");
  };

  function updateSkinSelection(key: number, skinname: string) {
    if (skinname === "") {
      return;
    }

    const currentList = [];
    for (var i = 0; i < skinsSelected.length; i++) {
      if (i == key) {
        currentList.push({ empty: false, key: key, skinName: skinname });
        continue;
      }
      currentList.push(skinsSelected[i]);
    }
    setskinsSelected(currentList);
    console.log(skinsSelected);
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
                  value={rarity}
                  onChange={(e) => setRarity(e.target.value)}
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
        <Box display="flex" marginLeft="2rem">
          <Grid
            container
            rowSpacing={4}
            justifyContent="center"
            width="75%"
            marginBottom="3rem"
          >
            {skinsSelected.map((value, index) => (
              <Grid xs={2.4} item key={index}>
                <SkinBox
                  skin={value}
                  updateSkinList={updateSkinSelection}
                  key={value.key}
                  skinList={top100Films}
                ></SkinBox>
              </Grid>
            ))}
          </Grid>
        </Box>

        <PrimaryButton submitFunction={clearDraft}>Clear Draft</PrimaryButton>
      </>
    );
  }
};

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

export default CreatePage;
