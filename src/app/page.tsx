"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ProjectGallery } from "@/components/ProjectGallery";
export default function Home() {
  const { t, language } = useLanguage();
  const es = language === "es";
  return (
    <>
      <section className="home-intro">
        <div>
          <span className="eyebrow">CUBE Post / Barcelona</span>
          <h1>{es ? "Postproducción de imagen" : "Image postproduction"}</h1>
          <Link className="text-link" href="/trabajos">
            {t.nav.works} ↗
          </Link>
        </div>
        <img
          src="/espacios/Grading_1.jpg"
          alt={t.spaces.items.color1}
          className="space-photo"
          fetchPriority="high"
        />
      </section>
      <section className="editorial-page home-work">
        <div className="section-heading">
          <h2>{t.works.title}</h2>
          <Link className="text-link" href="/trabajos?year=all">
            {es ? "Ver todos" : "View all"} ↗
          </Link>
        </div>
        <ProjectGallery carousel />
      </section>
      <section className="color-feature">
        <div>
          <span className="eyebrow">02 / Color Science</span>
          <h2>{t.services.items.color.title}</h2>
          <p>{t.services.items.color.desc}</p>
          <Link className="text-link" href="/servicios">
            {t.nav.services} ↗
          </Link>
        </div>
        <img
          src="/lmt/dos-tumbas-lmt.jpg"
          alt="Dos Tumbas — LMT / LUT"
          loading="lazy"
        />
      </section>
      <section className="home-spaces">
        <img
          className="space-photo"
          src="/espacios/entrada.jpg"
          alt={t.spaces.items.lounge}
          loading="lazy"
        />
        <div>
          <span className="eyebrow">03 / Barcelona</span>
          <h2>{t.spaces.title}</h2>
          <p>{t.spaces.subtitle}</p>
          <Link className="text-link" href="/espacios">
            {es ? "Recorrer los espacios" : "Explore our spaces"} ↗
          </Link>
          <Link className="text-link" href="/equipo">
            {t.team.title} ↗
          </Link>
        </div>
      </section>
    </>
  );
}
