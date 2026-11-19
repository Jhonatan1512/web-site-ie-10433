import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { FAQ_LIST } from "../../data/schoolData";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="preguntas" className="section-padding">
      <div className="container">
        <SectionHeader tag="Información Útil" title="Preguntas Frecuentes" />

        <div className={styles.faqBox}>
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={styles.faqItem} key={item.question}>
                <button className={styles.faqBtn} onClick={() => toggleItem(idx)}>
                  {item.question} <span>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}