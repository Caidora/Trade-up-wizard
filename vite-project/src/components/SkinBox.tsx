import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Modal,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import React from "react";
import { createRoutesFromChildren } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
const SkinBoxStyled = styled(Box)({
  borderRadius: "50px",
  backgroundColor: "grey",
  width: "195px",
  height: "221px",
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleImg = {
  width: "50px",
  height: "auto",
  cursor: "pointer",
};
interface listItem {
  label: string;
  year: number;
}

interface Props {
  skin: {
    empty: boolean;
    key: number;
    skinName: string;
  };
  updateSkinList: Function;
  skinList: listItem[];
}

export default function SkinBox({ skin, updateSkinList, skinList }: Props) {
  const [open, setOpen] = React.useState(false);
  const [skinBox, setSkinBox] = React.useState({ label: "", year: 0 });

  function updateSKinBox(newValue: listItem | null) {
    if (newValue == null) {
      return;
    } else [setSkinBox(newValue)];
  }

  function handleUpdateSkinList() {
    updateSkinList(skin.key, skinBox);
    handleClose();
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(skin);
  if (skin.empty == true) {
    return (
      <SkinBoxStyled>
        <img
          style={styleImg}
          src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
          onClick={handleOpen}
        ></img>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={skinBox}
              options={skinList}
              onChange={(event: any, newValue: listItem | null) => {
                updateSKinBox(newValue);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Skin" />}
            />
            <PrimaryButton submitFunction={handleUpdateSkinList}>
              Clear Draft
            </PrimaryButton>
          </Box>
        </Modal>
      </SkinBoxStyled>
    );
  }
}
