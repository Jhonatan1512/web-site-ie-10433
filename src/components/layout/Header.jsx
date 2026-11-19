import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SCHOOL_INFO } from "../../data/schoolData";
import { MaterialIcon } from "../ui/MaterialIcon";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.mainHeader}>
      {/* Nivel 1: Barra institucional superior de extremo a extremo */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topLeft}>
            <span className={styles.lemaTop}>
              <MaterialIcon name="study" size={16} />
              "{SCHOOL_INFO.motto}"
            </span>
            <span className={styles.locationTop}>
              <MaterialIcon name="location" size={15} />
              Lajas, Chota - Cajamarca
            </span>
          </div>

          <div className={styles.topRight}>
            <Link to="/preguntas">Preguntas Frecuentes</Link>
            <Link to="/contactos">Contáctanos</Link>
            <span className={styles.badgeNivel}>Nivel Primaria</span>
          </div>
        </div>
      </div>

      {/* Nivel 2: Navegación principal limpia */}
      <nav className={styles.navMain} aria-label="Navegación principal">
        <Link to="/" className={styles.brandBox} onClick={closeMenu}>
          <img
            src={SCHOOL_INFO.logo}
            alt={`Insignia ${SCHOOL_INFO.name}`}
            className={styles.brandLogo}
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>{SCHOOL_INFO.name}</span>
            <span className={styles.brandSubtitle}>{SCHOOL_INFO.locationShort}</span>
          </div>
        </Link>

        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className={styles.mobileCtaItem}>
            <Link to="/matriculas" className={styles.mobileCtaBtn} onClick={closeMenu}>
              <MaterialIcon name="enrollment" size={18} />
              <span>Matrículas 2026</span>
            </Link>
          </li>
        </ul>

        <div className={styles.navActions}>
          <NavLink
            to="/matriculas"
            className={({ isActive }) =>
              `${styles.ctaMatricula} ${isActive ? styles.ctaMatriculaActive : ""}`
            }
          >
            <MaterialIcon name="enrollment" size={18} />
            <span>Matrículas</span>
          </NavLink>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}