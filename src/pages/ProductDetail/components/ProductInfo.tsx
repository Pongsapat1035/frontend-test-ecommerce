import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import QuantitySelector from "../../../components/QuantitySelector";
import AccordionTag from "../../../components/AccordionTag";
import type { ProductData } from "../../../type";
import { useState } from "react";
import { useCart } from "../../../cartContext";


export default function ProductInfo({ data }: { data: ProductData }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart()
  
  const updateQuantity = (mode: string) => {
    if (mode === "increase" && quantity !== data.quantity) {
      setQuantity(quantity + 1);
    } else if (mode === "decrease" && quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Grid size={{ sm: 12, md: 6 }}  container direction="column" spacing={2} sx={{ p: { xs: 2, sm:4, md: 0 }, pt: { xs: 0 } }} >
      <Typography variant="h6" color="text.secondary">
        {data.collection.toLocaleUpperCase()}
      </Typography>
      <Typography variant="h3" fontWeight="bold">
        {data.name}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LocalShippingOutlinedIcon sx={{ color: "text.secondary" }} />
        <Typography variant="body1" color="text.secondary">
          Delivery in 2 Weeks
        </Typography>
      </Stack>
      <AccordionTag></AccordionTag>
      <Stack direction="row" justifyContent="end" my={2}>
        <Typography variant="h4" fontWeight="bold">
          {data.price}$
        </Typography>
      </Stack>
      <Grid container direction="row" alignItems="center" spacing={3}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <QuantitySelector
            quantity={quantity}
            updateQuantity={updateQuantity}></QuantitySelector>
        </Grid>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartRoundedIcon />}
          sx={{ flexGrow: 1, borderRadius: 3 }}
          onClick={() => addToCart(data.id, quantity)}>
          Add to cart
        </Button>
        <IconButton>
          <FavoriteBorderRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
