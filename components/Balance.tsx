import { FC } from "react";
import getUserBalance from "@/app/actions/getUserBalance";
import { formatNumberWithCommas } from "@/lib/utils";

interface BalanceProps {}

const Balance: FC<BalanceProps> = async (BalanceProps) => {
  const { balance } = await getUserBalance();
  return (
    <>
      <h4>Balance</h4>
      <h1>${formatNumberWithCommas(Number(balance?.toFixed(2)) ?? 0)}</h1>
    </>
  );
};

export default Balance;
