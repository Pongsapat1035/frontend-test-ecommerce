import { Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FilterTab from "./components/FilterTab";
import ProductCard from "../../components/ProductCard";

export default function ProductListPage() {
  return (
    <Grid size='auto' container  px={12}>
      <FilterTab></FilterTab>
      <Grid size={9}>
        <Grid container>
          <Grid container size={10} spacing={1}>
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Chip Outlined" variant="outlined" />
          </Grid>
          <Grid size={2} container alignItems="center" spacing={2}>
            <Typography variant="body1">Sort by:</Typography>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={() => console.log("change")}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
