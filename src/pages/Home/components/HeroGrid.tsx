import { Grid, Box, Typography, IconButton } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
export default function HeroGrid() {
  return (
    <Grid container direction={ { xs: 'column', md: 'row' } } height={{ lg: 500 }} spacing={2}>
      <Grid size={{ xs: 12, md: 6 }} container direction="column" height="100%" spacing={2}>
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
        <Grid container size={12} sx={{ flexGrow: 1 }} spacing={2}>
          <Grid
            size={{ xs: 12, lg: 7 }}
            container
            direction="column"
            p={2}
            justifyContent="space-between"
            alignItems="end">
            <Typography variant="h6" fontWeight="bold">
              Lorem ipsum dolor sit amet consectetur tempora dicta tempore cum
              unde id.
            </Typography>
            <IconButton
              sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
              <ArrowOutwardRoundedIcon />
            </IconButton>
          </Grid>
          <Grid size={5} sx={{ borderRadius: 4, overflow: "hidden", display: { xs: 'none', lg: 'flex' } }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1680452611888-cb3646489a59?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ md: 6, lg: 3 }} container spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid
          size={12}
          container
          direction="column"
          p={2}
          justifyContent="space-between"
          alignItems="end">
          <Typography variant="h6" fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur tempora dicta tempore cum
            unde id.
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
      <Grid size={3} container spacing={2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
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
        <Grid
          size={12}
          container
          direction="column"
          p={2}
          justifyContent="space-between"
          alignItems="end">
          <Typography variant="h6" fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur tempora dicta tempore cum
            unde id.
          </Typography>
          <IconButton sx={{ bgcolor: "primary.main", color: "secondary.main" }}>
            <ArrowOutwardRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
