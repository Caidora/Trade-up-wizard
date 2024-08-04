import NavBar from "../components/NavBar";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

interface rowType {
  key: number;
  title: string;
  user: string;
  rarity: string;
  cost: string;
  estimatedReturn: string;
}

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
  const [rows, setRows] = useState<rowType[]>([]);
  let navigate = useNavigate();

  function takeToShare(key: number) {
    navigate("/Share?contractID=" + key.toString(), { replace: true });
  }

  const url = "https://localhost:7236/api/Data/Page/Explore";
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
        console.log(data);
        setRows(data);
        console.log(rows);
      });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Typography variant="h3">Search user uploaded contracts!</Typography>
      <Box display="flex" justifyContent="center">
        <TableContainer component={Paper} sx={{ width: "auto" }}>
          <Table aria-label="simple table">
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Rarity</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">EstimatedReturn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{
                    cursor: "pointer",
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                  onClick={() => takeToShare(row.key)}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                  <TableCell align="right">{row.rarity}</TableCell>
                  <TableCell align="right">{row.cost}</TableCell>
                  <TableCell align="right">{row.estimatedReturn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ExplorePage;
