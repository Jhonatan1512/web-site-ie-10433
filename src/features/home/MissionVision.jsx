import { SectionHeader } from "../../components/ui/SectionHeader";
import styles from "./MissionVision.module.css";
import MaterialIcon from "../../components/ui/MaterialIcon";

export function MissionVision() {
  return (
    <section id="mision-vision" className="section-padding bg-soft">
      <div className="container">
        <SectionHeader tag="Horizonte Educativo" title="Misión y Visión" />

        <div className={styles.mvGrid}>
          <div className={`${styles.mvCard} ${styles.borderVerde}`}>
            <div className={styles.mvIcon}>
              <MaterialIcon name="mission" size={32} />
            </div>
            <h3>Nuestra Misión</h3>
            <p>
              Brindar una educación primaria de calidad, inclusiva y humanista, desarrollando
              competencias intelectuales, artísticas y físicas en nuestros estudiantes, fortaleciendo
              la práctica de valores éticos y morales en estrecha alianza con las familias de Lajas.
            </p>
          </div>

          <div className={`${styles.mvCard} ${styles.borderNaranja}`}>
            <div className={styles.mvIcon}>
              <MaterialIcon name="mission" size={32} />
            </div>
            <h3>Nuestra Visión</h3>
            <p>
              Ser una institución educativa primaria líder en el distrito de Lajas y la provincia de
              Chota, reconocida por su excelencia académica, disciplina escolar, innovación pedagógica
              y el compromiso permanente de su plana docente con el futuro de la niñez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}