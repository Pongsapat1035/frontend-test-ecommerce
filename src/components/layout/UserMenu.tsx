import {
  Box,
  Tooltip,
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Stack,
} from "@mui/material";
import { useState } from "react";

import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const navData = [
  {
    name: "Profile",
    icon: <PersonRoundedIcon sx={{ color: "primary.light", fontSize: 20 }} />,
  },
  {
    name: "Orders",
    icon: (
      <ReceiptLongRoundedIcon sx={{ color: "primary.light", fontSize: 20 }} />
    ),
  },
  {
    name: "Logout",
    icon: <LogoutRoundedIcon sx={{ color: "primary.light", fontSize: 20 }} />,
  },
];

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountBoxOutlinedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        slotProps={{
          paper: {
            sx: {
              border: 1,
              borderColor: "primary.light",
              borderRadius: "5px",
            },
          },
        }}>
        {navData.map((data, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            <Stack direction="row" spacing={2} alignItems="center">
              {data.icon}
              <Typography sx={{ textAlign: "center" }}>{data.name}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
