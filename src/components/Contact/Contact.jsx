import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const { name, number } = contact;

  return (
    <div className={styles.contact}>
      <span className={styles.contactInfo}>
        {name}: {number}
      </span>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
