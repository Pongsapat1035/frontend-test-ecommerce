import { Outlet } from "react-router";
import Grid from "@mui/material/Grid";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function Layout() {
  return (
    <Grid container direction="column">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Grid>
  );
}
