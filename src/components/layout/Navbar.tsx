import { Stack, Typography, Grid, TextField } from "@mui/material";
import LogoIcon from "../../assets/interior.png";
import { useNavigate } from "react-router";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      size={2}
      width="100%"
      direction="row"
      justifyContent="space-between"
      p={2}>
      <Grid
        container
        size={2}
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}>
        <img src={LogoIcon} alt="icon" width={50} height={50} />
        <Typography
          variant="h4"
          fontWeight="semibold"
          sx={{ fontWeight: "bold" }}>
          Loft.
        </Typography>
      </Grid>
      <Grid container size={10} justifyContent="end" alignItems="center">
        <Stack spacing={2} direction="row">
          <Stack direction="row" spacing={2}>
            <TextField label="Search" variant="standard" />
            <IconButton sx={{ p: 2 }}>
              <SearchOutlinedIcon
                fontSize="medium"
                sx={{ bgcolor: "Background.paper" }}
              />
            </IconButton>
          </Stack>
          <IconButton sx={{ p: 2 }} onClick={() => navigate("/cart")}>
            <LocalMallOutlinedIcon fontSize="medium" />
            <CartBadge badgeContent={2} color="primary" overlap="circular" />
          </IconButton>
          <IconButton sx={{ p: 2 }}>
            <AccountBoxOutlinedIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
