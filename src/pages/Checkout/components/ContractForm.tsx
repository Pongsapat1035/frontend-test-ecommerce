import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import InputBox from "../../../components/InputTag";

import PaymentRadio from "./PaymentRadio";
import { useState } from "react";

const paymentOptions = [
  { value: "credit card", label: "Credit card" },
  { value: "cash", label: "Cash" },
];

export default function ContractForm() {
  const [selected, setSelected] = useState("cash");

  const paymentMethod = paymentOptions.map((option) => (
    <Grid size={{ xs: 12, sm: 6 }}>
      <PaymentRadio
        label={option.label}
        value={option.value}
        checked={selected === option.value}
        onChange={setSelected}></PaymentRadio>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      <InputBox
        type="text"
        title="Customer name"
        name="name"
        holder="example"
        error=""></InputBox>
      <InputBox
        type="text"
         name="address"
        title="Address"
        holder="example@mail.com"
        error=""></InputBox>
      <Grid size={6}>
        <InputBox
          type="text"
           name="tel"
          title="Tel. Number"
          holder="088xxxxxxx"
          error=""></InputBox>
      </Grid>
      <Grid size={6}>
        <InputBox
          type="text"
           name="postcode"
          title="Postcode"
          holder="22xxx"
          error=""></InputBox>
      </Grid>
      <Grid container size={12}>
        <Grid size={12}>
          <Typography variant="body1" fontWeight="bold">
            Payment method
          </Typography>
        </Grid>
        {paymentMethod}
      </Grid>
    </Grid>
  );
}
