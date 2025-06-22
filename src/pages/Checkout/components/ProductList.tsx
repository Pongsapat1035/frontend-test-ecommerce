import { Box, Grid, Stack, Typography } from "@mui/material";
import type { CheckoutProductData } from "../../../type";

export default function ProductList({ data }: { data: CheckoutProductData }) {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid
        size={4}
        container
        justifyContent="center"
        alignItems="center"
        borderRadius={2}>
        <Box
          sx={{
            minWidth: 100,
            width: 150,
            height: { xs: 120, sm: 160 },
            borderRadius: 2,
            overflow: "hidden",
            border: 1,
            borderColor: "primary.light",
          }}>
          <img
            src={data.image}
            alt={data.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
        </Box>
      </Grid>
      <Grid
        size={8}
        container
        direction="column"
        justifyContent="space-between"
        pl={2}>
        <Stack spacing={1}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
            {data.name}
          </Typography>
          <Typography variant="body1" fontWeight="light" color="text.secondary">
            #{data.no}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={1}>
          <Typography variant="body1">x {data.quantity}</Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.5rem" } }}>
            ${data.totalPrice}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
