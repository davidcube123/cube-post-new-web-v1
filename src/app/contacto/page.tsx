"use client";
import { useLanguage } from "@/lib/i18n";
export default function Contact() {
  const { t, language } = useLanguage();
  return (
    <section className="contact-layout">
      <div>
        <h1>{t.contact.title}</h1>
        <p className="contact-intro">{t.contact.subtitle}</p>
        <h2>Barcelona</h2>
        <a className="contact-line" href="mailto:info@cube-post.com">
          info@cube-post.com <span>↗</span>
        </a>
        <a className="contact-line" href="tel:+34932912433">
          +34 932 91 24 33 <span>↗</span>
        </a>
        <a
          className="contact-address"
          href="https://www.google.com/maps/search/?api=1&query=Carrer+Consell+de+Cent+68B+08015+Barcelona+Spain"
          target="_blank"
          rel="noreferrer"
        >
          Carrer Consell de Cent, 68B
          <br />
          08015 Barcelona, {language === "es" ? "España" : "Spain"}
          <br />
          <span className="text-link">
            {language === "es" ? "Cómo llegar" : "Directions"} ↗
          </span>
        </a>
        <p>{t.contact.infoDesc}</p>
      </div>
      <img
        className="space-photo"
        src="/espacios/pasillo_entrada.jpg"
        alt={t.spaces.items.hallway}
      />
    </section>
  );
}
