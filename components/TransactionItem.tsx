import { Transaction } from "@/types/Transaction";
import { formatPriceWithCommas } from "@/lib/utils";
import { toast } from "react-toastify";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    try {
      await deleteTransaction(transactionId);

      toast.success("Transaction deleted");
    } catch (error) {
      toast.error("Error deleting transaction");
      console.log(error);
    }
  };
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {formatPriceWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-btn"
      ></button>
    </li>
  );
};

export default TransactionItem;
