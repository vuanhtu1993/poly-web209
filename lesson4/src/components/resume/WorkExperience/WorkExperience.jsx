import Box from "./Box";
import styles from "./WorkExperience.module.css";

export default function WorkExperience({ projects }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.columnCard}>
        {projects.map((project) => (
          <Box key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
