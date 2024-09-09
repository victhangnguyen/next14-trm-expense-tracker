"use server";

import { auth } from "@clerk/nextjs/server";


interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  // TODO: Implement the logic to add a transaction to the database
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  //! Check for input values
  if (!textValue || !amountValue) {
    return { error: "Text or amount is missing" };
  }

  const text: string = textValue.toString(); //! Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); //! Parse amount as number

  //! Get loggedIn user
  const { userId } = auth();
  if (!userId) {
    return { error: "User not found" };
  }

  const transactionData: TransactionData = { text, amount };

  return { data: transactionData };
}

export default addTransaction;
