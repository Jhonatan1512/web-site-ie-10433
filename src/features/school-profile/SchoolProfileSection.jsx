import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import { OUR_SCHOOL_DATA, SCHOOL_INFO } from "../../data/schoolData";
import styles from "./SchoolProfileSection.module.css";

export function SchoolProfileSection() {
  const { badge, title, subtitle, highlights, history, infrastructure, pillars } = OUR_SCHOOL_DATA;

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.heroBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerTag}>
              <MaterialIcon name="institution" size={17} />
              <span>{badge}</span>
            </span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          <div className={styles.statsBox}>
            {highlights.map((item) => (
              <div className={styles.statCard} key={item.label}>
                <span className={styles.statLabel}>{item.label}</span>
                <span className={styles.statValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.historyGrid}>
          <div className={styles.historyText}>
            <span className={styles.sectionEyebrow}>
              <MaterialIcon name="history" size={16} />
              <span>{history.tag}</span>
            </span>
            <h2>{history.title}</h2>
            {history.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className={styles.quoteHighlight}>
              <p>
                "{SCHOOL_INFO.motto} — {SCHOOL_INFO.slogan}"
              </p>
            </div>
          </div>

          <div className={styles.timeline}>
            {history.milestones.map((item) => (
              <div className={styles.timelineItem} key={item.period}>
                <span className={styles.timelinePeriod}>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infraSection}>
          <SectionHeader
            tag="Ambientes Escolares"
            title="Nuestra Infraestructura"
            description="Espacios diseñados para estimular la curiosidad, la seguridad y el bienestar diario de nuestros estudiantes."
          />

          <div className={styles.infraLayout}>
            <div className={styles.infraPhotoCard}>
              <img src={SCHOOL_INFO.facadeImg} alt={`Instalaciones ${SCHOOL_INFO.name}`} />
              <div className={styles.infraPhotoCaption}>
                <h3>Local Escolar • Distrito de Lajas</h3>
                <p>Ambientes dedicados exclusivamente a la educación primaria de 1° a 6° grado.</p>
              </div>
            </div>

            <div className={styles.infraCardsGrid}>
              {infrastructure.map((space) => (
                <div className={styles.infraCard} key={space.title}>
                  <span className={styles.infraIcon}>
                    <MaterialIcon name={space.icon} size={24} />
                  </span>
                  <h3>{space.title}</h3>
                  <p>{space.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionHeader
          tag="Propuesta Educativa"
          title="Lo que nos distingue"
          description="El compromiso de nuestra comunidad educativa se refleja en cada etapa del desarrollo infantil."
        />

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <div className={styles.pillarCard} key={pillar.title}>
              <span className={styles.pillarIcon}>
                <MaterialIcon name={pillar.icon} size={24} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomActions}>
          <div>
            <h3>¿Deseas conocer más sobre nuestra comunidad?</h3>
            <p>Explora nuestro equipo docente o revisa los requisitos para el proceso de matrícula.</p>
          </div>
          <div className={styles.actionGroup}>
            <Link to="/plana-docente" className={styles.btnOutline}>
              <span>Ver Plana Docente</span>
            </Link>
            <Link to="/matriculas" className="btn-pill btn-naranja">
              <MaterialIcon name="enrollment" size={19} />
              <span>Proceso de Matrículas</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}