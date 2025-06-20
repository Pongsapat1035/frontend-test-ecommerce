import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

export default function ProductDetailPage() {
  return (
    <Container disableGutters>
      <Grid container spacing={5}>
        <ProductImage></ProductImage>
        <ProductInfo></ProductInfo>
      </Grid>
    </Container>
  );
}
