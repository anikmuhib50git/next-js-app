"use client";

import { useState } from "react";
import styles from "./page.module.css";

const MILESTONES: Record<number, string> = {
  5: "🎉 Nice, five!",
  10: "🚀 Double digits!",
  25: "🏆 Quarter century!",
  50: "🤯 Halfway to a hundred!",
  100: "👑 Triple digits, legend.",
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const milestone = MILESTONES[count];

  return (
    <div className={styles.counter}>
      <h2 className={styles.count}>{count}</h2>
      <div className={styles.buttons}>
        <button
          type="button"
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          disabled={count === 0}
        >
          -
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          reset
        </button>
      </div>
      <p className={styles.milestone} aria-live="polite">
        {milestone ?? "Click + and see what happens…"}
      </p>
    </div>
  );
}
