import Image from "next/image";
import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";
//! comps
import Guest from "@/components/Guest";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <AddTransaction />
    </main>
  );
}
