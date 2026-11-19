import { IDENTITY_ITEMS } from "../../data/schoolData";
import styles from "./IdentityStrip.module.css";

export function IdentityStrip() {
  return (
    <section className={styles.identityStrip}>
      <div className={`container ${styles.stripGrid}`}>
        {IDENTITY_ITEMS.map((item) => (
          <div className={styles.stripItem} key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}