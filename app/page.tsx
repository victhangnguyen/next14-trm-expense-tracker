import Image from "next/image";
import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";
//! comps
import Guest from "@/components/Guest";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
    </main>
  );
}
// <main className={styles.main}>
// </main>
