import React from "react";
import styles from "./card.module.css";

interface Props {
  uri: string;
  title: string;
  description: string;
}

export default function Card(props: Props) {
  const { uri, title, description } = props;
  return (
    <a href={uri} className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}
