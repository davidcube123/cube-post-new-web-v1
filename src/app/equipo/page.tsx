"use client";
import { useLanguage } from "@/lib/i18n";
import { teamMembers } from "@/lib/team";
// A visual association only: these images do not attribute film/LUT authorship.
// Originals are framed with CSS; source files and the project gallery remain intact.
const visuals = [
  "/lmt/dos-tumbas-lmt.jpg",
  "/lmt/ruido-lmt.jpg",
  "/lmt/siempre-es-invierno-lmt.jpg",
  "/catalogue/27562e4597517806.jpg",
  "/lmt/map-leads-to-you-lmt.jpg",
  "/lmt/rastre-del-llop-lmt.jpg",
  "/lmt/les-irresponsables-lmt.jpg",
  "/lmt/golpes-lmt.jpg",
  "/catalogue/4a0fedab2c56a26f.jpg",
];
export default function Team() {
  const { t } = useLanguage();
  return <section className="editorial-page team-page optical-team">
    <div className="page-heading"><h1>{t.team.title}</h1></div>
    <div className="optical-team-grid">{teamMembers.map((member,i)=><article key={member.name} className="optical-member">
      <div className="team-lut" aria-hidden="true"><img className={i===3||i===8?"lut-catalogue":"lut-original"} src={visuals[i]} alt="" loading={i<3?"eager":"lazy"} draggable={false}/></div>
      <div className="optical-member-info">
        {member.email?<details><summary>{member.name}</summary><a className="team-email" href={`mailto:${member.email}`}>{member.email} ↗</a></details>:<h2 className="member-name">{member.name}</h2>}
        <a className="imdb-link" href={member.imdb} target="_blank" rel="noreferrer" aria-label={`IMDb — ${member.name}`}>IMDb ↗</a>
      </div>
    </article>)}</div>
  </section>;
}
