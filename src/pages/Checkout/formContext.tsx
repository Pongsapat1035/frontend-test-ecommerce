import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";

interface FormData {
  [key: string]: any;
  name: string;
  address: string;
  tel: string;
  postcode: string;
}

export interface MyContextType {
  formData: FormData;
  errorMsg: FormData;
  updateForm: Function;
}

const FormContext = createContext<MyContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactElement }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    tel: "",
    postcode: "",
  });

  const [errorMsg, setErrorMsg] = useState<FormData>({
    name: "",
    address: "",
    tel: "",
    postcode: "",
  });

  const validateTel = (value: string) => {
    const regex = /^(?:\+66|0)[689]\d{8}$/;
    const result = regex.test(value);
    if (!result) return "Tel. number is incorrect format (088xxxxxxx)";
    return "";
  };

  const validatePostcode = (value: string) => {
    const regex = /^\d{5}$/;
    const result = regex.test(value);
    if (!result) return "Postcode is incorrect format (21xxx)";
    return "";
  };

  const updateForm = (data: { name: string; value: string }) => {
    const { name, value } = data;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let errorMsg = "";
    switch (name) {
      case "tel":
        errorMsg = validateTel(value);
        break;
      case "postcode":
        errorMsg = validatePostcode(value);
        break;
      default:
        errorMsg = value === "" ? "Require" : "";
    }

    setErrorMsg((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  useEffect(() => {
    console.log(errorMsg);
  }, [errorMsg]);

  return (
    <FormContext.Provider value={{ formData, updateForm, errorMsg }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormcontext must be used within a FormProvider");
  }
  return context;
};
