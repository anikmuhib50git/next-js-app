import Counter from "./counter";
import styles from "./page.module.css";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>App Router</h1>
      <p className={styles.subtitle}>
        A tiny playground for testing Server and Client Components together.
      </p>
      <Counter />
    </main>
  );
}
