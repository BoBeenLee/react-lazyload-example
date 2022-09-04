import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </header>
  );
}
