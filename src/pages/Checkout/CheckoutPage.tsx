import { Container, Grid, Skeleton, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomerContract from "./components/CustomerContract";
const steps = ["Create order", "Payment", "Shipping"];

export default function CheckoutPage() {
  return (
    <Container disableGutters>
      <Grid container>
        <Grid size={12} container>
          <Grid size={2}>
            <Typography variant="h4">Checkout</Typography>
          </Grid>
          <Grid size={10}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
        <Grid size={6}>
          <Typography variant="h5">Summary order</Typography>
          <Skeleton width="100%" height={200}></Skeleton>
          <Skeleton width="100%" height={200}></Skeleton>
          <Skeleton width="100%" height={200}></Skeleton>
          <Typography variant="body1">Shipping method</Typography>
        </Grid>
        <CustomerContract></CustomerContract>
      </Grid>
    </Container>
  );
}
