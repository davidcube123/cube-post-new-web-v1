"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
const keys = ["workflow", "color", "qc", "editing", "grading", "online", "remote", "mastering"] as const;
export default function Services() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(1);
  return <div className="editorial-page world-page">
    <div className="page-heading"><h1>{t.services.title}</h1><p>{t.services.subtitle}</p></div>
    <div className="world-layout">
      <div className="service-world" aria-label={language === "es" ? "Mundo CUBE: selecciona un servicio" : "CUBE world: select a service"}>
        <div className="corporate-cube"><img src="/cube-hero.png" alt={language === "es" ? "Cubo original de CUBE Post" : "Original CUBE Post cube"} /></div>
        <div className="orbit-services">{keys.map((key,i)=><button key={key} className={`orbit-service orbit-${i}`} aria-pressed={active===i} aria-controls="service-description" onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span>{t.services.items[key].title}</button>)}</div>
      </div>
      <section id="service-description" className="service-description" aria-live="polite" aria-atomic="true"><span className="eyebrow">CUBE / {String(active+1).padStart(2,"0")}</span><h2>{t.services.items[keys[active]].title}</h2><p>{t.services.items[keys[active]].desc}</p><div className="service-position" aria-hidden="true">{keys.map((key,i)=><span key={key} className={i===active?"selected":""}/>)}</div></section>
    </div>
    <aside className="security-note"><p>{t.services.encryptionDesc}</p><h2>{t.services.encryption}</h2></aside>
  </div>;
}
