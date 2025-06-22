import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useQueryProduct } from "../../../queryContext";
import { useEffect, useState } from "react";

const materialData = [
  "Wood",
  "Metal",
  "Fabric",
  "Leather",
  "Glass",
  "Plastic/Acrylic",
];

export default function MaterialSelector() {
  const { queryData, updateQuery } = useQueryProduct();
  const [materialChecked, setMaterialChecked] = useState<string[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const { material } = queryData;

    if (checked) {
      material.push(name);
    } else {
      const removeIndex = material.findIndex((el) => el === name);
      material.splice(removeIndex, 1);
    }

    updateQuery({ material });
  };

  useEffect(() => {
    const { material } = queryData;
    setMaterialChecked(material);
  }, [queryData]);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        <Typography component="span" fontWeight="bold">
          Material
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup onChange={handleChange}>
          {materialData.map((item, index) => (
            <FormControlLabel
              control={<Checkbox />}
              name={item.toLocaleLowerCase()}
              key={index}
              label={item}
              checked={materialChecked.some(
                (el) => el === item.toLocaleLowerCase()
              )}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}
