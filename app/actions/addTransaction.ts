"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


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

  //! Add transaction to database
  try {
    await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });
  } catch (error) {
    return { error: "Transaction not added" };
  }

  //! Revalidate the path
  revalidatePath("/");

  //! Return the transaction data
  const transactionData: TransactionData = { text, amount };

  return { data: transactionData };
}

export default addTransaction;

//! viết lệnh chuyern chữ thường thành chữ hoa
