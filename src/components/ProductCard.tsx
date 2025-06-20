import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router";

export default function ProductCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderRadius: 4 }} onClick={() => navigate("/product/1")}>
      <CardMedia
        sx={{ height: 300, width: 300, objectFit: "cover" }}
        image="https://placehold.co/600x400"
        title="green iguana"
      />
      <CardContent>
        <Stack direction="row">
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </Stack>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
