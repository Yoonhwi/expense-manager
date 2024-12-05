import { useContext } from "react";
import { ToastContext } from "../../context/toast-context";
import Styles from "./toast-list.module.css";
import { FaCheckCircle } from "react-icons/fa";

const ToastList = () => {
  const { toasts } = useContext(ToastContext);

  return (
    <div className={Styles.toast_container}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={Styles.toast_item}
          style={{
            backgroundColor:
              toast.method === "delete" ? "var(--red)" : "var(--green)",
          }}
        >
          <FaCheckCircle
            style={{
              fontSize: "15px",
            }}
          />
          <p>{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastList;
