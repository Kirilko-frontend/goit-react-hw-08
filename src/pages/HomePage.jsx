import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to your Contacts App💖</h1>
      <p className={styles.description}>
        This is your personal contact book. You can register or log in to
        securely manage your contacts, add new ones, update existing ones, and
        keep your connections organized and accessible anytime.
      </p>
    </section>
  );
}
