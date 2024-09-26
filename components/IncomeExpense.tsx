import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { formatNumberWithCommas } from "@/lib/utils";

interface IncomeExpenseProps {}

const IncomeExpense = async (props: IncomeExpenseProps) => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="income-expense-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          ${formatNumberWithCommas(Number(income?.toFixed(2)))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          ${formatNumberWithCommas(Number(expense?.toFixed(2)))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
