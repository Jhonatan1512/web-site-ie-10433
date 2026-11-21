import { Link } from "react-router-dom";
import { IDENTITY_ITEMS } from "../../data/schoolData";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import styles from "./IdentityStrip.module.css";

export function IdentityStrip() {
  return (
    <section className={styles.identitySection} aria-label="Pilares institucionales">
      <div className="container">
        <div className={styles.cardsGrid}>
          {IDENTITY_ITEMS.map((item) => (
            <article className={styles.infoCard} key={item.title}>
              <div>
                <div className={styles.cardTop}>
                  <span className={styles.iconBadge}>
                    <MaterialIcon name={item.icon} size={24} />
                  </span>
                  <span className={styles.pillTag}>{item.badge}</span>
                </div>

                <h2 className={styles.cardTitle}>{item.title}</h2>
                <span className={styles.cardSubtitle}>{item.subtitle}</span>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              <Link to={item.link} className={styles.cardLink}>
                <span>{item.linkLabel}</span>
                <MaterialIcon name="arrowRight" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}