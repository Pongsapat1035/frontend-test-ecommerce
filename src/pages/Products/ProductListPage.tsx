import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import FilterTab from "./components/FilterTab";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import type { ProductData } from "../../type";
import { useQueryProduct } from "../../queryContext";
import type { SelectChangeEvent } from "@mui/material/Select";
import ProductSkeletonCard from "../../components/skeleton/ProductSkeletonCard";

export default function ProductListPage() {
  const [sortBy, setSortBy] = useState("new");
  const { queryData, updateQuery, productLists, resetQuery } =
    useQueryProduct();
  const [productList, setProductList] = useState<ProductData[]>([]);
  const [isLodaing, setIsLoading] = useState(true);
  const handleSortChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setSortBy(value);
    updateQuery({ sortby: value });
  };

  useEffect(() => {
    setIsLoading(true);
    if (productLists) {
      setProductList(productLists);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [productLists]);

  useEffect(() => {
    const { sortby } = queryData;
    setSortBy(sortby);
  }, [queryData]);

  useEffect(() => {
    resetQuery();
  }, []);

  const productCardLists = productList.map((data, index) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
      <ProductCard key={index} data={data}></ProductCard>
    </Grid>
  ));

  return (
    <Grid size="auto" container px={{ lg: 5, xl: 18 }}>
      <Grid
        size={3}
        container
        direction="column"
        spacing={2}
        sx={{
          display: { xs: "none", lg: "flex" },
          p: { sm: 2, lg: 4 },
          borderRight: 1,
          borderColor: "primary.light",
        }}>
        <FilterTab></FilterTab>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 9 }}
        p={4}
        spacing={1}
        container
        direction="column">
        <Grid container alignItems="center" spacing={2}>
          <Grid
            size={{ xs: 12, sm: 3 }}
            container
            alignItems="center"
            justifyContent="end"
            spacing={1}>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ display: { xs: "none", md: "block" } }}>
              Sort by:
            </Typography>
            <Select
              labelId="sortby"
              id="sortby"
              value={sortBy}
              onChange={(e) => handleSortChange(e)}
              sx={{
                width: { md: 200, lg: 150 },
                "& .MuiSelect-select": {
                  p: 1,
                },
              }}>
              <MenuItem value="new">Newest first</MenuItem>
              <MenuItem value="name-a-z">Name A-Z</MenuItem>
              <MenuItem value="name-z-a">Name Z-A</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {isLodaing
            ? new Array(9)
                .fill("")
                .map((_) => <ProductSkeletonCard></ProductSkeletonCard>)
            : productCardLists}
        </Grid>
        <Grid
          container
          size={12}
          justifyContent="center"
          alignItems="center"
          py={3}>
          <Pagination count={10} color="secondary" />
        </Grid>
      </Grid>
    </Grid>
  );
}
