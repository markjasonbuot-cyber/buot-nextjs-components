import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <section className={styles.skillBlock}>
      <h3 className={styles.skillHeading}>Skills</h3>
      <ul className={styles.skillItems}>
        <li>C++</li>
        <li>Java</li>
        <li>Cooking</li>
      </ul>
    </section>
  );
}
