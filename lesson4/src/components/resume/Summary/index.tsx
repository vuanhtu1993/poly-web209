import styles from "./Summary.module.css";

interface Props {
  fullName: string;
  jobTitle: string;
}

function Summary({ fullName, jobTitle }: Props) {
  return (
    <header className={styles.container}>
      <h1 className={styles.fullName}>{fullName}</h1>
      <p className={styles.jobTitle}>{jobTitle}</p>
    </header>
  );
}

export default Summary