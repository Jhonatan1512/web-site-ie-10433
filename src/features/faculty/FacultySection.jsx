import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import { FACULTY_FILTERS, FACULTY_HEADER, FACULTY_MEMBERS } from "../../data/facultyData";
import styles from "./FacultySection.module.css";

export function FacultySection() {
  const [selectedGrade, setSelectedGrade] = useState("todos");
  const [activeTeacher, setActiveTeacher] = useState(null);

  const visibleTeachers =
    selectedGrade === "todos"
      ? FACULTY_MEMBERS
      : FACULTY_MEMBERS.filter((teacher) => teacher.gradeId === selectedGrade);

  return (
    <section id="plana-docente" className="section-padding">
      <div className="container">
        <SectionHeader
          tag={FACULTY_HEADER.tag}
          title={FACULTY_HEADER.title}
          description={FACULTY_HEADER.description}
        />

        {/* Filtro por grado */}
        <div className={styles.filterBar} role="tablist" aria-label="Filtrar docentes por grado">
          {FACULTY_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={selectedGrade === filter.id}
              className={`${styles.filterBtn} ${
                selectedGrade === filter.id ? styles.filterBtnActive : ""
              }`}
              onClick={() => setSelectedGrade(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de tarjetas compactas */}
        <div className={styles.cardsGrid}>
          {visibleTeachers.map((docente) => (
            <article className={styles.card} key={docente.id}>
              {/* Avatar circular sobresaliente */}
              <div className={styles.avatarCircle}>
                {docente.photo ? (
                  <img src={docente.photo} alt={docente.name} className={styles.avatarImg} />
                ) : (
                  <div className={styles.avatarFallback} aria-hidden="true">
                    {docente.initials}
                  </div>
                )}
              </div>

              <h3 className={styles.teacherName}>{docente.name}</h3>
              <span className={styles.gradeLabel}>{docente.gradeTitle}</span>

              <div className={styles.metaBox}>
                <span className={styles.specialtyText}>{docente.specialty}</span>
                <span className={styles.expText}>
                  <MaterialIcon name="award" size={15} />
                  <span>{docente.experience}</span>
                </span>
              </div>

              <p className={styles.shortBio}>{docente.shortBio}</p>

              <button
                type="button"
                className={styles.learnMoreBtn}
                onClick={() => setActiveTeacher(docente)}
              >
                Conocer más
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal con trayectoria completa y contacto directo */}
      {activeTeacher && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-teacher-name"
          onClick={() => setActiveTeacher(null)}
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              aria-label="Cerrar detalle"
              onClick={() => setActiveTeacher(null)}
            >
              <MaterialIcon name="close" size={20} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalAvatar}>
                {activeTeacher.photo ? (
                  <img
                    src={activeTeacher.photo}
                    alt={activeTeacher.name}
                    className={styles.avatarImg}
                  />
                ) : (
                  <div className={styles.avatarFallback}>{activeTeacher.initials}</div>
                )}
              </div>
              <div>
                <span className={styles.modalGrade}>{activeTeacher.gradeTitle}</span>
                <h3 id="modal-teacher-name">{activeTeacher.name}</h3>
              </div>
            </div>

            <div className={styles.modalTags}>
              <span className={styles.modalTag}>{activeTeacher.specialty}</span>
              <span className={styles.modalTag}>{activeTeacher.experience}</span>
            </div>

            <p className={styles.modalStory}>{activeTeacher.story}</p>

            {/* Contacto directo del docente */}
            <div className={styles.modalContactBox}>
              <span className={styles.modalContactTitle}>Contacto Institucional</span>

              <a href={`mailto:${activeTeacher.email}`} className={styles.modalContactLink}>
                <span className={styles.modalContactIcon}>
                  <MaterialIcon name="email" size={18} />
                </span>
                <span>{activeTeacher.email}</span>
              </a>

              <a
                href={`tel:${activeTeacher.phone.replace(/\s+/g, "")}`}
                className={styles.modalContactLink}
              >
                <span className={styles.modalContactIcon}>
                  <MaterialIcon name="phone" size={18} />
                </span>
                <span>{activeTeacher.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}