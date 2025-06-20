import { Outlet } from "react-router";
import { Container, Grid } from "@mui/material";
import Navbar from "./layout/Navbar";
export default function Layout() {
  return (
    <Grid container direction="column">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Grid>
  );
}
