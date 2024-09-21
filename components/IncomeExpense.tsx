import getIncomeExpense from "@/app/actions/getIncomeExpense";

interface IncomeExpenseProps {}

const IncomeExpense = async (props: IncomeExpenseProps) => {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="income-expense-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
