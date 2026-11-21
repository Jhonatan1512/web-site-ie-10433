import { useState, useEffect } from "react";

export function useTypewriter(
  text,
  speed = 68,
  pauseAfterComplete = 1500,
  resetDelay = 280
) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState("typing"); 

  useEffect(() => {
    setVisibleCount(0);
    setPhase("typing");
  }, [text]);

  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (visibleCount < text.length) {
        timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, speed);
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => {
        setVisibleCount(0);
        setPhase("resetting");
      }, pauseAfterComplete);
    } else if (phase === "resetting") {
      timer = setTimeout(() => {
        setPhase("typing");
      }, resetDelay);
    }

    return () => clearTimeout(timer);
  }, [phase, visibleCount, text, speed, pauseAfterComplete, resetDelay]);

  return {
    displayedText: text.slice(0, visibleCount),
    isTyping: phase === "typing" && visibleCount < text.length,
  };
}