import NavBar from "../components/NavBar";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import { useEffect, useState } from "react";

interface Contract {}

interface Skin {
  skinID: number;
  skinName: string;
  collectionName: string;
  rarity: string;
  minfloat: number;
  maxfloat: number;
  imageUrl: string;
}
const ExplorePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7236/api/Data/Contracts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRows(data);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <TableContainer component={Paper}>
        <Table aria-label="simple table"></Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Rarity</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">E.V</TableCell>
          </TableRow>
        </TableHead>
      </TableContainer>
    </div>
  );
};

export default ExplorePage;
