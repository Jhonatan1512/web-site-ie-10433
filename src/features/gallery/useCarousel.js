import { useState, useEffect, useCallback } from "react";

export function useCarousel(totalSlides, autoPlayMs = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(nextSlide, autoPlayMs);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlayMs, totalSlides]);

  return { currentIndex, goToSlide, nextSlide, prevSlide };
}