import { Transaction } from "@/types/Transaction";
import { formatPriceWithCommas } from "@/lib/utils";
import { toast } from "react-toastify";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {formatPriceWithCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
