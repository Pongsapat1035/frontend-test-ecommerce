import  Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function ProductSkeletonCard() {
  
  return (
    <Grid container direction="column" spacing={1}>
      <Skeleton height={400} width={360}></Skeleton>
      <Grid height={150} container direction="column" spacing={1}>
        <Skeleton height={60} width={360}></Skeleton>
        <Skeleton height={60} width={360}></Skeleton>
      </Grid>
    </Grid>
  );
}
