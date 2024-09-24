import { getTransactions } from "@/app/actions/getTransactions";
//! Comps
import { Transaction } from "@/types/Transaction";
import { toast } from "react-toastify";

interface TransactionListProps {}

const TransactionList = async (props: TransactionListProps) => {
  const { transactions, error } = await getTransactions();

  if (error) {
    toast.error(error);
    return <p className="error">{error}</p>;
  }

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
