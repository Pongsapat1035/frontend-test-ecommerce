import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";


export default function ProductDetailSkeleton() {
  return (
    <>
      <Grid container direction={{ xs: "column", md: "row" }}>
        <Grid direction="column" size={{ xs: 12, sm: 6 }} p={4}>
          <Skeleton height={500} width="100%"></Skeleton>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} p={4}>
          <Skeleton width="100%" height={60}></Skeleton>
          <Skeleton width="20%" height={60}></Skeleton>
          <Skeleton width="50%" height={60}></Skeleton>
          <Skeleton width="100%" height={60}></Skeleton>
          <Skeleton width="100%" height={60}></Skeleton>
        </Grid>
      </Grid>
    </>
  );
}
