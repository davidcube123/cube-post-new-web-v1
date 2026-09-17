"use client";
import Link from "next/link";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
export function Header() {
  const path = usePathname().replace(/\/$/, "") || "/";
  const menuButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const links = [
    ["/trabajos", t.nav.works],
    ["/servicios", t.nav.services],
    ["/espacios", t.nav.spaces],
    ["/equipo", t.nav.team],
    ["/contacto", t.nav.contact],
  ];
  return (
    <header className="editorial-header">
      <a className="skip-link" href="#contenido">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Link href="/" aria-label={language === "es" ? "Cube Post — Inicio" : "Cube Post — Home"} aria-current={path === "/" ? "page" : undefined} className="brand brand-key">
        <span className="brand-logo"><img src="/cube-logo-white.png" alt="Cube Post" /></span>
        <span className="brand-home"><House size={19} strokeWidth={1.5} aria-hidden="true"/><span>{language === "es" ? "Inicio" : "Home"}</span></span>
      </Link>
      <button
        ref={menuButton}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open
          ? language === "es"
            ? "Cerrar ×"
            : "Close ×"
          : language === "es"
            ? "Menú +"
            : "Menu +"}
      </button>
      <nav
        id="main-nav"
        aria-label={language === "es" ? "Principal" : "Main"}
        className={open ? "is-open" : ""}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="languages">
        {(["es", "en"] as const).map((l) => (
          <button
            key={l}
            aria-pressed={language === l}
            onClick={() => setLanguage(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
