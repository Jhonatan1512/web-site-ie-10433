import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import { MISSION_VISION_DATA } from "../../data/misinVisionData";
import styles from "./MissionVision.module.css";

export function MissionVision() {
  const { tag, title, subtitle, mission, vision, pillarsTitle, pillars } = MISSION_VISION_DATA;
  const [activePillarId, setActivePillarId] = useState(pillars[0].id);

  const currentPillar = pillars.find((item) => item.id === activePillarId) || pillars[0];

  return (
    <section id="mision-vision" className={`section-padding ${styles.sectionWrapper}`}>
      <div className={styles.ambientGlowLeft} aria-hidden="true" />
      <div className={styles.ambientGlowRight} aria-hidden="true" />

      <div className="container">
        <SectionHeader tag={tag} title={title} description={subtitle} />

        <div className={styles.cardsContainer}>
          <article className={styles.missionCard}>
            <div>
              <div className={styles.cardTopRow}>
                <div className={styles.missionIconBox}>
                  <MaterialIcon name={mission.icon} size={28} />
                </div>
                <span className={styles.missionBadge}>{mission.badge}</span>
              </div>

              <h3 className={styles.missionTitle}>{mission.title}</h3>
              <p className={styles.missionBody}>{mission.description}</p>
            </div>

            <div className={`${styles.chipsRow} ${styles.missionChipsBorder}`}>
              {mission.highlights.map((chip) => (
                <span key={chip} className={styles.missionChip}>
                  <MaterialIcon name="verified" size={14} />
                  <span>{chip}</span>
                </span>
              ))}
            </div>
          </article>

          <div className={styles.bridgeBadge} aria-hidden="true">
            <MaterialIcon name="arrowRight" size={22} />
          </div>

          <article className={styles.visionCard}>
            <div>
              <div className={styles.cardTopRow}>
                <div className={styles.visionIconBox}>
                  <MaterialIcon name={vision.icon} size={28} />
                </div>
                <span className={styles.visionBadge}>{vision.badge}</span>
              </div>

              <h3 className={styles.visionTitle}>{vision.title}</h3>
              <p className={styles.visionBody}>{vision.description}</p>
            </div>

            <div className={`${styles.chipsRow} ${styles.visionChipsBorder}`}>
              {vision.highlights.map((chip) => (
                <span key={chip} className={styles.visionChip}>
                  <MaterialIcon name="award" size={14} />
                  <span>{chip}</span>
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.pillarsPanel}>
          <div className={styles.pillarsHeader}>
            <h3 className={styles.pillarsHeading}>{pillarsTitle}</h3>

            <div className={styles.pillarsTabs} role="tablist" aria-label="Pilares institucionales">
              {pillars.map((pillar) => {
                const isActive = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ""}`}
                    onClick={() => setActivePillarId(pillar.id)}
                  >
                    <span className={styles.tabNumber}>{pillar.number}</span>
                    <span>{pillar.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div key={currentPillar.id} className={styles.pillarDetailGrid} role="tabpanel">
            <div className={styles.pillarSummary}>
              <div className={styles.pillarSummaryIcon}>
                <MaterialIcon name={currentPillar.icon} size={24} />
              </div>
              <div>
                <h4>{currentPillar.title}</h4>
                <span>{currentPillar.tagline}</span>
              </div>
            </div>

            <div className={styles.pillarSplit}>
              <div className={styles.splitBox}>
                <strong>Aplicación en la Misión</strong>
                {currentPillar.missionLink.replace("En el aula hoy: ", "")}
              </div>
              <div className={`${styles.splitBox} ${styles.splitBoxAccent}`}>
                <strong>Impacto en la Visión</strong>
                {currentPillar.visionLink.replace("Hacia el futuro: ", "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}