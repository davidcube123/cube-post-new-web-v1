"use client";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useLanguage } from "@/lib/i18n";
export default function Works() {
  const { t } = useLanguage();
  return (
    <div className="editorial-page">
      <div className="page-heading">
        <h1>{t.works.title}</h1>
        <p>{t.works.subtitle}</p>
      </div>
      <ProjectGallery />
    </div>
  );
}
