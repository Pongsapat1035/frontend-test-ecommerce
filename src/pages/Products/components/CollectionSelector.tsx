import { useState, useEffect } from "react";
import { Checkbox, Box, Typography } from "@mui/material";
import { useQueryProduct } from "../../../queryContext";

export default function CollectionSelector({ value }: { value: string }) {
  const [checked, setChecked] = useState(false);
  const { queryData, updateQuery } = useQueryProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const { collection } = queryData;

    setChecked(checked);

    if (checked) {
      collection.push(name);
    } else {
      const removeIndex = collection.findIndex((el) => el === name);
      collection.splice(removeIndex, 1);
    }

    updateQuery({ collection });
  };

  useEffect(() => {
    const { collection } = queryData;
    const isChecked = collection.some((el) => el === value);
    setChecked(isChecked);
  }, [queryData]);

  return (
    <label style={{ display: "block" }}>
      <Box
        sx={{
          border: checked ? "2px solid #ffab36" : "2px solid #ccc",
          bgcolor: checked ? "rgb(255, 235, 199)" : "transparent",
          borderRadius: 30,
          py: "2px",
          px: "8px",
          display: "flex",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
          userSelect: "none",
        }}>
        <Checkbox
          name={value}
          checked={checked}
          onChange={handleChange}
          sx={{ display: "none" }}
        />
        <Typography
          variant="body1"
          fontSize={14}
          sx={{ color: checked ? "primary.main" : "primary.light" }}>
          {value}
        </Typography>
      </Box>
    </label>
  );
}
