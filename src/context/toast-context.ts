import { createContext } from "react";
import { method, ToastType } from "../types/toast";

interface ToastContextInterface {
  toasts: ToastType[];
  addToast: (message: string, method: method) => void;
}

export const ToastContext = createContext<ToastContextInterface>({
  toasts: [],
  addToast: () => {},
});
