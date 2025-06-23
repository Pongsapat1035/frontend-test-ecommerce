import {
  Grid,
  Container,
  Typography,
  Button,
} from "@mui/material";
import {  useNavigate } from "react-router";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import HeroGrid from "./components/HeroGrid";
import Recommend from "./components/Recommend";
import EastRoundedIcon from '@mui/icons-material/EastRounded';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Grid size="grow">
      <Container disableGutters sx={{ height: "100%", p: { xs: 2, lg: 0 } }}>
        <Grid container direction="column" spacing={8} my={5}>
          <Grid size={12} height="auto" container direction="row" spacing={2}>
            <Grid size={12} container direction="row">
              <Grid size="grow">
                <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>
                  Discovering
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' } }}>for your home</Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 4 }} container alignItems="end" justifyContent="end">
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "primary.main",
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'space-around',
                    minWidth: { xs: 100, sm: 160 },
                    px: { xs: 2 },
                  }}
                  onClick={() => navigate("/product")}>
                  Shop now <EastRoundedIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <HeroGrid></HeroGrid>
          <Recommend></Recommend>
        </Grid>
      </Container>
    </Grid>
  );
}
