"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import getUserBalance from "./getUserBalance";

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });

    const amounts = transactions.map((transaction) => transaction.amount);

    const initialIncome = 0;
    const income = amounts
      .filter((amount) => amount > 0)
      .reduce((acc, cur) => acc + cur, initialIncome);

    const initialExpense = 0;
    const expense = amounts
      .filter((amount) => amount < 0)
      .reduce((acc, cur) => acc + cur, initialExpense);

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getIncomeExpense;
