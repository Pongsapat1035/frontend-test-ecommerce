import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from '@mui/material/Button'
import AccordionSummary from "@mui/material/AccordionSummary";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QuantitySelector from "../../../components/QuantitySelector";

export default function ProductInfo() {
  return (
    <Grid size={6}>
      <Typography variant="h5">CHAIR COLLECTIONB</Typography>
      <Typography variant="h3" fontWeight="bold">
        product name{" "}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LocalShippingOutlinedIcon />
        <Typography variant="body1">Delivery in 2 Weeks</Typography>
      </Stack>
      <hr className="horizontal-line"></hr>
      {/* <Rating name="read-only" value={4} readOnly /> */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span">Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Stack>
        <Typography variant="h4" fontWeight="bold">
          Price
        </Typography>
        <Typography variant="body1">150$</Typography>
      </Stack>
      <QuantitySelector></QuantitySelector>
      <Button variant="contained">Add to cart</Button>
    </Grid>
  );
}
