"use client";
import { useState, useEffect, useRef, type CSSProperties } from "react";
import { projects, type Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";
export function Poster({
  project,
  priority = false,
}: { project: Project; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const { language } = useLanguage();
  if (!failed && project.imageKind === "publicity") return (
    <div className="publicity-card">
      <img src={project.poster} alt={project.title} loading={priority ? "eager" : "lazy"} onError={() => setFailed(true)}/>
      <div><span>{language === "es" ? "Imagen promocional" : "Publicity image"}</span><strong>{project.title}</strong></div>
    </div>
  );
  return failed ? (
    <div className="poster-fallback">
      <span>CUBE Post</span>
      <strong>{project.title}</strong>
    </div>
  ) : (
    <img
      className={project.posterFit ? "poster poster-contain" : "poster"}
      src={project.poster}
      alt={project.title}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
export function ProjectGallery({ featured = false, carousel = false }: { featured?: boolean; carousel?: boolean }) {
  const { t, language } = useLanguage();
  const es = language === "es";
  const years = Array.from(
    new Set(projects.flatMap((p) => (p.year ? [p.year] : []))),
  ).sort((a, b) => b - a);
  const [filter, setFilter] = useState(carousel ? "all" : String(years[0] || "all"));
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.includes("?") ? window.location.hash.split("?")[1] : window.location.search);
    if (params.get("year") === "all") setFilter("all");
  }, []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  };
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
  const shown = featured
    ? projects.filter((p) => p.featured)
    : projects.filter(
        (p) =>
          (filter === "all" ||
            (filter === "archive" && !p.year) ||
            String(p.year) === filter) &&
          [p.title, ...(p.searchAliases || [])].some((title) => normalize(title).includes(normalize(query))),
      ).sort((a, b) => (b.year || 0) - (a.year || 0));
  return (
    <>
      {!featured && (
        <div className="archive-tools">
          {!carousel && <div className="year-tabs" aria-label={es ? "Año" : "Year"}>
            {[
              ...years.map(String),
              ...(projects.some((p) => !p.year) ? ["archive"] : []),
              "all",
            ].map((y) => (
              <button
                key={y}
                aria-pressed={filter === y}
                onClick={() => setFilter(y)}
              >
                {y === "all"
                  ? es
                    ? "Todos"
                    : "All"
                  : y === "archive"
                    ? es
                      ? "Archivo"
                      : "Archive"
                    : y}
              </button>
            ))}
          </div>}
          {carousel && <button className="text-link" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? (es ? "Reanudar movimiento" : "Resume motion") : (es ? "Pausar movimiento" : "Pause motion")}</button>}
          <label className="search-label">
            <span>{es ? (carousel ? "Busca tu trabajo" : "Buscar trabajo") : "Search work"}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={es ? "Título…" : "Title…"}
            />
          </label>
        </div>
      )}
      {carousel && !query.trim() ? <div className={`year-reels${paused || selected ? " is-paused" : ""}`}>
        {years.map((year, index) => {
          const films = projects.filter(p => p.year === year);
          return <section className={`year-reel ${index % 2 ? "reel-left" : "reel-right"}`} key={year} aria-label={`${es ? "Trabajos" : "Works"} ${year}`}>
            <div className="reel-heading"><h3>{year}</h3><span>{films.length} {es ? "trabajos" : "works"}</span></div>
            <div className="reel-window"><div className="reel-track" style={{"--reel-time": `${films.length * 7}s`} as CSSProperties}>
              {[0, 1].map(copy => <div className="reel-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {films.map(p => <button className="reel-poster" key={p.title} tabIndex={copy ? -1 : 0} aria-label={`${es ? "Ver ficha de" : "View"} ${p.title}`} onClick={e => {opener.current = e.currentTarget; setSelected(p);}}>
                  <Poster project={p}/><span>{p.title}</span>
                </button>)}
              </div>)}
            </div></div>
          </section>;
        })}
      </div> : <div className={featured ? "project-grid featured-grid" : "project-grid"}>
        {shown.map((p, i) => (
          <article key={p.title}>
            <button
              className="poster-button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setSelected(p);
              }}
              aria-label={`${es ? "Ver ficha de" : "View"} ${p.title}`}
            >
              <Poster project={p} priority={i < 4} />
            </button>
            <div className="project-caption">
              <h2>
                <button
                  onClick={(e) => {
                    opener.current = e.currentTarget;
                    setSelected(p);
                  }}
                >
                  {p.title}
                </button>
              </h2>
              {p.lmt && (
                <button
                  className="lut-link"
                  onClick={(e) => {
                    opener.current = e.currentTarget;
                    setSelected(p);
                  }}
                  aria-label={`LUT — ${p.title}`}
                >
                  LUT ↗
                </button>
              )}
            </div>
            {p.director && <p className="project-credit">{p.director}</p>}
          </article>
        ))}
      </div>}
      {!shown.length && (
        <p role="status">
          {es
            ? "No hay proyectos con ese título."
            : "No projects match this title."}
        </p>
      )}
      <dialog
        ref={dialog}
        className="film-dialog"
        aria-labelledby={selected ? "film-title" : undefined}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {selected && (
          <div className="film-sheet">
            <button className="dialog-close" onClick={close} autoFocus>
              {es ? "Cerrar" : "Close"} ×
            </button>
            <div className="film-top">
              <Poster project={selected} />
              <div>
                <span className="eyebrow">
                  CUBE Post {selected.year && `/ ${selected.year}`}
                </span>
                <h2 id="film-title">{selected.title}</h2>
                <dl>
                  {selected.director && (
                    <>
                      <dt>{t.works.director}</dt>
                      <dd>{selected.director}</dd>
                    </>
                  )}
                  {selected.dop && (
                    <>
                      <dt>{t.works.dop}</dt>
                      <dd>{selected.dop}</dd>
                    </>
                  )}
                </dl>
                <a
                  className="text-link"
                  href={selected.imdbUrl || `https://www.imdb.com/find/?q=${encodeURIComponent(selected.omdbTitle)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selected.imdbUrl ? "IMDb" : es ? "Buscar en IMDb" : "Search IMDb"} ↗
                </a>
                {selected.lmt && (
                  <a className="text-link" href="#film-lut">
                    LUT / Color Science ↓
                  </a>
                )}
              </div>
            </div>
            {selected.lmt && (
              <section id="film-lut" className="film-lut">
                <h3>LUT / Color Science</h3>
                <a href={selected.lmt} target="_blank" rel="noreferrer">
                  <img
                    src={selected.lmt}
                    alt={`LMT / LUT — ${selected.title}`}
                    loading="lazy"
                  />
                </a>
              </section>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
