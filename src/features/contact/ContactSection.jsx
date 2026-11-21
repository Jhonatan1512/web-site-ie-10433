import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import MaterialIcon from "../../components/ui/MaterialIcon";
import { CONTACT_DATA } from "../../data/conactData";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState(CONTACT_DATA.topics[0].id);
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [grade, setGrade] = useState(CONTACT_DATA.grades[0]);
  const [message, setMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const activeTopicObj =
    CONTACT_DATA.topics.find((t) => t.id === selectedTopic) || CONTACT_DATA.topics[0];

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      setCopiedKey(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim() || !message.trim()) {
      setErrorMsg("Por favor completa tu nombre, celular o correo y el detalle de tu consulta.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const cleanPhone = CONTACT_DATA.phoneRaw.replace(/\D/g, "");
    const composedText = [
      `Hola I.E. N° 10433 (Lajas), soy *${fullName.trim() || "un padre/madre de familia"}*.`,
      `*Motivo:* ${activeTopicObj.label}`,
      grade !== CONTACT_DATA.grades[0] ? `*Grado:* ${grade}` : null,
      `*Consulta:* ${message.trim() || "Deseo recibir información institucional."}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(composedText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFullName("");
    setContactInfo("");
    setGrade(CONTACT_DATA.grades[0]);
    setMessage("");
    setErrorMsg("");
  };

  return (
    <section id="contactos" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <SectionHeader
          tag={CONTACT_DATA.tag}
          title={CONTACT_DATA.title}
          description={CONTACT_DATA.subtitle}
        />

        <div className={styles.mainGrid}>
          <aside className={styles.infoHubCard}>
            <div>
              <div className={styles.liveStatusPill}>
                <span className={styles.liveDot} />
                <span>{CONTACT_DATA.statusBadge}</span>
              </div>

              <h3 className={styles.hubTitle}>{CONTACT_DATA.institutionalTitle}</h3>
              <p className={styles.hubSubtitle}>{CONTACT_DATA.institutionalSubtitle}</p>

              <div className={styles.channelList}>
                {/* Ubicación */}
                <div className={styles.channelItem}>
                  <div className={styles.channelLeft}>
                    <div className={styles.channelIconBox}>
                      <MaterialIcon name="location" size={20} />
                    </div>
                    <div className={styles.channelText}>
                      <strong>Ubicación</strong>
                      <span>{CONTACT_DATA.address}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelLeft}>
                    <div className={styles.channelIconBox}>
                      <MaterialIcon name="schedule" size={20} />
                    </div>
                    <div className={styles.channelText}>
                      <strong>Horario Escolar y Atención</strong>
                      <span>{CONTACT_DATA.schedule}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.channelItem}>
                  <div className={styles.channelLeft}>
                    <div className={styles.channelIconBox}>
                      <MaterialIcon name="phone" size={20} />
                    </div>
                    <div className={styles.channelText}>
                      <strong>Teléfono / WhatsApp</strong>
                      <span>{CONTACT_DATA.phoneDisplay}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${
                      copiedKey === "phone" ? styles.copyBtnSuccess : ""
                    }`}
                    onClick={() => handleCopy(CONTACT_DATA.phoneDisplay, "phone")}
                    aria-label="Copiar número telefónico"
                  >
                    <span>{copiedKey === "phone" ? "Copiado" : "Copiar"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.socialActions}>
              <a
                href={CONTACT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappDirectBtn}
              >
                <MaterialIcon name="whatsapp" size={18} />
                <span>WhatsApp</span>
              </a>
              <a
                href={CONTACT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebookDirectBtn}
              >
                <MaterialIcon name="facebook" size={18} />
                <span>Facebook</span>
              </a>
            </div>
          </aside>

          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div>
                <h3>Envíanos un Mensaje</h3>
                <p>Selecciona el motivo de tu consulta para orientarte mejor.</p>
              </div>
              <span className={styles.responseBadge}>Atención directa</span>
            </div>

            {submitted ? (
              <div className={styles.successState} role="status">
                <div className={styles.successIconCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4>¡Consulta registrada con éxito!</h4>
                <p>
                  Gracias, <strong>{fullName}</strong>. Hemos recibido tu mensaje sobre{" "}
                  <strong>{activeTopicObj.label}</strong> y nos comunicaremos contigo al{" "}
                  <strong>{contactInfo}</strong> a la brevedad.
                </p>
                <button type="button" className="btn-pill btn-naranja" onClick={handleResetForm}>
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.topicGroup}>
                  <span className={styles.fieldLabel}>Motivo de consulta</span>
                  <div className={styles.topicPills} role="radiogroup" aria-label="Motivo de consulta">
                    {CONTACT_DATA.topics.map((topic) => {
                      const isActive = topic.id === selectedTopic;
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          role="radio"
                          aria-checked={isActive}
                          className={`${styles.topicPill} ${isActive ? styles.topicPillActive : ""}`}
                          onClick={() => setSelectedTopic(topic.id)}
                        >
                          {topic.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.fieldsRow}>
                  <div className={styles.fieldBlock}>
                    <label htmlFor="contact-fullname" className={styles.fieldLabel}>
                      Nombre del Padre / Apoderado
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      className={styles.inputControl}
                      placeholder="Ej. María Mendoza"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className={styles.fieldBlock}>
                    <label htmlFor="contact-info" className={styles.fieldLabel}>
                      Celular o Correo
                    </label>
                    <input
                      id="contact-info"
                      type="text"
                      className={styles.inputControl}
                      placeholder="Ej. 987 654 321"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.fieldBlock}>
                  <label htmlFor="contact-grade" className={styles.fieldLabel}>
                    Grado de interés (opcional)
                  </label>
                  <select
                    id="contact-grade"
                    className={styles.selectControl}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    {CONTACT_DATA.grades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.fieldBlock}>
                  <label htmlFor="contact-message" className={styles.fieldLabel}>
                    Consulta
                  </label>
                  <textarea
                    id="contact-message"
                    className={styles.textareaControl}
                    placeholder="Escribe tu consulta aquí..."
                    maxLength={400}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className={styles.textareaFooter}>
                    <span>Campos obligatorios marcados al enviar</span>
                    <span>{message.length} / 400</span>
                  </div>
                </div>

                {errorMsg && (
                  <div className={styles.errorBanner} role="alert">
                    {errorMsg}
                  </div>
                )}

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitBtn}>
                    <span>Enviar Consulta</span>
                  </button>
                  <button
                    type="button"
                    className={styles.waQuickSubmitBtn}
                    onClick={handleSendViaWhatsApp}
                  >
                    <MaterialIcon name="whatsapp" size={17} />
                    <span>Vía WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className={styles.locationBanner}>
          <div className={styles.locationInfo}>
            <span className={styles.locationTag}>
              <MaterialIcon name="location" size={14} />
              <span>Cómo llegar</span>
            </span>
            <h3>Visítanos en Lajas, Chota</h3>
            <p>{CONTACT_DATA.reference}</p>
            <a
              href={CONTACT_DATA.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsExternalBtn}
            >
              <span>Abrir en Google Maps</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Ubicación de la I.E. N° 10433 en Lajas, Chota"
              src={CONTACT_DATA.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}