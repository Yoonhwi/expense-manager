import { useCallback, useContext } from "react";
import ExpenseCard from "../../components/expense-card";
import { ExpenseType } from "../../types/expense";
import { ToastContext } from "../../context/toast-context";

interface CalculatorExpenseProps {
  expenses: ExpenseType[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
}

const CalculatorExpense = ({
  expenses,
  setExpenses,
}: CalculatorExpenseProps) => {
  const { addToast } = useContext(ToastContext);

  const handleDeleteAll = useCallback(() => {
    setExpenses([]);
    addToast("모든 항목이 삭제되었습니다", "delete");
  }, [addToast, setExpenses]);

  return (
    <div
      style={{
        display: expenses.length ? "flex" : "none",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {expenses.map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            setExpenses={setExpenses}
          />
        );
      })}
      {expenses.length && (
        <div>
          <button onClick={handleDeleteAll}>목록 지우기</button>
        </div>
      )}
    </div>
  );
};

export default CalculatorExpense;
