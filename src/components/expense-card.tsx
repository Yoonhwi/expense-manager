import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ExpenseType } from "../types/expense";
import Styles from "./expense-card.module.css";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ToastContext } from "../context/toast-context";

interface ExpenseCardProps {
  expense: ExpenseType;
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
}

const ExpenseCard = ({ expense, setExpenses }: ExpenseCardProps) => {
  const [isModify, setIsModify] = useState(false);
  const { addToast } = useContext(ToastContext);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleDelete = useCallback(
    (id: number) => {
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
      addToast("지출이 삭제되었습니다.", "delete");
    },
    [addToast, setExpenses]
  );

  const updateExpense = useCallback(
    (id: number) => {
      if (!ref.current || !isModify) return;
      const inputs = ref.current.querySelectorAll("input");
      const name = inputs[0].value;
      const cost = Number(inputs[1].value);

      inputs.forEach((input) => {
        input.setAttribute("disabled", "true");
        input.classList.remove(Styles.input_modify);
      });

      setExpenses((prev) =>
        prev.map((expense) => {
          if (expense.id === id) {
            return {
              ...expense,
              name,
              cost,
            };
          }
          return expense;
        })
      );

      setIsModify(false);
      addToast("지출이 수정되었습니다.", "put");
    },
    [addToast, isModify, setExpenses]
  );

  useEffect(() => {
    if (!isModify) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        updateExpense(expense.id);
        console.log("hit");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addToast, expense.id, isModify, updateExpense]);

  useEffect(() => {
    if (!ref.current) return;
    if (isModify) {
      const inputs = ref.current.querySelectorAll("input");
      inputs.forEach((input) => {
        input.removeAttribute("disabled");
        input.classList.add(Styles.input_modify);
      });
    } else {
      updateExpense(expense.id);
    }
  }, [expense.id, isModify, updateExpense]);

  return (
    <div className={Styles.container} ref={ref}>
      <div className={Styles.input_box}>
        <input
          defaultValue={expense.name}
          disabled
          className={Styles.input_name}
          maxLength={16}
          type="text"
          required
        />
      </div>
      <div className={Styles.flex_box}>
        <input
          defaultValue={expense.cost}
          disabled
          className={Styles.input_cost}
          maxLength={10}
          type="number"
          required
        />
        <div className={Styles.icon_box}>
          <FaPencilAlt
            onClick={() => {
              if (isModify) updateExpense(expense.id);
              else setIsModify(true);
            }}
          />
          <MdDeleteForever
            style={{
              fontSize: "24px",
            }}
            onClick={() => handleDelete(expense.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
