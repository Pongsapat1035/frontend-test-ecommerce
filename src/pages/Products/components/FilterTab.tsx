import { Grid, Typography, Stack, Link } from "@mui/material";
import { useEffect, type ReactElement } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import PriceRange from "./PriceRange";
import CollectionSelector from "./CollectionSelector";
import MaterialSelector from "./MaterialSelector";

const shippingData = [
  {
    header: "Free Shipping",
    description: "Free shipping for all user",
    icon: (
      <LocalShippingOutlinedIcon
        sx={{ color: "primary.light", fontSize: 50 }}
      />
    ),
  },
  {
    header: "Support 24/7",
    description: "Round-the-clock support!",
    icon: <HeadsetOutlinedIcon sx={{ color: "primary.light", fontSize: 50 }} />,
  },
  {
    header: "30 Days Return",
    description: "Easy 30-Day returns for You!",
    icon: <SyncAltOutlinedIcon sx={{ color: "primary.light", fontSize: 50 }} />,
  },
];

const collectionLists = [
  "All",
  "Best Seller",
  "New Arrivals",
  "Small Space",
  "Budget Friendly",
  "Premium Luxury",
];

import { useQueryProduct } from "../../../queryContext";

export default function FilterTab() {
  const { resetQuery } = useQueryProduct();

  useEffect(() => {
    resetQuery();
  }, []);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Filters</Typography>
        <Link
          sx={{ cursor: "pointer", color: "error.light", fontWeight: "bold" }}
          onClick={() => resetQuery()}>
          Clear
        </Link>
      </Stack>
      <Grid container>
        <Grid size={12}>
          <Typography variant="body1" fontWeight="bold">
            Collection
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={1}>
          {collectionLists.map((list, index) => (
            <CollectionSelector key={index} value={list}></CollectionSelector>
          ))}
        </Grid>
      </Grid>
      <MaterialSelector></MaterialSelector>
      <PriceRange></PriceRange>
      {shippingData.map((data, index) => (
        <ShippingDetail key={index} data={data}></ShippingDetail>
      ))}
    </>
  );
}

type ShippingProps = {
  header: string;
  description: string;
  icon: ReactElement;
};

function ShippingDetail({ data }: { data: ShippingProps }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {data.icon}
      <Stack spacing={1}>
        <Typography variant="body1" fontWeight="bold">
          {data.header}
        </Typography>
        <Typography variant="body1" color="text.secondary" fontWeight="light">
          {data.description}
        </Typography>
      </Stack>
    </Stack>
  );
}
