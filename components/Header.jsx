import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerBox}>
      <h1 className={styles.mainTitle}>My Profile</h1>
      <h2 className={styles.subTitle}>Mark Jason Buot</h2>
    </header>
  );
}
