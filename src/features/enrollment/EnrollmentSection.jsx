import { SectionHeader } from "../../components/ui/SectionHeader";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import { ENROLLMENT_INFO, SCHOOL_INFO } from "../../data/schoolData";
import styles from "./EnrollmentSection.module.css";

export function EnrollmentSection() {
  const whatsappMatricula = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola, deseo información sobre vacantes y matrícula ${ENROLLMENT_INFO.year} en la I.E. N° 10433 de Lajas.`
  )}`;

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          tag={`Admisión Escolar ${ENROLLMENT_INFO.year}`}
          title="Proceso de Matrículas"
          description="Formación integral de 1° a 6° grado de primaria en un entorno seguro, inclusivo y guiado por valores."
        />

        <div className={styles.enrollmentBanner}>
          <div className={styles.bannerInfo}>
            <span className={styles.bannerBadge}>{ENROLLMENT_INFO.status}</span>
            <h3>Inscripciones y Traslados {ENROLLMENT_INFO.year}</h3>
            <p>
              Atención presencial en secretaría ({ENROLLMENT_INFO.schedule}) o mediante orientación
              directa por nuestro canal institucional.
            </p>
          </div>
          <a
            href={whatsappMatricula}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-naranja"
          >
            <MaterialIcon name="chat" size={20} />
            <span>Consultar Vacante</span>
          </a>
        </div>

        <div className={styles.stepsGrid}>
          {ENROLLMENT_INFO.steps.map((item) => (
            <div className={styles.stepCard} key={item.step}>
              <span className={styles.stepNumber}>{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.reqBox}>
          <div className={styles.reqHeader}>
            <MaterialIcon name="document" size={26} />
            <h3>Requisitos para Matrícula o Traslado</h3>
          </div>
          <ul className={styles.reqList}>
            {ENROLLMENT_INFO.requirements.map((req) => (
              <li className={styles.reqItem} key={req}>
                <MaterialIcon name="check" size={20} className={styles.reqIcon} />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}