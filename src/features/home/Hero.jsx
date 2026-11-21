import { Link } from "react-router-dom";
import { useTypewriter } from "./useTypewriter";
import { WelcomeStudentsIllustration } from "./WelcomeStudentsIllustration";
import styles from "./Hero.module.css";

const HERO_HEADLINE = "Un lugar para descubrir todo lo que puedes lograr";

function PencilIcon({ isWriting }) {
  return (
    <span
      className={`${styles.pencilCursor} ${
        isWriting ? styles.pencilWriting : styles.pencilIdle
      }`}
      aria-hidden="true"
    >
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
        <path
          d="M23.5 5.5L30.5 12.5L13.5 29.5L5.5 30.5L6.5 22.5L23.5 5.5Z"
          fill="#F5C84C"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M25.5 3.5C26.6 2.4 28.4 2.4 29.5 3.5L32.5 6.5C33.6 7.6 33.6 9.4 32.5 10.5L30.5 12.5L23.5 5.5L25.5 3.5Z"
          fill="#D9622B"
        />
        <path d="M6.5 22.5L13.5 29.5L5.5 30.5L6.5 22.5Z" fill="#FDE6C4" />
        <path d="M6 26.8L9.2 30L5.5 30.5L6 26.8Z" fill="#18221D" />
      </svg>
    </span>
  );
}

export function Hero() {
  const { displayedText, isTyping } = useTypewriter(HERO_HEADLINE, 95, 2000);

  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.heroOverlay} />

      <div className={`container ${styles.heroGrid}`}>
        <WelcomeStudentsIllustration />

        <div className={styles.heroTextBox}>
          <span className={styles.heroTag}>Ayer, Hoy y Siempre • Lajas</span>

          <div className={styles.titleStage}>
            <span className={styles.titleGhost} aria-hidden="true">
              {HERO_HEADLINE}
            </span>
            <h1 className={styles.titleLive}>
              {displayedText}
              <PencilIcon isWriting={isTyping} />
            </h1>
          </div>

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