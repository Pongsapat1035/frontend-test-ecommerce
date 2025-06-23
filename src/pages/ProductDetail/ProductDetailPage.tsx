import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import Navlink from "../../components/NavLink";
import { useProduct } from "../../productContext";
import { useEffect, useState } from "react";
import type { ProductData } from "../../type";
import { useParams } from "react-router";
import ProductDetailSkeleton from "../../components/skeleton/ProductDetailSkeleton";

export default function ProductDetailPage() {
  const params = useParams();
  const { products } = useProduct();
  const [isLoading, setIsLoading] = useState(true);

  const [productData, setProductData] = useState<ProductData>({
    id: 0,
    no: "",
    name: "",
    collection: "",
    material: [],
    description: "",
    images: [],
    price: 0,
    createAt: "",
    quantity: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    if (products.length > 0) {
      const id = parseInt(params.id || "");
      const findProduct = products.findIndex((product) => product.id === id);
      setProductData(products[findProduct]);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [products]);

  return (
    <Container disableGutters>
      {isLoading ? (
        <ProductDetailSkeleton></ProductDetailSkeleton>
      ) : (
        <Grid container direction="column" spacing={{ xs: 3, md: 6 }}>
          <Navlink currentPage="ProductName"></Navlink>
          <Grid container spacing={5} direction={{ xs: "column", md: "row" }}>
            <ProductImage images={productData.images}></ProductImage>
            <ProductInfo data={productData}></ProductInfo>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
