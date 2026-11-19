import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroSpacer}></div>
        <div className={styles.heroTextBox}>
          <span className={styles.heroTag}>Ayer, Hoy y Siempre • Lajas</span>
          <h1>Un lugar para descubrir todo lo que puedes lograr</h1>
          <p>
            En la Institución Educativa N° 10433 brindamos educación primaria integral que combina
            aprendizaje activo, valores y desarrollo de talentos en un entorno seguro.
          </p>
          <div className={styles.heroActions}>
            <Link to="/nuestra-escuela" className="btn-pill btn-naranja">
              Conoce nuestra escuela
            </Link>
            <Link to="/galeria" className="btn-pill btn-glass">
              Ver Galería
            </Link>
          </div> 
        </div>
      </div>
    </section>
  );
}