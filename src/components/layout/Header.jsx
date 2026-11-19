import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SCHOOL_INFO } from "../../data/schoolData";
import styles from "./Header.module.css";
import MaterialIcon from "../ui/MaterialIcon";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
 
  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerContainer}>
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

        <div className={styles.navWrapper}>
          <div className={styles.topGreenBar}>
            <span className={styles.lemaTop}>
              <MaterialIcon name="study" size={18} />
              "{SCHOOL_INFO.motto}"
            </span>
            <div className={styles.topLinks}>
              <Link to="/preguntas">Preguntas Frecuentes</Link>
              <Link to="/contactos">Contáctanos</Link>
              <span className={styles.badgeNivel}>Nivel Primaria</span>
            </div>
          </div>

          <div className={styles.bottomNavBar}>
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
 
            <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive && !link.path.includes("#") ? styles.active : ""}`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}