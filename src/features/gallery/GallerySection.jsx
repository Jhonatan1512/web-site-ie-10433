import { useState, useEffect, useCallback } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import MaterialIcon from "../../components/ui/MaterialIcon";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../../data/galeriaData";
import styles from "./GallerySection.module.css";


function ThemeArtwork({ theme, size = 44 }) {
  switch (theme) {
    case "sports":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <circle cx="12" cy="12" r="9.5" />
          <polygon points="12 7.5 15.8 10.3 14.3 14.8 9.7 14.8 8.2 10.3" />
          <line x1="12" y1="2.5" x2="12" y2="7.5" />
          <line x1="20.8" y1="9" x2="15.8" y2="10.3" />
          <line x1="17.6" y1="19.5" x2="14.3" y2="14.8" />
          <line x1="6.4" y1="19.5" x2="9.7" y2="14.8" />
          <line x1="3.2" y1="9" x2="8.2" y2="10.3" />
        </svg>
      );
    case "civic":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M5 3v18" strokeLinecap="round" />
          <path d="M5 4h13l-2.5 4.5L18 13H5" strokeLinejoin="round" />
        </svg>
      );
    case "science":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M9 3h6M10 3v5.5L5 17a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8.5V3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 14h9" />
        </svg>
      );
    case "reading":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H11v16H4.5A2.5 2.5 0 0 0 2 21V5.5z" />
          <path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H13v16h6.5a2.5 2.5 0 0 1 2.5 2.5V5.5z" />
        </svg>
      );
    case "eco":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M12 21V11" strokeLinecap="round" />
          <path d="M12 13C7 13 4 9.5 4 5c4.5 0 8 2.5 8 8z" />
          <path d="M12 11c5 0 8-3.5 8-8-4.5 0-8 2.5-8 8z" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
          <polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.6 5.7 21 7 14 2 9.3 9 8.5" strokeLinejoin="round" />
        </svg>
      );
  }
}

function SmartGalleryMedia({ item, mini = false }) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [item?.image]);

  const bgGradient = `linear-gradient(135deg, #0F4C33 0%, #155D3F 55%, ${item?.accentColor || "#D9622B"} 145%)`;

  if (!imgFailed && item?.image) {
    return (
      <img
        src={item.image}
        alt={item.title}
        className={mini ? undefined : styles.featuredImage}
        onError={() => setImgFailed(true)}
      />
    );
  }

  if (mini) {
    return (
      <div className={styles.artMiniFallback} style={{ background: bgGradient }}>
        <ThemeArtwork size={24} theme={item?.theme} />
      </div>
    );
  }

  return (
    <div className={styles.artFallback} style={{ background: bgGradient }}>
      <div className={styles.artFallbackPattern} />
      <div className={styles.artOrbOne} />
      <div className={styles.artOrbTwo} />
      <div className={styles.artCenterEmblem}>
        <ThemeArtwork size={46} theme={item?.theme} />
      </div>
    </div>
  );
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems =
    activeCategory === "todas"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const safeIndex = activeIndex < filteredItems.length ? activeIndex : 0;
  const currentItem = filteredItems[safeIndex] || GALLERY_ITEMS[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveIndex(0);
  };

  useEffect(() => {
    if (isPaused || lightboxOpen || filteredItems.length <= 1) return;
    const timer = setInterval(handleNext, 5500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, filteredItems.length, handleNext]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  return (
    <section id="galeria" className={`section-padding ${styles.gallerySection}`}>
      <div className="container">
        <SectionHeader
          description="Explora por categoría o selecciona cada recuerdo para conocer las experiencias que viven nuestros estudiantes en la I.E. N° 10433."
          tag="Vida Escolar"
          title="Galería de Actividades"
        />

        <div className={styles.filterBar} role="tablist" aria-label="Filtrar galería por categoría">
          {GALLERY_CATEGORIES.map((cat) => {
            const count =
              cat.id === "todas"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterChip} ${isActive ? styles.filterChipActive : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.showcaseGrid}>
          <div
            className={styles.featuredStage}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div key={currentItem.id} className={styles.mediaLayer}>
              <SmartGalleryMedia item={currentItem} />
            </div>
            <div className={styles.stageScrim} />

            <div className={styles.stageTopBar}>
              <span className={styles.categoryGlassBadge}>
                <span className={styles.badgeDot} />
                <span>{currentItem.categoryLabel}</span>
              </span>

              <div className={styles.topActions}>
                <span className={styles.counterPill}>
                  {String(safeIndex + 1).padStart(2, "0")} /{" "}
                  {String(filteredItems.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  className={styles.expandBtn}
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Ampliar fotografía"
                  title="Ver en pantalla completa"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.stageBottomContent}>
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <MaterialIcon name="calendar" size={15} />
                  <span>{currentItem.date}</span>
                </span>
                <span>•</span>
                <span className={styles.metaItem}>
                  <MaterialIcon name="location" size={15} />
                  <span>{currentItem.location}</span>
                </span>
              </div>

              <h3 className={styles.stageTitle}>{currentItem.title}</h3>
              <p className={styles.stageDescription}>{currentItem.description}</p>

              <div className={styles.stageControlsRow}>
                <div className={styles.navButtons}>
                  <button
                    type="button"
                    className={styles.circleNavBtn}
                    onClick={handlePrev}
                    aria-label="Actividad anterior"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.circleNavBtn}
                    onClick={handleNext}
                    aria-label="Siguiente actividad"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <button
                  type="button"
                  className={styles.lightboxTextBtn}
                  onClick={() => setLightboxOpen(true)}
                >
                  <span>Ampliar recuerdo</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M15 3h6v6M21 3l-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {!isPaused && !lightboxOpen && filteredItems.length > 1 && (
              <div key={`${currentItem.id}-${activeCategory}`} className={styles.progressTrack}>
                <div className={styles.progressFill} />
              </div>
            )}
          </div>

          <aside className={styles.playlistPanel} aria-label="Lista de actividades">
            <div className={styles.playlistHeader}>
              <span className={styles.playlistTitle}>Momentos destacados</span>
              <span className={styles.playlistHint}>Selecciona para ver</span>
            </div>

            <div className={styles.thumbList}>
              {filteredItems.map((item, idx) => {
                const isSelected = idx === safeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.thumbCard} ${isSelected ? styles.thumbCardActive : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className={styles.thumbMedia}>
                      <SmartGalleryMedia item={item} mini />
                    </div>
                    <div className={styles.thumbInfo}>
                      <span>{item.categoryLabel}</span>
                      <h4>{item.title}</h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          <div className={styles.lightboxCard} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar vista ampliada"
            >
              ✕
            </button>
            <div className={styles.lightboxMedia}>
              <SmartGalleryMedia item={currentItem} />
            </div>
            <div className={styles.lightboxBody}>
              <div className={styles.metaRow}>
                <span>{currentItem.categoryLabel}</span>
                <span>•</span>
                <span className={styles.metaItem}>
                  <MaterialIcon name="calendar" size={15} />
                  <span>{currentItem.date}</span>
                </span>
                <span>•</span>
                <span className={styles.metaItem}>
                  <MaterialIcon name="location" size={15} />
                  <span>{currentItem.location}</span>
                </span>
              </div>
              <h3>{currentItem.title}</h3>
              <p>{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}