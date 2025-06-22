import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { alpha, styled } from "@mui/material/styles";
import { useForm } from "../pages/Checkout/formContext";

const InputTag = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 16,
    padding: "10px 15px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["Inria sans"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

function InputBox({
  type,
  title,
  name,
  holder,
  error,
}: {
  type: string;
  title: string;
  holder: string;
  error: string;
  name: string;
}) {
  const { updateForm, errorMsg } = useForm();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateForm({ name, value });
  };
  return (
    <FormControl variant="standard" fullWidth error={error ? true : false}>
      <InputLabel shrink sx={{ fontWeight: "bold", color: "text.primary" }}>
        {title}
      </InputLabel>
      <InputTag
        name={name}
        type={type}
        placeholder={holder}
        onBlur={handleChange}></InputTag>
      <FormHelperText
        sx={{
          height: 20,
          textAlign: "right",
          color: "error.main",
        }}>
        {errorMsg[name]}
      </FormHelperText>
    </FormControl>
  );
}

export default InputBox;
