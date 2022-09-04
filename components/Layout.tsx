import React from "react";
import styles from "./layout.module.css";

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { header, children, footer } = props;
  return (
    <main className={styles.main}>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </main>
  );
}
