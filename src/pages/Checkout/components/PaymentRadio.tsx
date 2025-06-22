import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";

interface PaymentOption {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function PaymentRadio({
  label,
  value,
  checked,
  onChange,
}: PaymentOption) {
  return (
    <label style={{ display: "block", marginBottom: 16, cursor: "pointer" }}>
      <Box
        sx={{
          border: checked ? "1px solid #ffab36" : "1px solid #ccc",
          borderRadius: "8px",
          minHeight: 85,
          padding: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
          transition: "0.2s",
          boxShadow: checked ? "0 0 8px rgba(25, 118, 210, 0.2)" : undefined,
          "&:hover": { boxShadow: "0 0 5px rgba(0,0,0,0.2)" },
        }}>
        <Radio
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
        />
        <Box>
          <strong>{label}</strong>
          <div style={{ fontSize: "12px", color: "gray" }}>
            {value === "cash"
              ? "No processing fees."
              : "secure, and flexible transactions."}
          </div>
        </Box>
      </Box>
    </label>
  );
}
