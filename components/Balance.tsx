import React, { FC } from "react";

interface BalanceProps {}

const Balance: FC<BalanceProps> = (BalanceProps) => {
  return (
    <>
      <h4>Balance</h4>
      <h1>$500</h1>
    </>
  );
};

export default Balance;
