import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";
import SkinBoxShell from "./SkinBoxShell";
import { useState, useEffect } from "react";

interface Props {
  skinsSelected: {
    empty: boolean;
    key: number;
    skinName: string;
  }[];
  updateSkinSelection?: Function;
  rarity: string;
  copySkin?: Function;
  shareScreen?: boolean;
}
const MyBox = styled(Box)({
  backgroundColor: "grey",
});
const MyBoxCont = styled(Box)({
  marginTop: "5rem",
  display: "flex",
  justifyContent: "space-around",
});

const rarityColours = [
  ["Consumer Grade", "#afafaf"],
  ["Industrial Grade", "#6496e1"],
  ["Mil-Spec Grade", "#4b69cd"],
  ["Restricted", "#8847ff"],
  ["Classified", "#d32ce6"],
];

export default function SkinGrid({
  skinsSelected,
  updateSkinSelection,
  rarity,
  copySkin,
  shareScreen,
}: Props) {
  var rarityColour = "Restricted";

  for (let i = 0; i < rarityColours.length; i++) {
    if (rarityColours[i][0] == rarity) {
      rarityColour = rarityColours[i][1];
    }
  }
  const [skins, setSkins] = useState([]);
  console.log("rendering");
  const url = "https://localhost:7236/api/Data/skinNames/" + rarity;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkins(data);
      });
  }, []);

  if (shareScreen == undefined) {
    return (
      <Box display="flex" justifyContent="flex-start">
        <Box width="100%">
          <Grid container rowSpacing={4}>
            {skinsSelected.map((value, index) => (
              <Grid xs={2.4} item key={index}>
                <SkinBoxShell
                  skin={value}
                  updateSkinList={updateSkinSelection}
                  copySkin={copySkin}
                  key={value.key}
                  skinList={skins}
                  selectedRarityColour={rarityColour}
                ></SkinBoxShell>
              </Grid>
            ))}
          </Grid>
        </Box>
        <MyBox display="block" width="25%">
          <Typography marginTop="2rem">Trade up stats</Typography>
          <MyBoxCont>
            <Typography>Price</Typography>
            <Typography>$53.99</Typography>
          </MyBoxCont>
          <MyBoxCont>
            <Typography>Average Return</Typography>
            <Typography>$59</Typography>
          </MyBoxCont>
          <MyBoxCont>
            <Typography>Estimated Value (EV)</Typography>
            <Typography>110%</Typography>
          </MyBoxCont>
        </MyBox>
      </Box>
    );
  } else {
    return (
      <Box display="flex" justifyContent="flex-start">
        <Box width="100%">
          <Grid container rowSpacing={4}>
            {skinsSelected.map((value, index) => (
              <Grid xs={2.4} item key={index}>
                <SkinBoxShell
                  skin={value}
                  updateSkinList={updateSkinSelection}
                  copySkin={copySkin}
                  key={value.key}
                  skinList={skins}
                  selectedRarityColour={rarityColour}
                ></SkinBoxShell>
              </Grid>
            ))}
          </Grid>
        </Box>
        <MyBox display="block" width="25%">
          <Typography marginTop="2rem">Trade up stats</Typography>
          <MyBoxCont>
            <Typography>Price</Typography>
            <Typography>$53.99</Typography>
          </MyBoxCont>
          <MyBoxCont>
            <Typography>Average Return</Typography>
            <Typography>$59</Typography>
          </MyBoxCont>
          <MyBoxCont>
            <Typography>Estimated Value (EV)</Typography>
            <Typography>110%</Typography>
          </MyBoxCont>
        </MyBox>
      </Box>
    );
  }
}
