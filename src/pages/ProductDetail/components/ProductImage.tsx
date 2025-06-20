import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ProductImage() {
  return (
    <Grid container size={6} spacing={2}>
      <img src="https://placehold.co/600x400" alt="product-image" />
      <Stack spacing={1} direction="row">
        <img src="https://placehold.co/120x100" alt="product-image" />
        <img src="https://placehold.co/120x100" alt="product-image" />
        <img src="https://placehold.co/120x100" alt="product-image" />
        <img src="https://placehold.co/120x100" alt="product-image" />
      </Stack>
    </Grid>
  );
}
