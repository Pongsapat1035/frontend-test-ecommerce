import { Grid, IconButton } from "@mui/material";
import FilterTab from "../../pages/Products/components/FilterTab";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function MobileFilter({ closeFilter }: { closeFilter: Function }) {
  return (
    <Grid
      container
      direction="column"
      sx={{
        position: "fixed",
        py: 6,
        top: 0,
        left: 0,
        bgcolor: "background.paper",
        height: "100vh",
        width: "100vw",
        zIndex: 10,
        alignItems: "center",
      }}>
      <IconButton
        sx={{ position: 'fixed', top: 10, right: 10 }}
        onClick={() => closeFilter()}>
        <CloseRoundedIcon fontSize="medium" />
      </IconButton>
      <Grid size={{ xs: 11, sm: 6 }} container direction="column" spacing={3}>
        <FilterTab></FilterTab>
      </Grid>
    </Grid>
  );
}
