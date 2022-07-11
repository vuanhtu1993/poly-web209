import styles from "./Education.module.css";

export default function Education({ other }) {
  return (
    <section className={styles.container}>
      {other.map((datum) => (
        <>
          <h2 className={styles.title}>{datum.name}</h2>
          <article key={datum.major} className={styles.box}>
            <time className={styles.duration}>{datum.duration}</time>
            <h3 className={styles.major}>{datum.major}</h3>
            <p className={styles.place}>{datum.place}</p>
          </article>
        </>
      ))}
    </section>
  );
}
