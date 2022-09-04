import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>Welcome to React Lazyload Testing</h1>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        suscipit in dolores ut mollitia eaque incidunt iusto veniam, quasi sunt
        repellat accusamus, accusantium quam sed odio exercitationem tenetur
        animi illo.
      </p>
    </header>
  );
}
