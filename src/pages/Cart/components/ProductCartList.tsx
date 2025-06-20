import { Skeleton, Grid, Box, Stack, Typography } from "@mui/material";
export default function ProductCartList() {
  return (
    <Grid size={12} container>
      <Skeleton width={150} height={200}></Skeleton>
      <Stack direction="column">
        <Typography variant="body1">Product name</Typography>
      </Stack>
    </Grid>
  );
}
