import { Link } from "react-router-dom";
import { NAV_LINKS, SCHOOL_INFO } from "../../data/schoolData";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={`container ${styles.footerGrid}`}>
        <div>
          <h4>{SCHOOL_INFO.name} - LAJAS</h4>
          <p>Institución Educativa de Nivel Primaria</p>
          <p>Lajas, Chota, Cajamarca - Perú</p>
        </div>
        <div>
          <h4>Menú Principal</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Lema Institucional</h4>
          <p>"{SCHOOL_INFO.motto}"</p>
          <p>"{SCHOOL_INFO.slogan}"</p>
        </div>
      </div>
      <div className={styles.footerCopy}>
        <p>
          © {new Date().getFullYear()} {SCHOOL_INFO.name} - Lajas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}