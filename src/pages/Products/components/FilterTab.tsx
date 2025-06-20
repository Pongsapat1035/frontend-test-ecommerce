import { Grid, Typography } from "@mui/material";

export default function FilterTab() {
  return (
    <Grid
      size={3}
      container
      direction="column"
      spacing={2}
      sx={{ borderRadius: 2, padding: 4 }}>
      <Typography variant="h4">Filters</Typography>
    </Grid>
  );
}
