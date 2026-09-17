"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="editorial-footer">
      <div className="footer-top">
        <Link href="/" className="brand">
          <img src="/cube-logo-white.png" alt="Cube Post" />
        </Link>
        <a href="mailto:info@cube-post.com">info@cube-post.com ↗</a>
        <a href="tel:+34932912433">+34 932 91 24 33</a>
        <img
          className="sony-partner"
          src="/sony-partner.jpg"
          alt="Sony Official Partner"
        />
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {t.footer.copyright}
        </span>
        <a
          href="https://www.instagram.com/cube__post/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
        <a
          href="https://www.linkedin.com/company/cube-post/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <Link href="/privacy-policy">{t.footer.privacy}</Link>
        <Link href="/condiciones-generales-de-venta">{t.footer.terms}</Link>
      </div>
    </footer>
  );
}
