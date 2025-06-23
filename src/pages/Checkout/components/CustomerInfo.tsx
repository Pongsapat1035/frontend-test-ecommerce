import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import ContractForm from "./ContractForm";

import { useForm } from "../formContext";
import { useEffect, useState } from "react";

export default function CustomerContract({ subtotal }: { subtotal: number }) {
  const { errorMsg, formData } = useForm();
  const [isLodaing, setIsLoading] = useState(false);
  const [vat, setVat] = useState(0);
  const handleSubmit = () => {
    setIsLoading(true);
    const errorValues = Object.values(errorMsg);
    const formValues = Object.values(formData);

    if (
      errorValues.some((el) => el !== "") ||
      formValues.some((el) => el === "")
    ) {
      alert("Payment Fail, please try again");
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }

    alert("Payment Fail, please try again");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const getvat = (subtotal * 10) / 100;
    setVat(getvat);
  }, [subtotal]);

  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      container
      spacing={2}
      p={4}
      direction="column"
      borderRadius={2}>
      <Typography variant="h5" fontWeight="bold">
        Payment detail
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Complete your purchase item by providing your payment details order.
      </Typography>
      <ContractForm></ContractForm>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1" color="text.secondary">
          ${subtotal.toLocaleString()}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" color="text.secondary">
          Vat (10%)
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${vat}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">Date</Typography>
        <Typography variant="body1">12/12/2568</Typography>
      </Stack>
      <Divider></Divider>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ${(subtotal + vat).toLocaleString()}
        </Typography>
      </Stack>
      <Button variant="contained" onClick={handleSubmit} loading={isLodaing}>
        Pay $450
      </Button>
    </Grid>
  );
}
