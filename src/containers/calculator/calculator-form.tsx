import { useCallback, useContext, useState } from "react";
import { ExpenseFormType } from "../../types/expense";
import Styles from "./calculator-form.module.css";
import { ToastContext } from "../../context/toast-context";

interface CalculatorFormProps {
  onSubmit: (formData: ExpenseFormType) => void;
}

const initialState: ExpenseFormType = {
  name: "",
  cost: "",
};

const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const [formData, setFormData] = useState<ExpenseFormType>(initialState);

  const { addToast } = useContext(ToastContext);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
      setFormData(initialState);
      addToast("지출이 추가되었습니다.", "post");
    },
    [addToast, formData, onSubmit]
  );

  return (
    <form className={Styles.form_container} onSubmit={handleSubmit}>
      <div className={Styles.flex_box}>
        <div className={Styles.container_item}>
          <h4>지출 항목</h4>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={16}
            required
          />
        </div>
        <div className={Styles.container_item}>
          <h4>비용</h4>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </div>
      </div>
      <div>
        <button type="submit">제출</button>
      </div>
    </form>
  );
};

export default CalculatorForm;
