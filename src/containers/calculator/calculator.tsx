import { useCallback, useState } from "react";
import { ExpenseFormType, ExpenseType } from "../../types/expense";
import CalculatorExpense from "./calculator-expense";
import CalculatorForm from "./calculator-form";
import Styles from "./calculator.module.css";
import CalculatorHeader from "./calculator-header";

const Calculator = () => {
  const [data, setData] = useState<ExpenseType[]>([]);

  const handleSubmit = useCallback((formData: ExpenseFormType) => {
    const { name, cost } = formData;
    setData((prevData) => {
      return [
        ...prevData,
        { id: new Date().getTime(), name, cost: Number(cost) },
      ];
    });
  }, []);

  const sum = data.reduce((prev, curr) => {
    return prev + curr.cost;
  }, 0);

  return (
    <>
      <CalculatorHeader />
      <div className={Styles.container}>
        <CalculatorForm onSubmit={handleSubmit} />
        <CalculatorExpense expenses={data} setExpenses={setData} />
      </div>
      <h3 className={Styles.expense_sum}>총 지출 : {sum} 원</h3>
    </>
  );
};

export default Calculator;
