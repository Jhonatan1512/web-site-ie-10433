import { SectionHeader } from "../../components/ui/SectionHeader";
import { SCHOOL_INFO, VALUES_LIST } from "../../data/schoolData";
import styles from "./About.module.css";
import { MaterialIcon } from "../../components/ui/MaterialIcon";

export function About() {
  return (
    <section id="quienes-somos" className="section-padding">
      <div className="container">
        <SectionHeader tag="Nuestra Historia e Identidad" title="Quiénes Somos" />

        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageBox}>
            <img
              src={SCHOOL_INFO.facadeImg}
              alt="Fachada I.E. N° 10433 Lajas"
              className={styles.aboutImg}
            />
            <div className={styles.aboutBadge}>{SCHOOL_INFO.name} • Lajas</div>
          </div>
 
          <div className={styles.aboutContent}>
            <h3>Comprometidos con la niñez de Lajas</h3>
            <p>
              La <strong>Institución Educativa Primaria N° 10433</strong>, ubicada en el distrito de
              Lajas, provincia de Chota, región Cajamarca, es un centro educativo dedicado
              exclusivamente a la formación integral de niños y niñas del nivel primario.
            </p>
            <p>
              Guiados por nuestros pilares de <em>"{SCHOOL_INFO.motto}"</em> y bajo el lema{" "}
              <em>"{SCHOOL_INFO.slogan}"</em>, promovemos el pensamiento crítico, la creatividad, el
              respeto cívico y el compañerismo.
            </p>

            <div className={styles.valoresMiniGrid}>
              {VALUES_LIST.map((valor) => (
                <div className={styles.valorPill} key={valor.label}>
                  <MaterialIcon name={valor.icon} size={20} className={styles.valorIcon} />
                  <span>{valor.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}