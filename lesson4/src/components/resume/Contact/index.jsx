import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <address className={styles.container}>
      <ul className={styles.list}>
        {contact.map((info) => (
          <li key={info.type} className={styles.item}>
            {info.type}
            {": "}
            <a href={info.link} className={styles.link}>
              {info.label}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}
