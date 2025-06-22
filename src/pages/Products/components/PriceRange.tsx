import { Grid, InputBase, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { useQueryProduct } from "../../../queryContext";

export default function PriceRange() {
  const [value, setValue] = useState([0, 100]);
  const { queryData, updateQuery, maxProductPrice } = useQueryProduct();
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 100,
  });

  const handleChange = (_: any, newValue: number[]) => {
    const minPrice = newValue[0];
    const maxPrice = newValue[1];
    updateQuery({ minPrice, maxPrice });
  };

  useEffect(() => {
    const { minPrice, maxPrice } = queryData;
    setPrice((prev) => ({ ...prev, minPrice, maxPrice }));
    setValue([minPrice, maxPrice]);
  }, [queryData]);

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <Typography variant="h6" fontWeight="bold">
          Price
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} container direction="column" spacing={3}>
          <Grid container direction="row" spacing={2} height={30}>
            <MinMaxPriceBadge
              price={price.minPrice}
              updatePrice={(newPrice: number) =>
                setPrice((prev) => ({ ...prev, minPrice: newPrice }))
              }></MinMaxPriceBadge>
            <Grid
              size={2}
              container
              justifyContent="center"
              alignItems="center">
              <Typography variant="body1">To</Typography>
            </Grid>
            <MinMaxPriceBadge
              price={price.maxPrice}
              updatePrice={(newPrice: number) =>
                setPrice((prev) => ({ ...prev, maxPrice: newPrice }))
              }></MinMaxPriceBadge>
          </Grid>
          <Grid size={12}>
            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                max={maxProductPrice}
                min={0}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

function MinMaxPriceBadge({
  price,
  updatePrice,
}: {
  price: number;
  updatePrice: Function;
}) {
  const priceBadgeStyle = {
    p: "4px",
    px: "8px",
    borderRadius: 2,
    bgcolor: "#EAEFEF",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <Grid container size={5} direction="row" sx={priceBadgeStyle}>
      <Grid size={4}>
        <AttachMoneyRoundedIcon
          sx={{
            fontSize: 16,
            color: "text.secondary",
          }}></AttachMoneyRoundedIcon>
      </Grid>
      <Grid size={8}>
        <InputBase
          type="number"
          value={price}
          onChange={(e) => updatePrice(parseInt(e.target.value))}></InputBase>
      </Grid>
    </Grid>
  );
}
