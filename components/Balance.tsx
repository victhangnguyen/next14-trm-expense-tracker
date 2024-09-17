import { FC } from "react";
import getUserBalance from "@/app/actions/getUserBalance";

interface BalanceProps {}

const Balance: FC<BalanceProps> = async (BalanceProps) => {
  const { balance } = await getUserBalance();
  return (
    <>
      <h4>Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
