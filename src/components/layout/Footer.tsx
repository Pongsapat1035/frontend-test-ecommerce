import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import LogoIcon from "../../assets/interior.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerContent = [
  {
    name: "CUSTOMER SERVICE",
    list: [
      "Contact Us",
      "Shipping & Returns",
      "Size Guide",
      "FAQ",
      "Track Your Order",
    ],
  },
  {
    name: "COMPANY",
    list: ["About Us", "Careers", "Press", "FAQ", "Affiliate Program"],
  },
  {
    name: "CONNECT",
    list: ["Newsletter Signup", "Social Media Links", "Customer Reviews"],
  },
  {
    name: "LEGAL",
    list: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
  },
];

const iconStyle = {
  cursor: "pointer",
  bgcolor: "#F2F2F2",
  borderRadius: 2,
  p: 1,
  alignItems: "center",
  justifyContent: "center",
};

export default function Footer() {
  return (
    <Grid container mt={12} pt={6} spacing={{ xs: 4, md: 0 }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }} container direction="column" py={6} spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <img src={LogoIcon} alt="icon" style={{ width: 50, height: 50 }} />
          <Typography
            variant="h4"
            fontWeight="semibold"
            sx={{ fontWeight: "bold" }}>
            Loft.
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" align="center">
          © 2025 Loft. | All Rights Reserved
        </Typography>
      </Grid>
      {footerContent.map((data, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 2 }} sx={{ p: { xs: 4, md: 0 } }} key={index}>
          <Typography variant="h6" fontWeight="bold">
            {data.name}
          </Typography>
          <List>
            {data.list.map((item, index) => (
              <ListItem key={index} sx={{ py: "4px" }}>
                <ListItemText
                  primary={item}
                  sx={{ color: "text.secondary" }}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}

      <Grid
        size={12}
        container
        mt={1}
        py={2}
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ borderTop: 1, borderColor: "#F2F2F2" }}>
        <Stack sx={iconStyle}>
          <FacebookIcon></FacebookIcon>
        </Stack>
        <Stack sx={iconStyle}>
          <GoogleIcon></GoogleIcon>
        </Stack>
        <Stack sx={iconStyle}>
          <LinkedInIcon></LinkedInIcon>
        </Stack>
      </Grid>
    </Grid>
  );
}
