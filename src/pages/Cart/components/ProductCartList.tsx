import { useState } from "react";
import { useNavigate } from "react-router";

import { useCart } from "../../../cartContext";
import type { ProductCartData } from "../../../type";
import QuantitySelector from "../../../components/QuantitySelector";

import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function ProductCartList({
  data,
  deleteCart,
}: {
  data: ProductCartData;
  deleteCart: Function;
}) {
  const [quantity, setQuantity] = useState(data.quantity);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (mode: string) => {
    let newQuantity = quantity;
    if (mode === "increase" && quantity !== data.remainQuantity) {
      newQuantity++;
      addToCart(data.id, 1);
    } else if (mode === "decrease" && quantity !== 1) {
      newQuantity--;
      addToCart(data.id, -1);
    }

    setQuantity(newQuantity);
  };

  return (
    <Grid size={12} container p={1} borderRadius={1} sx={{ cursor: "pointer" }}>
      <Grid size={{ xs: 4, sm: 3 }}>
        <Box
          sx={{
            width: { xs: 100, sm: 150 },
            height: { xs: 120, sm: 170 },
            bgcolor: "primary.light",
            borderRadius: 2,
            overflow: "hidden",
          }}>
          <img
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
            src={data.image}
            alt={data.name}
          />
        </Box>
      </Grid>
      <Grid
        size="grow"
        container
        direction="column"
        justifyContent="space-between">
        <Stack direction="row" justifyContent="space-between">
          <Stack spacing={1}>
            <Typography
              variant="h5"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
              fontWeight="bold"
              onClick={() => navigate("/product")}>
              {data.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              #{data.no}
            </Typography>
            <Stack direction="row" spacing={1} alignItems='center' borderRadius={2} p="4px" px="6px" bgcolor="#def9ea" maxWidth={110}>
              <LocalShippingRoundedIcon sx={{ fontSize: 16, color: '#01642a' }} />
              <Typography variant="body1"  fontWeight="bold" fontSize=".7rem" color="#01642a">Free shipping</Typography>
            </Stack>
          </Stack>
          <IconButton
            sx={{ width: 40, height: 40 }}
            onClick={() => deleteCart(data.id)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <QuantitySelector
            quantity={quantity}
            updateQuantity={updateQuantity}></QuantitySelector>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
            ${data.totalPrice.toLocaleString()}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
