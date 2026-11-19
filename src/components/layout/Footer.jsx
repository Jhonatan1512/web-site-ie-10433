import { Link } from "react-router-dom";
import { NAV_LINKS, SCHOOL_INFO } from "../../data/schoolData";
import { MaterialIcon } from "../ui/MaterialIcon";
import styles from "./Footer.module.css";

const COMMUNITY_LINKS = [
  { path: "/matriculas", label: "Matrículas y Vacantes" },
  { path: "/preguntas", label: "Preguntas Frecuentes" },
  { path: "/plana-docente", label: "Equipo Docente" },
  { path: "/galeria", label: "Vida Escolar y Galería" },
];

export function Footer() {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola, deseo información sobre la I.E. N° 10433 de Lajas."
  )}`;

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.hillsWave} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,78 C240,14 480,108 780,48 C1050,-6 1270,76 1440,38 L1440,120 L0,120 Z"
            fill="rgba(25, 104, 71, 0.32)"
          />
          <path
            d="M0,92 C330,120 560,26 890,72 C1150,108 1320,42 1440,62 L1440,120 L0,120 Z"
            fill="#165E40"
          />
          <path
            d="M0,66 C290,12 530,112 850,66 C1130,26 1310,88 1440,56 L1440,120 L0,120 Z"
            fill="var(--primary)"
          />
          <path
            d="M0,66 C290,12 530,112 850,66 C1130,26 1310,88 1440,56"
            fill="none"
            stroke="rgba(229, 169, 26, 0.42)"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <footer className={styles.mainFooter}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <span className={styles.ctaBadge}>Educación Primaria • 1° a 6° Grado</span>
              <h3>Formando el futuro de la niñez lajeña</h3>
              <p>
                Conoce nuestro proceso de admisión o comunícate directamente con la dirección del plantel.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link to="/matriculas" className="btn-pill btn-naranja">
                <MaterialIcon name="enrollment" size={19} />
                <span>Ver Matrículas</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-glass"
              >
                <MaterialIcon name="chat" size={19} />
                <span>Escríbenos</span>
              </a>
            </div>
          </div>

          <div className={styles.footerGrid}>
            <div>
              <div className={styles.brandHeader}>
                <img
                  src={SCHOOL_INFO.logo}
                  alt={`Insignia ${SCHOOL_INFO.name}`}
                  className={styles.brandLogo}
                />
                <div>
                  <h4 className={styles.brandTitle}>{SCHOOL_INFO.name}</h4>
                  <span className={styles.brandSubtitle}>{SCHOOL_INFO.locationShort}</span>
                </div>
              </div>

              <p className={styles.brandDesc}>
                Institución educativa dedicada a la formación integral, humana y académica de niños y
                niñas en el distrito de Lajas, Chota.
              </p>

              <div className={styles.mottoCard}>
                <span className={styles.mottoQuote}>
                  <MaterialIcon name="study" size={16} />
                  "{SCHOOL_INFO.motto}"
                </span>
                <span className={styles.mottoSub}>{SCHOOL_INFO.slogan}</span>
              </div>

              <div className={styles.socialRow}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCircle}
                  aria-label="WhatsApp Institucional"
                  title="WhatsApp"
                >
                  <MaterialIcon name="chat" size={20} />
                </a>
                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCircle}
                  aria-label="Facebook Institucional"
                  title="Facebook"
                >
                  <MaterialIcon name="facebook" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className={styles.colTitle}>Institución</h4>
              <ul className={styles.linkList}>
                {NAV_LINKS.map((link) => (
                  <li className={styles.linkItem} key={link.path}>
                    <Link to={link.path}>
                      <MaterialIcon name="chevronRight" size={17} className={styles.linkIcon} />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Comunidad</h4>
              <ul className={styles.linkList}>
                {COMMUNITY_LINKS.map((item) => (
                  <li className={styles.linkItem} key={item.path}>
                    <Link to={item.path}>
                      <MaterialIcon name="chevronRight" size={17} className={styles.linkIcon} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Contacto Directo</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <MaterialIcon name="location" size={19} />
                  </span>
                  <span>{SCHOOL_INFO.fullLocation}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <MaterialIcon name="schedule" size={19} />
                  </span>
                  <span>{SCHOOL_INFO.schedule}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <MaterialIcon name="phone" size={19} />
                  </span>
                  <span>{SCHOOL_INFO.phoneDisplay}</span>
                </div>
              </div>

              <div className={styles.statusPill}>
                <span className={styles.statusDot}></span>
                <span>Turno Mañana • Atención Presencial</span>
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className={styles.footerBottom}>
            <p>
              © {new Date().getFullYear()} {SCHOOL_INFO.name} - Lajas. Todos los derechos reservados.
            </p>
            <span className={styles.ugelTag}>UGEL Chota • DRE Cajamarca</span>
          </div>
        </div>
      </footer>
    </div>
  );
}