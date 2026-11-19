import { SectionHeader } from "../../components/ui/SectionHeader";
import { GALLERY_SLIDES } from "../../data/schoolData";
import { useCarousel } from "./useCarousel";
import styles from "./GallerySection.module.css";
import MaterialIcon from "../../components/ui/MaterialIcon";

const SLIDE_BG_MAP = {
  "bg-verde-slide": styles.bgVerdeSlide,
  "bg-naranja-slide": styles.bgNaranjaSlide,
  "bg-amarillo-slide": styles.bgAmarilloSlide,
};

export function GallerySection() {
  const { currentIndex, goToSlide, nextSlide, prevSlide } = useCarousel(GALLERY_SLIDES.length, 4000);

  return (
    <section id="galeria" className="section-padding bg-soft">
      <div className="container">
        <SectionHeader
          tag="Vida Escolar"
          title="Galería de Actividades"
          description="Desliza o usa los botones para recorrer los momentos más destacados de nuestra escuela."
        />

        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.carouselBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
            aria-label="Anterior"
          >
            ❮
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {GALLERY_SLIDES.map((slide, idx) => (
                <div className={styles.carouselSlide} key={idx}>
                  {slide.type === "image" ? (
                    <>
                      <img src={slide.src} alt={slide.alt} />
                      <div className={styles.slideCaption}>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </>
                  ) : (
                    <div
                      className={`${styles.slidePlaceholder} ${SLIDE_BG_MAP[slide.bgClass] || ""}`}
                    >
                      <span className={styles.slideEmoji}>
                        <MaterialIcon name={slide.icon} size={64} />
                      </span>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className={`${styles.carouselBtn} ${styles.nextBtn}`}
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            ❯
          </button>
        </div>

        <div className={styles.carouselDots}>
          {GALLERY_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.active : ""}`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}