import styles from "./SectionHeader.module.css";

export function SectionHeader({ tag, title, description }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionTag}>{tag}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}