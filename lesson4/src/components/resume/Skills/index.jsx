import styles from "./Skills.module.css";

export default function Skills({ skills }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      {skills.map((skill) => (
        <article key={skill.title} className={styles.box}>
          <h3 className={styles.name}>{skill.title}</h3>
          <p className={styles.description}>
            {skill.technology.map((tech) => `${tech}, `)}...
          </p>
        </article>
      ))}
    </section>
  );
}
