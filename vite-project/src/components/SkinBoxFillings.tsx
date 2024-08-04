import { useEffect, useState } from "react";
interface Skin {
  skinID: number;
  skinName: string;
  collectionName: string;
  rarity: string;
  minfloat: number;
  maxfloat: number;
  imageUrl: string;
}

interface Props {
  skin: {
    empty: boolean;
    key: number;
    skinName: string;
  };
  updateSkinSelection: Function;
  copySkin?: Function;
}

const styleImg = {
  width: "175px",
  height: "auto",
};
const styleTitle = {
  paddingTop: "20px",
  margin: "0",
};

const styleX = {
  paddingTop: "2px",
  margin: "0",
  paddingRight: "5px",
  cursor: "pointer",
};

const styleDiv = {
  display: "flex",
  justifyContent: "space-between",
};

export default function SkinBoxFillings({
  skin,
  updateSkinSelection,
  copySkin,
}: Props) {
  const [currentSkin, setCurrentSkin] = useState<Skin>();

  console.log("Gothere");
  useEffect(() => {
    fetch(
      "https://contractwizardapi-asa8emcbh7aqayer.eastus-01.azurewebsites.net/api/Data/skin/" +
        skin.skinName,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentSkin(data);
      });
  }, []);
  return (
    <>
      <div style={styleDiv}>
        {copySkin != null && (
          <p onClick={() => copySkin(currentSkin?.skinName)} style={styleX}>
            Copy
          </p>
        )}
        {copySkin != null && (
          <p onClick={() => updateSkinSelection()} style={styleX}>
            X
          </p>
        )}
      </div>
      <p style={styleTitle}>{currentSkin?.skinName}</p>
      <img style={styleImg} src={currentSkin?.imageUrl}></img>
    </>
  );
}
