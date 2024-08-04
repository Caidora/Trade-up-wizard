import { styled } from "@mui/material/styles";
import { Box, Modal, Typography, Autocomplete, TextField } from "@mui/material";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SkinBoxFillings from "./SkinBoxFillings";

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

interface Props {
  skin: {
    empty: boolean;
    key: number;
    skinName: string;
  };
  updateSkinList?: Function;
  skinList: string[];
  selectedRarityColour: string;
  copySkin?: Function;
}

export default function SkinBoxShell({
  skin,
  updateSkinList,
  skinList,
  selectedRarityColour,
  copySkin,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [skinBox, setSkinBox] = React.useState("");

  function updateSKinBox(newValue: string | null) {
    if (newValue == null) {
      return;
    } else [setSkinBox(newValue)];
  }
  const SkinBoxStyled = styled(Box)({
    borderRadius: "15px",
    backgroundColor: selectedRarityColour,
    width: "195px",
    height: "221px",
  });

  function handleUpdateSkinList() {
    if (updateSkinList != null) {
      updateSkinList(skin.key, skinBox);
      handleClose();
    }
  }

  function handleDeleteSkin() {
    if (updateSkinList != null) {
      updateSkinList(skin.key, "");
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              marginBottom="1rem"
            >
              Choose your skin!
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={skinBox}
              options={skinList}
              onChange={(_event: any, newValue: string | null) => {
                updateSKinBox(newValue);
              }}
              sx={{ marginBottom: "1rem" }}
              renderInput={(params) => <TextField {...params} label="Skin" />}
            />
            <Box display="flex" justifyContent="flex-end">
              <PrimaryButton submitFunction={handleUpdateSkinList}>
                Submit
              </PrimaryButton>
            </Box>
          </Box>
        </Modal>
      </SkinBoxStyled>
    );
  } else {
    return (
      <SkinBoxStyled>
        <SkinBoxFillings
          updateSkinSelection={handleDeleteSkin}
          copySkin={copySkin}
          skin={skin}
        ></SkinBoxFillings>
      </SkinBoxStyled>
    );
  }
}
