import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import OrderSummary from "./components/OrderSummary";
import ProductCartList from "./components/ProductCartList";
import Navlink from "../../components/NavLink";
import { useEffect, useState } from "react";
import { useProduct } from "../../productContext";
import type { CartItem, ProductData, ProductCartData } from "../../type";
import { Divider } from "@mui/material";

export default function CartPage() {
  const { products } = useProduct();
  const [productList, setProductList] = useState<ProductCartData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCart = () => {
    const response = localStorage.getItem("mycart");
    const cart = response ? JSON.parse(response) : [];

    const cartList:ProductCartData[] = cart.map((item: CartItem) => {
      const { id, quantity } = item;
      const productIndex = products.findIndex((el) => el.id === id);
      const product = products[productIndex] as ProductData;
      const { name, price, no } = product;
      const convertResult: ProductCartData = {
        id,
        name,
        price,
        no,
        totalPrice: price * quantity,
        remainQuantity: product.quantity,
        quantity: quantity,
        image: product.images[0],
      };
      return convertResult;
    });

    const sumTotalPrice = cartList.reduce((acc, curr)=> ( acc+ curr.totalPrice) ,0 )
    setTotalPrice(sumTotalPrice)
    setProductList(cartList);
  };

  const handleDeleteItem = (id: number) => {
    const cart = localStorage.getItem("mycart");
    const convertedCart: CartItem[] = cart ? JSON.parse(cart) : [];
    const index = convertedCart.findIndex((item) => item.id === id);
    convertedCart.splice(index, 1);

    localStorage.setItem("mycart", JSON.stringify(convertedCart));
    fetchCart();
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchCart();
    }
  }, [products]);

  return (
    <Container disableGutters sx={{p: {xs:2, sm: 4,lg:0}}}>
      <Grid container direction="column" spacing={3}>
        <Navlink currentPage="Cart"></Navlink>
        <Typography variant="h4" fontWeight="bold">
          Cart
        </Typography>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 8 }}
            container
            direction="column"
            spacing={2}
            pr={{ xs: 0, lg: 4 }}
            sx={{
              borderRadius: 2,
              minHeight: { xs: 450, md: 600 },overflow: 'scroll'
            }}>
            {productList.map((data, index) => (
              <>
                <ProductCartList
                  key={index}
                  data={data}
                  deleteCart={handleDeleteItem}></ProductCartList>
                <Divider></Divider>
              </>
            ))}
          </Grid>
          <Grid
            size={{ xs: 12, md:4 }}
            container
            direction="column"
            spacing={2}
            border={1}
            borderColor="primary.light"
            borderRadius={3}
            p={3}
            height="max-content">
            <OrderSummary subtotal={totalPrice} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
