import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.cardShell}>
      <img
        src="picture.png"
        alt="Profile"
        className={styles.profileImage}
      />
      <h3 className={styles.nameText}>Mark Jason Buot</h3>
      <p className={styles.ageText}>Age: 19</p>
      <p className={styles.bioText}>
        Active in sports, especially basketball.
      </p>
    </div>
  );
}
