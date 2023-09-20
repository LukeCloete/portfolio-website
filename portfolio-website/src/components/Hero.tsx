import React from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.mainDiv}>
        <h1 className={styles.bigTitle}>
          <span className={styles.welcomeTexjt}>Welcome</span> to my blog{" "}
        </h1>
        <div className={styles.research}>scroll down to discover</div>
        <div className={styles.line} />
      </div>
    </main>
  );
}
