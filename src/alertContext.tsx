import {
  createContext,
  useContext,
  useState,
  type ReactElement,
} from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export interface MyContextType {
  toggleAlert: Function;
}

const AlertContext = createContext<MyContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactElement }) {
  const [alertState, setAlertState] = useState(false);
  const [alertData, setAlertData] = useState({
    type: "",
    msg: "",
  });

  const toggleAlert = (type: string, msg: string) => {
    setAlertState(true);
    setTimeout(() => {
      setAlertData((prev) => ({
        ...prev,
        type,
        msg,
      }));
    }, 3000);
  };

  const alertBadge = alertState ? (
    <Alert severity="success" sx={{ position: "fixed", bottom: 20, right: 20 }}>
      <AlertTitle>{alertData.type}</AlertTitle>
      {alertData.msg}
    </Alert>) : ("");

  return (
    <AlertContext.Provider value={{ toggleAlert }}>
      {children}
      {alertBadge}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};
