import { SectionHeader } from "../../components/ui/SectionHeader";
import { FACULTY_LIST } from "../../data/schoolData";
import styles from "./FacultySection.module.css";
import MaterialIcon from "../../components/ui/MaterialIcon";

export function FacultySection() {
  return (
    <section id="plana-docente" className="section-padding">
      <div className="container">
        <SectionHeader
          tag="Equipo Pedagógico"
          title="Plana Docente"
          description="Profesionales dedicados a guiar el aprendizaje de nuestros estudiantes de 1° a 6° grado de primaria."
        />

        <div className={styles.docentesGrid}>
          {FACULTY_LIST.map((docente) => (
            <div className={styles.docenteCard} key={docente.badge}>
              <div className={styles.docenteAvatar}>
                <MaterialIcon name={docente.icon} size={40} />
              </div>
              <span className={styles.gradoBadge}>{docente.badge}</span>
              <h3>{docente.role}</h3>
              <p>{docente.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}