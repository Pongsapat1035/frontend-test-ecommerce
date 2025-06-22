import { Grid, Typography, Stack, Button, Divider } from "@mui/material";
import ContractForm from "./ContractForm";

import { useForm } from "../formContext";
export default function CustomerContract() {
  const { errorMsg, formData } = useForm();
  const handleSubmit = () => {
    const errorValues = Object.values(errorMsg);
    const formValues = Object.values(formData);

    if (
      errorValues.some((el) => el !== "") ||
      formValues.some((el) => el === "")
    ) {
      alert("Please check payment detail again");
      return;
    }
    alert("Success");
  };

  return (
    <Grid size={{ xs: 12,md:6 }} container spacing={2} p={4} direction="column" borderRadius={2}>
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
          $350
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1" color="text.secondary">
          Vat (10%)
        </Typography>
        <Typography variant="body1" color="text.secondary">
          $34
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">Date</Typography>
        <Typography variant="body1">12/12/2564</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body1">No.</Typography>
        <Typography variant="body1">12412weqw123</Typography>
      </Stack>
      <Divider></Divider>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          $450
        </Typography>
      </Stack>
      <Button variant="contained" onClick={handleSubmit}>
        Pay $450
      </Button>
    </Grid>
  );
}
