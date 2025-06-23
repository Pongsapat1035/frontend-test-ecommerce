import { Container, Grid, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomerContract from "./components/CustomerInfo";
import ProductList from "./components/ProductList";
import Navlink from "../../components/NavLink";
import { useProduct } from "../../productContext";
import { useEffect, useState } from "react";
import type { CartItem, ProductData, CheckoutProductData } from "../../type";

import { FormProvider } from "./formContext";

const steps = ["Create order", "Payment", "Shipping"];

export default function CheckoutPage() {
  const { products } = useProduct();
  const [productLists, setProductLists] = useState<CheckoutProductData[]>([]);
  const [subTotal, setSubtotal] = useState(0)

  const fetchProduct = () => {
    const result = localStorage.getItem("mycart");
    const convertResult = result ? JSON.parse(result) : [];

    const productLists: CheckoutProductData[] = convertResult.map(
      (item: CartItem) => {
        const { id, quantity } = item;
        const productIndex = products.findIndex((el) => el.id === id);
        const product = products[productIndex] as ProductData;
        const { name, price, no } = product;
        const convertResult = {
          id,
          name,
          totalPrice: price * quantity,
          no,
          quantity: quantity,
          image: product.images[0],
        };
        return convertResult;
      }
    );
     const sumTotalPrice = productLists.reduce((acc, curr)=> ( acc+ curr.totalPrice) ,0 )
     setSubtotal(sumTotalPrice)
    setProductLists(productLists);
  };

  useEffect(() => {
    if (products.length) {
      fetchProduct();
    }
  }, [products]);

  return (
    <FormProvider>
      <Container disableGutters>
        <Grid container direction={{ xs: 'column', md:'row' }} p={{ xs: 0, sm: 4, md: 0 }} spacing={3}>
          <Grid size={12} container>
            <Navlink currentPage="Checkout"></Navlink>
          </Grid>
          <Grid size={12} container mt={2}>
            <Grid size={{ xs: 12, sm: 6 }} pl={{ xs: 2, sm: 0 }}>
              <Typography variant="h4" fontWeight="bold">
                Checkout
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stepper activeStep={1} alternativeLabel color="secondary">
                {steps.map((label) => (
                  <Step key={label} >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12,md:6 }} container direction="column" spacing={2} p={{ xs:2,sm:4 }} borderRadius={2} bgcolor="#f6f8fa">
            <Typography variant="h5" fontWeight="bold">
              Summary order
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Check your item and select your shipping for better experience
              order item.
            </Typography>
            <Grid
              container
              direction="column"
              spacing={2}
              p={{ xs:2, sm:4 }}
              border={1}
              borderRadius={3}
              bgcolor="background.paper"
              borderColor="primary.light">
              {productLists.map((item, index) => (
                <ProductList key={index} data={item}></ProductList>
              ))}
            </Grid>
          </Grid>
          <CustomerContract subtotal={subTotal}></CustomerContract>
        </Grid>
      </Container>
    </FormProvider>
  );
}
