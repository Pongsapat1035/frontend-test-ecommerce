import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

export default function QuantitySelector({ quantity, updateQuantity }: { quantity: number; updateQuantity: Function;}) {

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton onClick={() => updateQuantity("decrease")}>
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ width: 20, textAlign: "center" }}>
        {quantity}
      </Typography>
      <IconButton onClick={() => updateQuantity("increase")}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  );
}
