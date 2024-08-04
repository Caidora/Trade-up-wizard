import NavBar from "../components/NavBar";
import { Typography } from "@mui/material";
import SkinGrid from "../components/SkinGrid";
import { useEffect, useState } from "react";
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
interface Contract {
  contractID: number;
  createdBy: string;
  title: string;
  rarity: string;
  skinName0: string;
  skinName1: string;
  skinName2: string;
  skinName3: string;
  skinName4: string;
  skinName5: string;
  skinName6: string;
  skinName7: string;
  skinName8: string;
  skinName9: string;
}
interface skin {
  empty: boolean;
  key: number;
  skinName: string;
}

const SharePage = () => {
  const [skinsSelected, setskinsSelected] = useState<skin[]>(startingSkins);
  const [Contract, setContract] = useState<Contract>();

  const [rarity, setRarity] = useState("");
  const [loading, setLoading] = useState(true);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const contractID = params.get("contractID");
  const url = "https://localhost:7236/api/Data/Contract/" + contractID;
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
        setContract(data);
      });
  }, []);

  useEffect(() => {
    var arr: string[] = [];
    var newArr: skin[] = [];
    if (Contract != null) {
      console.log(Contract);
      arr.push(Contract.skinName0);
      arr.push(Contract.skinName1);
      arr.push(Contract.skinName2);
      arr.push(Contract.skinName3);
      arr.push(Contract.skinName4);
      arr.push(Contract.skinName5);
      arr.push(Contract.skinName6);
      arr.push(Contract.skinName7);
      arr.push(Contract.skinName8);
      arr.push(Contract.skinName9);
      for (let i = 0; i < 10; i++) {
        newArr.push({ empty: false, key: i, skinName: arr[i] });
      }
      setskinsSelected(newArr);
      console.log(newArr);
      setRarity(Contract.rarity);
      console.log(rarity);
      setLoading(false);
      console.log(loading);
    }
  }, [Contract]);
  return (
    <>
      <NavBar></NavBar>
      {loading == false && (
        <>
          <Typography variant="h1">{Contract?.title}</Typography>
          <Typography>Made By {Contract?.createdBy}</Typography>
          <SkinGrid
            shareScreen
            skinsSelected={skinsSelected}
            rarity={rarity}
          ></SkinGrid>
        </>
      )}
    </>
  );
};

export default SharePage;
