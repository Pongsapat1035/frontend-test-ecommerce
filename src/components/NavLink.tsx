import { useNavigate } from "react-router";

import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";

export default function Navlink({ currentPage }: { currentPage: string }) {
  const navigate = useNavigate();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<ArrowRightRoundedIcon fontSize="small" />}
      sx={{
        p:{ xs: 2, md: 0 },
        "& .MuiBreadcrumbs-li": {
          display: "flex",
          alignItems: "start",
        },
      }}>
      <HomeFilledIcon
        sx={{ color: "primary.light", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <Link
        underline="none"
        sx={{ cursor: "pointer", color: "text.secondary" }}
        onClick={() => navigate("/product")}>
        Products
      </Link>
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          cursor: "pointer",
        }}>
        {currentPage}
      </Typography>
    </Breadcrumbs>
  );
}
