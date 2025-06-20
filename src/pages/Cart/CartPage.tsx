import ProductCartList from "./components/ProductCartList";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <Container disableGutters>
      <Breadcrumbs aria-label="breadcrumb">
        <HomeRoundedIcon></HomeRoundedIcon>
        <Link sx={{ cursor: "pointer" }}>Link</Link>
        <Typography sx={{ color: "text.primary" }}>My Cart</Typography>
      </Breadcrumbs>
      <Typography variant="h5" fontWeight='bold'>Shopping cart</Typography>
      <Grid container spacing={6}>
        <Grid size={8} container direction="row" spacing={2}>
          <ProductCartList></ProductCartList>
          <ProductCartList></ProductCartList>
          <ProductCartList></ProductCartList>
        </Grid>
        <Grid size={4} container direction="column" spacing={2}>
          <Typography variant="h4">Order summary</Typography>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body1">Summary</Typography>
            <Typography variant="body1">120$</Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body1">Summary</Typography>
            <Typography variant="body1">120$</Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body1">Summary</Typography>
            <Typography variant="body1">120$</Typography>
          </Stack>
          <Button variant="contained" onClick={() => navigate("/checkout")}>
            Create order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
