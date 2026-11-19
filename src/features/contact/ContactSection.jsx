import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MaterialIcon } from "../../components/ui/MaterialIcon";
import { SCHOOL_INFO } from "../../data/schoolData";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const [formData, setFormData] = useState({ nombre: "", celular: "", mensaje: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `¡Gracias, ${formData.nombre.trim()}! Tu consulta ha sido recibida. También puedes escribirnos por WhatsApp para atención rápida.`
    );
    setFormData({ nombre: "", celular: "", mensaje: "" });
  };

  const whatsappLink = `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola, deseo información sobre la I.E. 10433 de Lajas"
  )}`;

  return (
    <section id="contactos" className="section-padding bg-soft">
      <div className="container">
        <SectionHeader tag="Estamos para atenderte" title="Contactos" />

        <div className={styles.contactGrid}>
          <div className={styles.contactInfoCard}>
            <h3>Información Institucional</h3>
            <p>
              Comunícate con nosotros para consultas sobre horarios, actividades escolares o
              información general.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <MaterialIcon name="location" size={24} />
                </span>
                <div>
                  <strong>Ubicación:</strong>
                  <p>{SCHOOL_INFO.fullLocation}</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <MaterialIcon name="schedule" size={24} />
                </span>
                <div>
                  <strong>Horario Escolar y Atención:</strong>
                  <p>{SCHOOL_INFO.schedule}</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <MaterialIcon name="phone" size={24} />
                </span>
                <div>
                  <strong>Teléfono / WhatsApp:</strong>
                  <p>{SCHOOL_INFO.phoneDisplay}</p>
                </div>
              </div>
            </div>

            <div className={styles.socialButtons}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-whatsapp"
              >
                <MaterialIcon name="chat" size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-facebook"
              >
                <MaterialIcon name="facebook" size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className={styles.contactFormCard}>
            <h3>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre del Padre / Apoderado</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ej. María Mendoza"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="celular">Celular o Correo</label>
                <input
                  type="text"
                  id="celular"
                  placeholder="Ej. 987 654 321"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mensaje">Consulta</label>
                <textarea
                  id="mensaje"
                  rows="4"
                  placeholder="Escribe tu consulta aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-pill btn-naranja btn-block">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}