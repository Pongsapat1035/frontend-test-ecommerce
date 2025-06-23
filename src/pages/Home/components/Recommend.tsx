import { Grid, IconButton, Typography, Stack } from "@mui/material";
import { useProduct } from "../../../productContext";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import type { ProductData } from "../../../type";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const listsData = [
  {
    name: "Products",
    value: "100+",
  },
  {
    name: "Designs",
    value: "100+",
  },
  {
    name: "Layouts",
    value: "100+",
  },
  {
    name: "Rating",
    value: "5+",
  },
];

export default function Recommend() {
  const { products } = useProduct();
  const [productLists, setProductLists] = useState<ProductData[]>([]);

  useEffect(() => {
    if (products) {
      const getThreeProduct = products.slice(0,3)
      setProductLists(getThreeProduct);
    }
  }, [products]);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid container size={12} my={6} direction="row">
        {listsData.map((data, index) => (
          <Grid
            key={index}
            container
            size={{ xs: 12, sm: 6,lg:3 }}
            direction="column"
            spacing={2}
            alignItems="center">
            <Typography variant="h2">{data.value}</Typography>
            <Typography variant="h6" color="text.secondary">
              {data.name}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container direction="row" justifyContent="space-between">
        <Typography variant="h3" fontWeight="bold">
          Recommend
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", sm: "flex" } }}>
          <IconButton>
            <ChevronLeftRoundedIcon></ChevronLeftRoundedIcon>
          </IconButton>
          <IconButton>
            <ChevronRightRoundedIcon></ChevronRightRoundedIcon>
          </IconButton>
        </Stack>
      </Grid>
      <Grid container direction="row" spacing={3}>
        {productLists.map((data, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <ProductCard key={index} data={data}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
