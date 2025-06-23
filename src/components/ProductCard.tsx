import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import Rating from "@mui/material/Rating";
import type { ProductData } from "../type";

export default function ProductCard({ data }: { data: ProductData }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ boxShadow: "none", cursor: "pointer" }}
      onClick={() => navigate(`/product/${data.id}`)}>
      <CardMedia
        sx={{
          height: 350,
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
          position: "relative",
        }}
        image={data.images[0]}
        title="product image">
        <Stack
          direction="row"
          spacing={1}
          sx={{ position: "absolute", top: 15, left: 15 }}>
          <Box
            width={15}
            height={15}
            borderRadius={100}
            bgcolor="#E67514"></Box>
          <Box
            width={15}
            height={15}
            borderRadius={100}
            bgcolor="#212121"></Box>
          <Box
            width={15}
            height={15}
            borderRadius={100}
            bgcolor="#254D70"></Box>
        </Stack>
      </CardMedia>

      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            ${data.price}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Rating size="small" name="read-only" value={4} readOnly />
          <Typography variant="body1" color="text.secondary">
            (75)
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
