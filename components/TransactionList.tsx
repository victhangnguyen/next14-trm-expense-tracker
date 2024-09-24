import { Transaction } from "@/types/Transaction";

interface TransactionListProps {}

const TransactionList = (props: TransactionListProps) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions?.map((transaction: Transaction) => (
          <p>{transaction.text}</p>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
