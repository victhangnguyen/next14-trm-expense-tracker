interface IncomeExpenseProps {}

const IncomeExpense = (props: IncomeExpenseProps) => {
  return (
    <div className="income-expense-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$700</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">$200</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
