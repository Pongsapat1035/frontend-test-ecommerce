import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function AccordionTag() {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <Typography component="span" fontWeight="bold">
          Description
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ color: "text.secondary", fontWeight: "light" }}>
        "This stunning modern sofa combines comfort and style with its sleek
        design and premium upholstery. Perfect for contemporary living spaces,
        featuring durable hardwood frame and high-density foam cushions.
        Available in multiple colors to match your decor."
      </AccordionDetails>
    </Accordion>
  );
}
