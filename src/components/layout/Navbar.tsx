import { useNavigate } from "react-router";
import { useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { styled } from "@mui/material/styles";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import LogoIcon from "../../assets/interior.png";
import { useCart } from "../../cartContext";
import SearchBox from "./SearchBox";
import UserMenu from "./UserMenu";
import MobileFilter from "./MobileFilter";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  const [searchBarState, setSearchBarState] = useState(false);
  const [filterState, setFilterState] = useState(false);
  const { cartItem } = useCart();

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
        size={{ sm: 3, md: 2 }}
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ cursor: "pointer", pl: 2 }}
        onClick={() => navigate("/")}>
        <img src={LogoIcon} alt="icon" style={{ width: 50, height: 50 }} />
        <Typography
          variant="h4"
          fontWeight="semibold"
          sx={{ fontWeight: "bold", display: { xs: "none", md: "block" } }}>
          Loft.
        </Typography>
      </Grid>
      <Grid
        container
        size={{ xs: 6, md: 10 }}
        justifyContent="end"
        alignItems="center">
        <Stack spacing={2} direction="row" alignItems="center">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBox></SearchBox>
          </Box>
          <IconButton
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => setSearchBarState(!searchBarState)}>
            <SearchRoundedIcon fontSize="medium" />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "block", lg: "none" } }}
            onClick={() => setFilterState(true)}>
            <FilterAltIcon fontSize="medium" />
          </IconButton>
          <IconButton onClick={() => navigate("/cart")}>
            <LocalMallOutlinedIcon fontSize="medium" />
            <CartBadge
              badgeContent={cartItem}
              color="secondary"
              overlap="circular"
            />
          </IconButton>
          <UserMenu></UserMenu>
        </Stack>
      </Grid>
      <Grid
        container
        size={12}
        height={searchBarState ? 70 : 0}
        justifyContent="end"
        alignItems="center"
        py={searchBarState ? 2 : 0}
        overflow="hidden">
        <Box>
          <SearchBox></SearchBox>
        </Box>
      </Grid>
      {filterState ? (
        <MobileFilter closeFilter={() => setFilterState(false)}></MobileFilter>
      ) : (
        ""
      )}
    </Grid>
  );
}
