import { Grid, Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

export default function HeroGrid() {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row" }}
      height={{ lg: 500 }}
      spacing={2}>
      <Grid
        size={{ xs: 12, md: 6 }}
        container
        direction="column"
        height="100%"
        spacing={2}
        sx={{ opacity: 0, animation: "fadeIn 1s forwards" }}>
        <Box
          sx={{
            height: 300,
            bgcolor: "primary.light",
            borderRadius: 4,
            overflow: "hidden",
          }}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </Box>
        <Grid container size={12} sx={{ flexGrow: 1 }} spacing={2}>
          <Grid
            size={{ xs: 12, lg: 7 }}
            container
            direction="column"
            p={2}
            justifyContent="space-between"
            alignItems="end">
            <Typography variant="h6" fontWeight="bold">
              CHANGING THE WAY PEOPLE DESING & SHOP FOR THEIR HOMES
            </Typography>
            <IconButton
              sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
              <ArrowOutwardRoundedIcon />
            </IconButton>
          </Grid>
          <Grid
            size={5}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              display: { xs: "none", lg: "flex" },
            }}>
            <img
              src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ md: 6, lg: 3 }}
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          opacity: 0,
          animation: "fadeIn 1s forwards",
          animationDelay: "1s",
        }}>
        <Grid
          size={12}
          container
          direction="column"
          p={2}
          justifyContent="space-between"
          alignItems="end">
          <Typography variant="h6" fontWeight="bold">
            UNLEASH YOUR STYLE WITH OUR EXQUISITE FUNITURE COLLECTION
          </Typography>
          <IconButton sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
            <ArrowOutwardRoundedIcon />
          </IconButton>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              height: 300,
              bgcolor: "primary.light",
              borderRadius: 4,
              overflow: "hidden",
            }}>
            <img
              src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        size={3}
        container
        spacing={2}
        sx={{
          display: { xs: "none", lg: "flex" },
          opacity: 0,
          animation: "fadeIn 1s forwards",
          animationDelay: ".5s",
        }}>
        <Grid size={12}>
          <Box
            sx={{
              height: 300,
              bgcolor: "primary.light",
              borderRadius: 4,
              overflow: "hidden",
            }}>
            <img
              src="https://images.unsplash.com/photo-1636368208791-17b81ed832d2?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </Box>
        </Grid>
        <Grid
          size={12}
          container
          direction="column"
          p={2}
          justifyContent="space-between"
          alignItems="end">
          <Typography variant="h6" fontWeight="bold">
            INTRODUCING OUR CAPTIVATING NEW ARRIVALS, 
          </Typography>
          <IconButton sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
            <ArrowOutwardRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
