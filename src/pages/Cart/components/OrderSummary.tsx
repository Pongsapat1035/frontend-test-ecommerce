import { useNavigate } from "react-router";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function OrderSummary({ subtotal } : { subtotal: number }) {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h5" fontWeight='bold'>Order Summary</Typography>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="body1" color="text.secondary">Sub total</Typography>
        <Typography variant="body1" fontWeight="bold">
          ${subtotal.toLocaleString()}
        </Typography>
      </Stack>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="body1" color="text.secondary">Discount</Typography>
        <Typography variant="body1" fontWeight="bold">
          -
        </Typography>
      </Stack>
      <hr className="horizontal-line"></hr>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h5" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="h4">$ {subtotal.toLocaleString()}</Typography>
      </Stack>
      <Button variant="contained" onClick={() => navigate("/checkout")}>
        Create order
      </Button> 
      <Link align="center" sx={{ cursor: 'pointer' }} onClick={()=> navigate('/product')}>Continue shopping</Link>
    </>
  );
}
