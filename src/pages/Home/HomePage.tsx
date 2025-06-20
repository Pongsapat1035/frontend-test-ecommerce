import {
  Button,
  Grid,
  Container,
  Stack,
  Typography,
  IconButton,
  Skeleton,
} from "@mui/material";
import { Link, useNavigate } from "react-router";
import ProductCard from "../../components/ProductCard";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Grid size="grow">
      <Container disableGutters sx={{ height: "100%" }}>
        <Grid size={12} height="auto" container direction="row" spacing={2}>
          <Grid>
            <Grid>
              <Typography variant="h2" fontWeight="semibold">
                Transform your space,
              </Typography>
              <Typography variant="h2">
                Transform your life. At Loft.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid
              size={12}
              container
              justifyContent="space-between"
              alignItems="end">
              <Stack direction="row" spacing={2} alignItems="end">
                <Typography variant="h4">Top Product</Typography>
                <Link to="/product">View more</Link>
              </Stack>
              <Stack direction="row" spacing={1}>
                <IconButton>
                  <ChevronLeftOutlinedIcon></ChevronLeftOutlinedIcon>
                </IconButton>
                <IconButton>
                  <ChevronRightOutlinedIcon></ChevronRightOutlinedIcon>
                </IconButton>
              </Stack>
            </Grid>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
